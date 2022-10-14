# 打开gitbash 然后执行此脚本   sh deploy.sh
# 确保脚本抛出遇到的 错误 
set -e

pnpm  run docs:build

cd docs/.vuepress/dist

git init
git add -A 
git commit -m "提交"

git push -f https://github.com/FuckerDeng/notes.git main

cd -