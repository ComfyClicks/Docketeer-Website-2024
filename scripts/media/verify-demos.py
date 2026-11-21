"""Decode start/middle/end samples and compare actual MP4 metadata with conversion.json."""
import json
from pathlib import Path
import re
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[2]
REPORT = ROOT / 'reports/media'
magick = shutil.which('magick')
if magick is None:
    raise SystemExit('ImageMagick is required. Install it and make sure magick is on PATH.')

records = json.loads((REPORT / 'conversion.json').read_text())['assets']
results = []
with tempfile.TemporaryDirectory(prefix='docketeer-media-check-') as directory:
    temp = Path(directory)
    executable = temp / 'check-video'
    subprocess.run(['swiftc', str(ROOT / 'scripts/media/check-video.swift'), '-o', str(executable)], check=True)
    samples = []
    for record in records:
        if 'video' not in record:
            continue
        duration = record['durationSeconds']
        observations = []
        for label, seconds in [('start', 0), ('middle', duration / 2), ('end', duration - 0.01)]:
            # Decoder timebase is centiseconds, matching the source GIF timing.
            seconds = int(seconds * 100) / 100
            image = temp / f"{Path(record['video']).stem}-{label}.png"
            output = subprocess.check_output([str(executable), str(ROOT / record['video']), str(seconds), str(image)], text=True).strip()
            match = re.fullmatch(r'duration ([\d.]+); decoded (\d+)x(\d+)', output)
            assert match, output
            actual_duration, width, height = float(match[1]), int(match[2]), int(match[3])
            assert abs(actual_duration - duration) < 0.011, output
            assert (width, height) == (record['videoWidth'], record['videoHeight']), output
            observations.append({'sampleSeconds': seconds, 'actualDurationSeconds': actual_duration, 'width': width, 'height': height})
            if label == 'middle':
                samples.append(image)
        results.append({'video': record['video'], 'decodedSamples': observations})
    subprocess.run([magick, 'montage', *map(str, samples), '-set', 'label', '%f', '-label', '%f', '-font', '/System/Library/Fonts/Supplemental/Arial.ttf', '-pointsize', '12', '-geometry', '400x260+6+20', '-tile', '3x', str(REPORT / 'decoded-middle-frames.jpg')], check=True)
(REPORT / 'decode-validation.json').write_text(json.dumps(results, indent=2) + '\n')
print(f'Validated {len(results)} videos: start/middle/end decode, dimensions, durations.')
