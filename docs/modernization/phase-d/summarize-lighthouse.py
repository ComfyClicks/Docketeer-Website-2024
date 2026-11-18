"""Derive medians independently for each metric; never select a best run."""
import os,json,pathlib,statistics
root=pathlib.Path(os.environ.get('AUDIT_OUTPUT','docs/modernization'));result={}
metrics=['first-contentful-paint','largest-contentful-paint','cumulative-layout-shift','total-blocking-time','speed-index']
for profile in ['mobile','desktop']:
 files=sorted((root/'lighthouse/before'/profile).glob('*.report.json'));runs=[json.loads(p.read_text()) for p in files]
 assert len(runs)==3 and all(not r.get('runtimeError') for r in runs)
 categories={k:statistics.median([r['categories'][k]['score']*100 for r in runs]) for k in runs[0]['categories']}
 values={k:statistics.median([r['audits'][k]['numericValue'] for r in runs]) for k in metrics}
 resources={}
 for kind in ['total','script','stylesheet','image','font']:
  rows=[next(x for x in r['audits']['resource-summary']['details']['items'] if x['resourceType']==kind) for r in runs]
  resources[kind]={k:statistics.median([x[k] for x in rows]) for k in ['requestCount','transferSize']}
 result[profile]={'files':[str(f.relative_to(root)) for f in files],'dates':[r['fetchTime'] for r in runs],'lighthouseVersion':runs[0]['lighthouseVersion'],'environment':runs[0]['environment'],'settings':runs[0]['configSettings'],'categories':categories,'metrics':values,'resources':resources,'unusedJsEstimatedTransferSavings':statistics.median([r['audits']['unused-javascript']['details']['overallSavingsBytes'] for r in runs]),'applicationScriptEvaluationMs':statistics.median([next(x for x in r['audits']['bootup-time']['details']['items'] if '/assets/index-' in x['url'])['scripting'] for r in runs]),'applicationScriptParseCompileMs':statistics.median([next(x for x in r['audits']['bootup-time']['details']['items'] if '/assets/index-' in x['url'])['scriptParseCompile'] for r in runs]),'consoleEntriesPerRun':[len(r['audits']['errors-in-console']['details']['items']) for r in runs],'runWarnings':[r['runWarnings'] for r in runs]}
(root/'diagnostics/raw/lighthouse-summary.json').write_text(json.dumps(result,indent=2))
lines=['# Individual Lighthouse runs','','Local immutable build; URL recorded in reports. All times milliseconds, except CLS (unitless). Scores 0–100.','','|Profile/run|UTC timestamp|Performance|Accessibility|Best Practices|SEO|FCP ms|LCP ms|CLS|TBT ms|SI ms|','|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|']
for profile in result:
 for f in result[profile]['files']:
  r=json.loads((root/f).read_text());v=[r['categories'][k]['score']*100 for k in r['categories']]+[r['audits'][k]['numericValue'] for k in metrics]
  lines.append('|'+profile+'/'+pathlib.Path(f).stem+'|'+r['fetchTime']+'|'+'|'.join(f'{x:.3f}'.rstrip('0').rstrip('.') for x in v)+'|')
(root/'lighthouse/before/runs.md').write_text('\n'.join(lines)+'\n')
print(json.dumps({p:{k:v for k,v in x.items() if k in ['categories','metrics','resources','unusedJsEstimatedTransferSavings','applicationScriptEvaluationMs','applicationScriptParseCompileMs','consoleEntriesPerRun']} for p,x in result.items()},indent=2))
