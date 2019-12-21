---
title: shell提交git脚本
date: 2019-12-21 12:25:19
tags: [zsh]
---

> 我使用的是**zsh**(根据需要自行修改)
>
> 1. 把下面代码放到 **xx.sh** 里面
> 2. chmod 700 xx.sh //提升权限
> 3. ./xx.sh //运行脚本

# 适用范围:vuePress vue 静态项目部署 的自动化脚本

# aaa

```
# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 进入生成的文件夹
cd ./dist
git init
git add -A
git commit -m 'shell提交'
# 把下面的push命令按照你的情况修改后去掉注释
git push -f git@github.com:lambertlt/lambertlt.github.io.git master
```
