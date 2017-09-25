# 02-nvm使用

## nvm的基本使用

`nvm which v6.9.4`: `查看相应node版本的安装路径`
`nvm ls-remote`: `获取远程服务器上所有的node版本`
`nvm ls-remote --lts`: `获取远程服务器上所有LTS的node版本`
`nvm alias default v6.9.6`: `设置默认的node版本`
`nvm install v6.9.4`: `安装新的node版本`
`nvm uninstall v6.9.4`: `卸载node版本`
`nvm use v6.9.4`: `使用某个node版本`

## .nvmrc文件的使用

你可以在项目根目录（或者任意父级目录）创建一个`.nvmrc`文件，写入node的版本号，之后的`nvm use`、`nvm install`、`nvm exec`、`nvm run`以及`nvm which`命令执行的时候，如果没有指定node的版本号，将会遵循`.nvmrc`中的node版本号。

例如：

```shell
$ echo "5.9" > .nvmrc
$ nvm use

Found '/path/to/project/.nvmrc' with version <5.9>
Now using node v5.9.1 (npm v3.7.3)
```
