# !/bin/zsh
clear;
echo "start touche $1.md";
echo "---\ntitle: $1\ndate: `date +%F` `date +%H:%M:%S`\ntags: [$2]\n---" > ./docs/posts/"$1".md;
echo "finish $1.md"
