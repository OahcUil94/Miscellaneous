import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, Alert } from 'react-native';

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: width,
    height: 240
  }
});

const Slider = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{"uri": "http://dummyimage.com/750x480/fb962e.png"}} />
    </View>
  );
};

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesSlider: [
        {"uri": "http://dummyimage.com/750x480/fb962e"},
        {"uri": "http://dummyimage.com/750x480/d335e3"},
        {"uri": "http://dummyimage.com/750x480/d1a909"},
        {"uri": "http://dummyimage.com/750x480/2156d0"},
        {"uri": "http://dummyimage.com/750x480/bb9b25"}
      ]
    };
  }

  _renderDot() {
    return (
      <View style={{backgroundColor:'#bfbfbf', width: 6, height: 6,borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
    );
  }

  _renderActiveDot() {
    return (
      <View style={{backgroundColor: '#fbfbfb', width: 16, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
    );
  }

  render() {
    return (
      <View style={{height: 240}}>
        <Swiper
          autoplay
          dot={this._renderDot()}
          activeDot={this._renderActiveDot()}
          height={240}
        >
        {
          this.state.imagesSlider.map((item, index) => <Slider uri={item} key={index} />)
        }
        </Swiper>
      </View>
    );
  }
}
