---
title: 创建md文档脚本
date: 2019-12-21 11:49:49
tags: [zsh]
---

> 里面部分地方需要修改 在 > 后面的文档输出位置
>
> 1. 把下面代码放到 **xx.sh** 里面
> 2. chmod 700 xx.sh //提升权限
> 3. ./xx.sh 参数一(文档名 and 标题) 参数二(标签名) //运行脚本

```
# !/bin/zsh
clear;
echo "start touche $1.md";
echo "---\ntitle: $1\ndate: `date +%F` `date +%H:%M:%S`\ntags: [$2]\n---" > ./docs/posts/"$1".md;
echo "finish $1.md"
```
