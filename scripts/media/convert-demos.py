"""Convert preserved source GIFs with installed macOS AVFoundation and ImageMagick.
Run from repository root. Requires swiftc, magick and cwebp; installs nothing.
H.264 retains original resolution (pads odd dimensions by one pixel), every
decoded frame, and GIF frame delays. Posters use the actual first frame.
"""
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import sys

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'src/assets/demos'
OUTPUT = SOURCE / 'optimized'
REPORT = ROOT / 'docs/modernization/phase-d/media/conversion.json'
MAGICK = shutil.which('magick') or '/usr/local/bin/magick'
LEGACY = {'imageTab2-new', 'imageTab3-new', 'containerTab-new', 'imageTab1-new', 'metricTab-new', 'k8Tab-new', 'hamburgerTab-new', 'configuration'}
CWEBP = shutil.which('cwebp') or '/opt/local/bin/cwebp'
SOURCES = [
    'ContainersFilters_v20.gif', 'Images_v20.gif', 'imageTab2-new.gif',
    'imageTab3-new.gif', 'ContainersMetrics_v20.gif',
    'KubernetesClusterHealthMetrics_v20.gif', 'Navigation_v20.gif',
    'Configurations_v20.png', 'containerTab-new.gif', 'imageTab1-new.gif',
    'metricTab-new.gif', 'k8Tab-new.gif', 'hamburgerTab-new.gif', 'configuration.gif',
]

def run(*args):
    return subprocess.check_output([str(arg) for arg in args], text=True).strip()

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

OUTPUT.mkdir(exist_ok=True)
REPORT.parent.mkdir(parents=True, exist_ok=True)
records = []
previous = {item['source']: item for item in json.loads(REPORT.read_text())['assets']} if '--legacy-only' in sys.argv else {}
with tempfile.TemporaryDirectory(prefix='docketeer-media-') as temporary:
    temp = Path(temporary)
    encoder = temp / 'encode-frames'
    run('swiftc', ROOT / 'scripts/media/encode-frames.swift', '-o', encoder)
    decoder = temp / 'decode-gif-frame'
    run('swiftc', ROOT / 'scripts/media/decode-gif-frame.swift', '-o', decoder)
    for name in SOURCES:
        source = SOURCE / name
        stem = source.stem
        if '--legacy-only' in sys.argv and stem not in LEGACY:
            records.append(previous[str(source.relative_to(ROOT))])
            continue
        poster_png = temp / f'{stem}.png'
        poster = OUTPUT / f'{stem}.webp'
        record = {'source': str(source.relative_to(ROOT)), 'sourceBytes': source.stat().st_size,
                  'sourceSha256': digest(source), 'poster': str(poster.relative_to(ROOT))}
        if stem in LEGACY:
            record.update(json.loads(run(decoder, source, '0', poster_png)))
            record.update({'animation': str(source.relative_to(ROOT)), 'animationBytes': source.stat().st_size,
                           'animationSha256': digest(source), 'delivery': 'Original GIF, explicit Play/Stop only'})
            obsolete = OUTPUT / f'{stem}.mp4'
            if obsolete.exists():
                obsolete.unlink()  # Superseded generated video; original GIF is preserved.
        elif source.suffix == '.gif':
            destination = OUTPUT / f'{stem}.mp4'
            if destination.exists():
                destination.unlink()  # Generated output only; source GIF remains untouched.
            metadata = json.loads(run(encoder, source, destination, poster_png))
            record.update(metadata)
            record.update({'video': str(destination.relative_to(ROOT)), 'videoBytes': destination.stat().st_size,
                           'videoSha256': digest(destination)})
            for staging in OUTPUT.glob(f'{stem}.mp4.sb-*'):
                staging.unlink()
        else:
            width, height = map(int, run(MAGICK, 'identify', '-format', '%w %h', source).split())
            record.update({'width': width, 'height': height})
            run(MAGICK, source, poster_png)
        run(CWEBP, '-quiet', '-q', '90', poster_png, '-o', poster)
        record['posterBytes'] = poster.stat().st_size
        records.append(record)
        REPORT.write_text(json.dumps({'method': 'Five modern GIFs: H.264 800kbps Rec.709; eight legacy GIFs: unchanged originals loaded only after Play; WebP q90 actual first-frame posters',
                                     'magick': run(MAGICK, '-version').splitlines()[0],
                                     'cwebp': run(CWEBP, '-version'), 'assets': records}, indent=2) + '\n')
        print(json.dumps(record), flush=True)
