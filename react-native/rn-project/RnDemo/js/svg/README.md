# 使用react-native-svg遇到的问题

版本号：`"react-native-svg": "^6.0.0-rc1"`和`"react-native": "0.48.4"`

建议使用Xcode构建

安装命令：

`npm i -S react-native-svg`或者
`yarn add react-native-svg`

## xcode提示length错误

`No visible @interface for 'UIBezierPath' declares the selector 'length'`

`pathLength = [_path length];`
`pathLength = [_path pathLength];`

将`length`改成`pathLength`

## xcode提示library not found for -lRNSVG-tvOS

点击项目的工程文件，选择`Build Phases`，把`libRNSVG-tvOS.a`移除掉，选中它，点击`-`就可以移除了，然后重新`build`就可以了
