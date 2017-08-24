# 获取请求的ip地址

```
var getIpInfo = req.headers['x-forwarded-for']
      || req.headers['x-real-ip']
      || req.connection.remoteAddress
      || req.socket.remoteAddress
      || req.connection.socket.remoteAddress;
```