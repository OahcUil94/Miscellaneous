# react-native-swiper

版本：

```
"react-native": "0.48.4"
"react-native-swiper": "^1.5.12"
```

## 相关问题

### 问题1：dot是如何定位的，如何调整dot到轮播图底部的距离

研究源码发现，一个个的`dot`是用一个`View`组件包裹起来的，这个组件设置了`pagination_x`样式，里面的`bottom: 25`，也就是距离轮播图底部`25`个像素，可以在外部传入`paginationStyle`来修改

### 问题2：如果轮播图的父组件是使用View组件包裹的，则需要设置相应的高度，不需要包裹也可以

## 简单案例

```javascript
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

// banner默认的宽高是1160x410

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width,
    height: width / 1160 * 410
  }
});

const Slider = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.uri}/>
    </View>
  );
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesSlider: [
        {'uri': 'http://static.zhixingglobal.com/eb7ced9904d79a398aba62658facbace'},
        {'uri': 'http://static.zhixingglobal.com/b855a2402c45331b811f5c507f14d518'},
        {'uri': 'http://static.zhixingglobal.com/5783831ffe0f55ac905227cb6a1c8e44'},
        {'uri': 'http://static.zhixingglobal.com/d17f7bbf2aee54b98f7da6dff349c4de'},
      ]
    };
  }

  _renderDot() {
    return (
      <View style={{backgroundColor:'#FEDEBF', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3}} />
    );
  }

  _renderActiveDot() {
    return (
      <View style={{backgroundColor: '#FFF', width: 16, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, }} />
    );
  }

  render() {
    const height = width / 1160 * 410;
    return (
      <View style={{height}}>
      <Swiper
        autoplay
        dot={this._renderDot()}
        activeDot={this._renderActiveDot()}
        height={height}
        paginationStyle={{bottom: 8}}
      >
      {
        this.state.imagesSlider.map((item, index) => <Slider uri={item} key={index} />)
      }
      </Swiper>
    </View>
    );
  }
}

export default Carousel;
```

