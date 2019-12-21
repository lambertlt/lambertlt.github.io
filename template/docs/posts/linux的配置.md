---
title: linux的配置
date: 2019-12-21 18:21:07
tags: [linux]
---

# Linux 大法好

## 应用和开发环境安装配置

### 安装英伟达显卡

> 在图形界面的**软件和更新**里面的附加驱动里面下载

### 安装 zsh

```
sudo apt-get install zsh
// 切换zsh
zsh chsh -s /bin/zsh

```

### 安装 c/c++ 编译器 gcc

```
sudo apt-get install gcc
gcc -v // 查看是否有版本号输出 没有重新安装...

```

### 搜狗输入法

> 前往官网自行下载 然后解压 双击 xxx.deb 安装

### fcitx(需要重启才能用)

```
sudo apt-get install fcitx
// 怎么切换搜狗输入法 自行百度

```

### vscode(全能编辑器!!!)

> 前往官网自行下载 然后解压 双击 xxx.deb 安装

> 写 markdown 自动生成 目录 插件

```
markdown toc // 生成markdown 目录

```

### vim(本文编辑器大哥大、必须有)

```
sudo apt-get install vim
// 也可以下载gvim	根据需要自行修改

```

> 当然 下载了 vim 一定要配置一下 这里给出 **[我的配置](#vimrc)** (点击此处跳转) 大家按需选择

vim(设置 vim 的默认状态)[http://www.ruanyifeng.com/blog/2018/09/vimrc.html]

### 美化 ubuntu

1. [安装苹方字体](http://pan.baidu.com/s/1miHvNvi)
2. unity-tweak-tool
3. gnome-tweaks
4. ultra-flat(扁平化图标)[sudo add-apt-repository ppa:noobslab/icons sudo apt-get update sudo apt-get install ultra-flat-icons]
5. 主题使用的 radiance
6. 光标 whiteglass
7. dash to dock [安装第三方 dock,但是要使用 3.30 版本 Ubuntu18.04](https://micheleg.github.io/dash-to-dock/releases.html)

> 最终效果呢 是这个样子的

<img alt="ubuntu美化图" src="https://img-blog.csdnimg.cn/20191210205941810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNjYwMTA0,size_16,color_FFFFFF,t_70" />

<img alt="ubuntu美化图" src="https://img-blog.csdnimg.cn/20191210210016519.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNjYwMTA0,size_16,color_FFFFFF,t_70" />

<img alt="ubuntu美化图" src="https://img-blog.csdnimg.cn/20191210210116478.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwNjYwMTA0,size_16,color_FFFFFF,t_70" />

### node npm 学前端的我必备 你们看着办~

> 在安装 npm 和 node 的时候全局安装用 sudo 局部不需要(即项目包)  
> node 升级  
> chmod -R user 700 (修改目录包括子文件的使用权限)

```
sudo npm install n
n latest (最新版node)
n stable (稳定版)
n rm xxx (删除某个版本)
n use xxx /xx/xx.js (以指定版本执行某版本)

```

### git 代码管理必备

> 安装 `sudo apt-get install git`

```
git 基本操作
git init
git add .
git commit -m ""
git branch -a //列出分之
git checkout name //切换到分之
git push origin name //将本地分之提交到远程
git merge name //合并分之
git branch -d name // 删除本地分之
git push origin -d name //删除远程分之
git push -u // 提交删除的文件
git ls-files // 查看本地有的文件
git remote add origin https://github.com/lambertlt/word // 创建分之后
要输入这个
git rm --cache name // 删除缓存中的文件
git checkout -f newBranch //如果希望强制切换，即放弃本地修改，则使用命令

https://www.cnblogs.com/sky6862/p/7992736.html //https 更改为ssh方式 这样就不用老输入密码了

```

### wget 扒站神器

```
wget -r -p -k -np 网站
-r // 递归下载
-p // 下载所有用于显示HTML页面的图片之类的元素
-k // 在转换文件x前先将它备份为x .orig
-np // 不追溯至父目录

https://blog.csdn.net/zhaoweitco/article/details/27662331 // 详细教程

```

<div id="vimrc">

> vimrc 的配置表(Vim 的全局配置一般在/etc/vim/vimrc)参考阮一峰的网络日志

```
set number
syntax on
set showmode
set showcmd
set mouse=a
set encoding=utf-8
set t_Co=256
filetype indent on
set autoindent
set tabstop=2
set shiftwidth=4
set expandtab
set softtabstop=2
set cursorline
set wrap
set linebreak
set wrapmargin=2
set laststatus=2
set ruler
set showmatch
set hlsearch
set incsearch
set ignorecase
set smartcase
set spell spelllang=en_us
set visualbell
set autoread
set wildmenu
set wildmode=longest:list,full
set confirm

```

</div>
