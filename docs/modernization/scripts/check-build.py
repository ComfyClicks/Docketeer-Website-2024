"""Lock-preserving diagnostics in the isolated clone; never applies fixes."""
import os,subprocess,pathlib,json,time,datetime,hashlib
out=pathlib.Path(os.environ.get('AUDIT_OUTPUT','docs/modernization'))/'diagnostics/raw'
out.mkdir(parents=True,exist_ok=True)
if (out/'build-execution.json').exists():raise SystemExit('Refusing to overwrite build evidence; set AUDIT_OUTPUT.')
nodebin=os.environ.get('AUDIT_NODE_BIN','/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin')
env=dict(os.environ,PATH=nodebin+':'+os.environ['PATH'],CI='true',npm_config_fetch_retries='1',npm_config_fetch_timeout='30000')
records=[]
commands=[('install',['npm','ci','--no-audit','--no-fund']),('build',['npm','run','build']),('lint',['npm','run','lint']),('typecheck',['node','node_modules/typescript/bin/tsc','--noEmit']),('tests',['npm','test','--','--runInBand']),('outdated',['npm','outdated','--include=dev','--json']),('audit-omit-dev',['npm','audit','--omit=dev','--ignore-scripts','--json'])]
for name,cmd in commands:
 start=time.monotonic()
 with open(out/(name+('.json' if name in ['outdated','audit-omit-dev'] else '.txt')),'w') as f:
  try:r=subprocess.run(cmd,env=env,stdout=f,stderr=subprocess.STDOUT,timeout=240);code=r.returncode
  except subprocess.TimeoutExpired:code=124
 records.append(dict(name=name,command=cmd,exitCode=code,durationSeconds=round(time.monotonic()-start,3),completedAt=datetime.datetime.now(datetime.timezone.utc).isoformat()))
 (out/'build-execution.json').write_text(json.dumps(records,indent=2))
 print(name,code,records[-1]['durationSeconds'],flush=True)
 if name=='install' and code:break
print('hashes', {n:hashlib.sha256(pathlib.Path(n).read_bytes()).hexdigest() for n in ['package.json','package-lock.json']})
