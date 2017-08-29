# git pull撤销

git reflog命令查看你的历史变更记录，
然后可以使用git reset --hard HEAD@{n}，（n是你要回退到的引用位置）回退

反过来,如果希望用代码库中的文件完全覆盖本地工作版本. 方法如下:
git reset --hard
git pull

