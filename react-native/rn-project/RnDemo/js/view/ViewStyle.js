import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hat from '../svg/Hat';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(136, 10, 56, 0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/*
view styles props
background: {
  backgroundColor
}

border: {

  borderColor
  borderTopColor
  borderRightColor
  borderBottomColor
  borderLeftColor

  borderWidth
  borderTopWidth
  borderRightWidth
  borderBottomWidth
  borderLeftWidth

  borderStyle: enum('solid', 'dotted', 'dashed'),

  borderRadius
  borderTopLeftRadius
  borderTopRightRadius
  borderBottomLeftRadius
  borderBottomRightRadius
}

opacity: 0-1设置透明度，会把元素内部的内容一起透明，如果想要仅仅让背景色透明，可以使用backgroundColor:'rgba(136, 10, 56, 0.3)'

backfaceVisibility: enum('visible', 'hidden') 背面可见度,元素背向屏幕时，是否可见


elevation:

width: {
  width
  minWidth
  maxWidth
}

height: {
  height,
  minHeight,
  maxHeight
}

margin: {
  margin: number, string
  marginTop
  marginRight
  marginBottom
  marginLeft
  marginHorizontal
  marginVertical
}

padding: {
  padding: number, string
  paddingTop
  paddingRight
  paddingBottom
  paddingLeft
  paddingHorizontal
  paddingVertical
}

position {
  position: enum('absolute', 'relative')
  top
  right
  bottom
  left
  zIndex
}

overflow?: enum('visible', 'hidden', 'scroll')

flex {
  alignContent?: enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around')：交叉轴的对齐方式出现换行后
  alignItems?: enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline')交叉轴的对齐方式
  alignSelf?: enum('auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline') 单独定义某个伸缩项目在交叉轴上的对齐方式
  display?: enum('none', 'flex'), default: flex
  flex: flexGrow, flexShrink, flexBasis
  flexBasis：设置伸缩项目的基准值，剩余空间按比率进行伸缩
  flexDirection:  enum('row', 'row-reverse', 'column', 'column-reverse')
  flexGrow: 伸缩项目的放大比例，默认值为0
  flexShrink：伸缩项目的收缩能力
  flexWrap: enum('wrap', 'nowrap')：主轴线方向空间不足的情况下，是否换行以及该如何换行
  justifyContent?: enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')：定义伸缩项目沿着主轴线的对齐方式
}
*/

class ViewStyleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Hat />
      </View>
    );
  }
}

export default ViewStyleApp;
