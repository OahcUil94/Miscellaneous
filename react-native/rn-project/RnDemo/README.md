# RN相关内容记录

## 开发RN项目需要注意的问题

1. 尽量不要在调试RN项目的时候，实现全局翻墙

## 关于RN的使用

### Image

```
<Image source={require('./res/images/ic_polular.png')} />
```

这里需要注意的是：如果一个图片有不同的尺寸，这里是引入正常尺寸的图标还是2倍的还是3倍的，在这里切记一定要引入正常情况下尺寸的图标，这是因为项目运行在不同分辨率的设备上时，react-native会自动帮咱们适配，然后选择显示不同尺寸下的图片，如果咱们选择2x或者3x，这样一来，就相当于限定死了，只会显示2x或者3x的图片，所以一定要选择原尺寸的图片

在RN中，所有的尺寸都是与设备无关的。

unabled to resolve module .png from path:
could not resolve png as a file or folder

肯定是文件名写错了，如果把本地资源使用uri来加载，不论错误还是正确，都不会显示出图片的
本地资源图片使用require()来加载，网络图片使用uri来加载

0.48版本的RN不能加载.jsx文件

## vscode中常用的插件

1. 自动补全文件路径：path intellisense
2. 自动闭合标签：Auto Close Path
3. 自动补全安装的nodejs模块：Node.js Modules Intellisense



Mock data
FlatList的使用
tab-view
