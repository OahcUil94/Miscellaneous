# node 的NODE_ENV有什么用？

通过NODE_ENV可以来设置环境变量（默认值为development）。
一般我们通过检查这个值来分别对开发环境和生产环境下做不同的处理。可以在命令行中通过下面的方式设置这个值：

`linux & mac: export NODE_ENV=production`
`windows: set NODE_ENV=production`

比方说如果代码中要对生产环境下做一些处理，可以这样写：

```
if (process.env.NODE_ENV === 'production') {
    // just for production code
}
```

```
if ('dev' === app.get('env')) {
    app.use(morgan('dev'))//中间件日志
    mongoose.set('debug', true);
}
```

`NODE_ENV=dev node app.js`


export NODE_ENV=production && node xxx.js  这样在当前命令行下后续的命令中读取 NODE_ENV，都会得到  production 值；
如果直接使用 NODE_ENV=production node xxx.js，则 NODE_ENV 的有效性仅限当前命令，不会对后续命令有影响。

```
linux & mac: export NODE_ENV=production
windows: set NODE_ENV=production
```

[]