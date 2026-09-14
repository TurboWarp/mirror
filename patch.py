import os
import glob
import shutil

for path in glob.glob('scratch-gui/build/*.html'):
  print(f'Patching HTML {path}')
  with open(path, 'r') as f:
    contents = f.read()
    contents = contents.replace('</head>', '<meta name="robots" content="noindex"></head>')
    contents = contents.replace('<link rel="manifest" href="manifest.webmanifest">', '')
  with open(path, 'w') as f:
    f.write(contents)

for path in glob.glob('scratch-gui/build/**/*.js', recursive=True):
  print(f'Patching JS {path}')
  with open(path, 'r') as f:
    contents = f.read()
  
  # Step 1: Tell TurboWarp to ask Scratch for the project metadata
  contents = contents.replace('https://turbowarp.org', 'https://mit.edu')
  
  # Step 2: Route asset downloads directly to Scratch's asset servers
  contents = contents.replace('https://turbowarp.org', 'https://mit.edu')
  
  # Catch-all fallback for any other hardcoded trampoline URLs
  contents = contents.replace('https://trampoline.turbowarp.org', 'https://mit.edu')
  
  with open(path, 'w') as f:
    f.write(contents)

os.remove('scratch-gui/build/sw.js')
os.remove('scratch-gui/build/manifest.webmanifest')
os.remove('scratch-gui/build/fullscreen.html')
os.remove('scratch-gui/build/index.html')

shutil.copy('scratch-gui/build/editor.html', 'scratch-gui/build/index.html')
shutil.copy('robots.txt', 'scratch-gui/build/robots.txt')
