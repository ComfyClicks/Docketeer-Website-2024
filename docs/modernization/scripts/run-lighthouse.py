"""Sequential cold-navigation lab runs. Use existing Lighthouse; no install."""
import subprocess,os,json,datetime,pathlib
root=pathlib.Path(os.environ.get('AUDIT_OUTPUT','docs/modernization'))
for rel in ['diagnostics/raw','lighthouse/before/mobile','lighthouse/before/desktop']:(root/rel).mkdir(parents=True,exist_ok=True)
if list((root/'lighthouse/before').glob('*/*.report.json')):raise SystemExit('Refusing to overwrite Lighthouse evidence; set AUDIT_OUTPUT to a new directory.')
node=os.environ.get('AUDIT_NODE','/Users/andywhite/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node')
lh=os.environ.get('LIGHTHOUSE_CLI','/Users/andywhite/.npm/_npx/5390d7d89c0de19d/node_modules/lighthouse/cli/index.js')
env=dict(os.environ,CHROME_PATH=os.environ.get('CHROME_PATH','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'))
records=[]
for profile in ['mobile','desktop']:
 for run in range(1,4):
  out=root/'lighthouse'/'before'/profile/f'home-{run}'
  cmd=[node,lh,'https://docketeer.io/','--output=json','--output=html','--output-path='+str(out),'--chrome-flags=--headless=new','--only-categories=performance,accessibility,best-practices,seo','--quiet']
  if profile=='desktop':cmd.append('--preset=desktop')
  start=datetime.datetime.now(datetime.timezone.utc).isoformat()
  with open(str(out)+'.stderr.txt','w') as f:r=subprocess.run(cmd,env=env,stdout=f,stderr=subprocess.STDOUT,timeout=240)
  records.append(dict(profile=profile,run=run,start=start,exitCode=r.returncode,command=cmd))
  (root/'diagnostics'/'raw'/'lighthouse-execution.json').write_text(json.dumps(records,indent=2))
  print(profile,run,r.returncode,flush=True)
