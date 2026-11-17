import os,pathlib,json,re,subprocess,hashlib,datetime
root=pathlib.Path('.');out=pathlib.Path(os.environ.get('AUDIT_OUTPUT','docs/modernization'))/'diagnostics/raw'
out.mkdir(parents=True,exist_ok=True)
files=[root/p for p in subprocess.check_output(['git','ls-files'],text=True).splitlines()]
source=[p for p in files if str(p).startswith('src/') and p.suffix in ['.js','.ts','.tsx','.scss']]
texts={str(p):p.read_text() for p in source}
assets=[p for p in files if str(p).startswith('src/assets/')]
asset_refs=[]
for p in assets:
 uses=[n for n,t in texts.items() if p.name in t]
 asset_refs.append({'file':str(p),'bytes':p.stat().st_size,'filenameReferences':uses,'candidateUnused':not uses and p.name not in pathlib.Path('index.html').read_text()})
patterns={'private-key':r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----','github-token':r'\b(?:ghp_|github_pat_)[A-Za-z0-9_]{20,}','aws-key':r'\bAKIA[A-Z0-9]{16}\b','credential-assignment':r'(?i)(?:api[_-]?key|secret|password|token)\s*[:=]\s*[\"\'][^\"\']{12,}[\"\']'}
findings=[]
for p in files:
 if p.suffix not in ['.js','.tsx','.ts','.json','.md','.yml','.html','.cjs'] or str(p).startswith('.vite/') or p.name=='package-lock.json':continue
 for i,line in enumerate(p.read_text(errors='replace').splitlines(),1):
  for name,pattern in patterns.items():
   if re.search(pattern,line): findings.append({'file':str(p),'line':i,'pattern':name})
manifest=json.load(open('package.json'));lock=json.load(open('package-lock.json'))
result={'capturedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),'sourceLines':sorted([{'file':n,'lines':len(t.splitlines())} for n,t in texts.items()],key=lambda x:-x['lines']),'assetBytes':sum(x['bytes'] for x in asset_refs),'assets':asset_refs,'trackedViteCacheBytes':sum(p.stat().st_size for p in files if str(p).startswith('.vite/')),'directDependencies':len(manifest['dependencies']),'directDevDependencies':len(manifest['devDependencies']),'lockVersion':lock['lockfileVersion'],'lockPackages':len(lock['packages'])-1,'deprecatedInLock':[{'path':p,'version':x['version'],'message':x['deprecated']} for p,x in lock['packages'].items() if x.get('deprecated')],'secretPatternScan':{'scope':'tracked source/config/docs at base commit; excludes lockfile and generated .vite; no history/entropy scan','matches':findings},'manifestHashes':{n:hashlib.sha256(pathlib.Path(n).read_bytes()).hexdigest() for n in ['package.json','package-lock.json']}}
(out/'source-inventory.json').write_text(json.dumps(result,indent=2));print({k:v for k,v in result.items() if k not in ['assets','sourceLines']})
