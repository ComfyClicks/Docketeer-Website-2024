"""Run Phase D gates using the baseline Node runtime; preserve raw output."""
import json
import os
from pathlib import Path
import subprocess
import time

out = Path('docs/modernization/phase-d')
env = dict(os.environ, PATH='/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:' + os.environ['PATH'], CI='true')
results = []
for name, command in [
    ('build', ['npm', 'run', 'build']),
    ('lint', ['npm', 'run', 'lint']),
    ('test-types', ['npm', 'run', 'typecheck:tests']),
    ('tests', ['npm', 'test', '--', '--reporter=verbose']),
]:
    started = time.monotonic()
    with (out / (name + '.txt')).open('w') as stream:
        result = subprocess.run(command, env=env, stdout=stream, stderr=subprocess.STDOUT)
    record = {'name': name, 'command': command, 'exitCode': result.returncode, 'seconds': round(time.monotonic() - started, 3)}
    results.append(record)
    (out / 'checks.json').write_text(json.dumps(results, indent=2) + '\n')
    print(record, flush=True)
