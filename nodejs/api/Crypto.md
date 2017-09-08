# Crypto 加密 文档 (Node.js 8.4.0 doc)

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

## Class: Certificate(证书)

初次添加版本: v0.11.8

## crypto模块的方法和属性

### crypto.createCipher(algorithm, password)

初次添加版本: v0.1.94

参数：
- algorithm <string>
- password <string> | <Buffer> | <TypedArray> | <DataView>

使用给定的`algorithm`和`password`来创建并返回一个`Cipher`对象
（Cipher可以认为是计算的意思，根据传入的算法和密钥生成一个算法公式）。

`algorithm`取决于OpenSSL，例如：`aes192`等等，在最近的OpenSSL发布中，`openssl list-cipher-algorithms`将会列出可用的计算算法。
`password`用于导出计算(cipher)的key以及初始化向量(IV)，该值必须是一个`latin1`编码的`string`类型值，或者是`Buffer`、`TypedArray`、`DataView`。

