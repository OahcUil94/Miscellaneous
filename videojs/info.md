# video标签的src属性放置的是blob:http://这样的链接

## 资料参考

[https://stackoverflow.com/questions/30864573/what-is-a-blob-url-and-why-it-is-used](https://stackoverflow.com/questions/30864573/what-is-a-blob-url-and-why-it-is-used)

Blob URLs(参考[W3C](https://w3c.github.io/FileAPI/#DefinitionOfScheme))或者Object-URLs(参考[MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#Parameters)以及方法名称)与Blob和File对象一起使用。

Blob URL只能由浏览器内部生成。`URL.createObjectURL()`将会创建一个对Blob或File对象的特殊引用，之后可以通过使用`URL.revokeObjectURL()`来发布。

这些URL只能在浏览器的单个实例和同一个会话（即页面/文档的生命周期）中本地使用）

Blob URL / Object URL是一种伪协议，允许将Blob和File对象用作诸如图像，二进制数据的下载链接等的URL源。

https://stackoverflow.com/questions/41184900/set-video-objects-source-file-to-a-blob-url

https://github.com/samdutton/simpl/blob/gh-pages/video/offline/js/main.js

https://github.com/meteor/meteor/issues/3229

https://github.com/video-dev/hls.js/issues/1254