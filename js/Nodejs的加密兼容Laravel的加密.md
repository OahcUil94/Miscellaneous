# Nodejs的加密兼容Laravel的加密

Compatibilty AES-256-CBC Node / Laravel: [http://stackmirror.cn/page/s1jgtxrd0m5t](http://stackmirror.cn/page/s1jgtxrd0m5t)

我正在尝试创建一个Hash值来兼容`Laravel`的`Encryption`模块，以下是参考的`Laravel`源码：

[https://github.com/illuminate/encryption/blob/master/Encrypter.php#L101-163](https://github.com/illuminate/encryption/blob/master/Encrypter.php#L101-163)

这是我遇到的：

```

const base64_encode = (string) => new Buffer(string).toString('base64');

const encrypt = function (payload) {
    const iv = crypto.randomBytes(16);
    const key = new Buffer(config.stuff.key, 'base64');

    const cipher  = crypto.createCipheriv('aes-256-cbc', key, iv);
    cipher.setAutoPadding(false); // With or without this /!\
    let value = cipher.update(serialize(JSON.stringify(payload)), 'utf8', 'base64');

    value + cipher.final('base64');

    const mac = crypto.createHmac('sha256', new Buffer(config.stuff.key, 'base64')).update(iv.toString('base64') + value).digest('hex');

    const json = JSON.stringify({ iv: iv.toString('base64'), value, mac });

    return base64_encode(json);
};

```

但是当我尝试时，出现了一个`BAD_DECRYPT`，这似乎是来自`OpenSSL`的填充，有没有什么好的想法？

这应该是可以运行的：

```
const base64_encode = (string) => new Buffer(string).toString('base64');

const encrypt = function (payload) {
    const iv = crypto.randomBytes(16);
    const key = new Buffer(config.stuff.key, 'base64');

    const cipher  = crypto.createCipheriv('aes-256-cbc', key, iv);
    let value = cipher.update(serialize(payload), 'utf8');

    value = Buffer.concat([value, cipher.final()]).toString('base64');

    const mac = crypto.createHmac('sha256', key)
            .update(iv.toString('base64') + value)
            .digest('hex');

    const json = JSON.stringify({ 
        iv: iv.toString('base64'), 
        value: value, 
        mac: mac 
    });

    return base64_encode(json);
};
```

问题在于：
`openssl_encrypt`和`nodejs`都会自动使用`PKCS#7`填充
拼接多个Base64字符串以形成单个Base64编码的字符串不会总是有效的，因为两个字符串中的第一个字符串可能包含填充字符（=），这意味着并不是所有的前一个字符的所有位实际上都属于密文。其中一些只是虚拟位。 这就是Base64的工作原理。

PHP serialize可以移植到JavaScript，如[这里所示](http://locutus.io/php/var/serialize/)。