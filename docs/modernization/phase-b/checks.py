import subprocess,os,pathlib,json,time
out=pathlib.Path('docs/modernization/phase-b');env=dict(os.environ,PATH='/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:'+os.environ['PATH'],CI='true');results=[]
for name,cmd in [('build',['npm','run','build']),('lint',['npm','run','lint']),('typecheck',['npm','run','typecheck']),('tests',['npm','test','--','--runInBand']),('audit',['npm','audit','--json']),('audit-production',['npm','audit','--omit=dev','--json']),('dependency-tree',['npm','ls','--all','--json']),('outdated',['npm','outdated','--include=dev','--json'])]:
 start=time.monotonic()
 with open(out/(name+('.json' if name in ['audit','audit-production','dependency-tree','outdated'] else '.txt')),'w') as f:r=subprocess.run(cmd,env=env,stdout=f,stderr=subprocess.STDOUT)
 results.append({'name':name,'command':cmd,'exitCode':r.returncode,'seconds':round(time.monotonic()-start,3)});print(results[-1],flush=True)
 (out/'checks.json').write_text(json.dumps(results,indent=2))
