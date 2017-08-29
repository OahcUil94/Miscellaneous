# Crypto 加密 文档

[TOC]

# Crypto

`稳定性: 2 - 稳定 `

`crypto`加密模块提供了加密功能，其包括了对`OpenSSL的哈希`、`HMAC`、`加密`、`解密`、`签名`和`验证`功能的一套封装。

通过`require('crypto')`来访问该模块。

```javascript
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
// 打印
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
```

## 确定加密模块是否不可用

构建的Node.js可能会不包括对`crypto`模块的支持，在这种情况下，调用`require('crypto')`将会抛出错误。

```javascript
let crypto;
try {
  crypto = require('crypto');
} catch (err) {
  console.log('crypto support is disabled!');
}
```

