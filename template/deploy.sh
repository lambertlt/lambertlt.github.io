# !/bin/zsh
# set -e
npm run build
cd ./dist
git init
git add -A
git commit -m 'shell提交'
git push -f git@github.com:lambertlt/lambertlt.github.io.git master
