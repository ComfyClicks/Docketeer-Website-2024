from pathlib import Path
import json, shutil, subprocess, tempfile
root=Path.cwd(); out=root/'src/assets/optimized';out.mkdir(exist_ok=True)
magick=shutil.which('magick'); cwebp=shutil.which('cwebp')
if not magick or not cwebp: raise SystemExit('Install ImageMagick and cwebp or add existing binaries to PATH.')
portraits={'Alex':'XVIII/Alex.jpg','Andy':'XVIII/Andy.jpg','Nick':'XVIII/Nick.jpg','Quan':'XVIII/Quan.jpg','Chris':'XIX/Chris.jpg','Aiden':'XIX/Aiden.jpg','Dylan':'XIX/Dylan.png','Joseph':'XIX/Joseph.jpg','Ellis':'XIX/Ellis.jpg','Arthur':'XX/Arthur.jpg','Rachel':'XX/Rachel.png','ChrisS':'XX/ChrisS.jpg','Nika':'XX/Nika.jpg'}
records=[]
for name,rel in portraits.items():
    source=root/'src/assets'/rel
    for width in (200,330 if name=='Dylan' else 400):
        target=out/f'{name}-{width}.webp'
        with tempfile.TemporaryDirectory() as temp:
            png=Path(temp)/'image.png'
            subprocess.run([magick,str(source),'-auto-orient','-resize',f'{width}x{width}^','-gravity','center','-extent',f'{width}x{width}','-strip',str(png)],check=True)
            subprocess.run([cwebp,'-quiet','-q','82',str(png),'-o',str(target)],check=True)
        records.append({'source':str(source.relative_to(root)),'sourceBytes':source.stat().st_size,'output':str(target.relative_to(root)),'width':width,'height':width,'bytes':target.stat().st_size})
for name,rel,widths in [('hero','docketeerlogo.png',(350,517)),('navbar','docketeerlogo2.png',(45,90,135)),('dockerhub','dockerhub-mark/04-symbol_light-blue-docker-logo.png',(14,28,42))]:
    source=root/'src/assets'/rel
    for width in widths:
        target=out/f'{name}-{width}.webp'
        with tempfile.TemporaryDirectory() as temp:
            png=Path(temp)/'image.png'
            subprocess.run([magick,str(source),'-resize',f'{width}x','-strip',str(png)],check=True)
            subprocess.run([cwebp,'-quiet','-lossless',str(png),'-o',str(target)],check=True)
            size=subprocess.check_output([magick,'identify','-format','%w %h',str(png)],text=True).split()
        records.append({'source':str(source.relative_to(root)),'sourceBytes':source.stat().st_size,'output':str(target.relative_to(root)),'width':int(size[0]),'height':int(size[1]),'bytes':target.stat().st_size})
(root/'docs/modernization/phase-d/static-assets.json').write_text(json.dumps(records,indent=2)+'\n')
