"""Verify the new tooling rejects intentional defects without changing application files."""
import json, os, pathlib, subprocess, tempfile
root = pathlib.Path.cwd()
env = dict(os.environ, PATH='/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:' + os.environ['PATH'])
with tempfile.TemporaryDirectory(prefix='docketeer-tooling-') as tmp:
    tmp = pathlib.Path(tmp)
    bad = tmp / 'bad.tsx'
    bad.write_text("import {useState, useEffect} from 'react';\nexport function Bad({enabled, value}: {enabled: boolean; value: number}) {\n if (enabled) useState(0);\n useEffect(() => { console.log(value); }, []);\n const unused = 1;\n const unsafe: any = value;\n return unsafe;\n}\n")
    lint = subprocess.run([str(root / 'node_modules/.bin/oxlint'), '-c', str(root / '.oxlintrc.json'), str(bad)], env=env, capture_output=True, text=True)
    output = lint.stdout + lint.stderr
    assert lint.returncode != 0
    for rule in ['rules-of-hooks', 'exhaustive-deps', 'no-unused-vars', 'no-explicit-any']:
        assert rule in output, output
    (root / 'docs/modernization/phase-b/lint-negative-control.txt').write_text(output)
    bad.write_text('export const value: number = "not a number";\n')
    compiler = subprocess.run([str(root / 'node_modules/.bin/tsc'), '--noEmit', '--skipLibCheck', str(bad)], cwd=tmp, env=env, capture_output=True, text=True)
    output = compiler.stdout + compiler.stderr
    assert compiler.returncode != 0 and 'TS2322' in output, output
    (root / 'docs/modernization/phase-b/typecheck-negative-control.txt').write_text(output)
print('Negative controls passed: four lint rule families and a TypeScript type mismatch are rejected.')
