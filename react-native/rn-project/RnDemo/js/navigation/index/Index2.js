import React, { Component } from 'react';
import { Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

// 选项卡导航：
/*

static navigationOptions = {tabBarLabel: ''}; // 定义选项卡的名字
render方法中的this.props.navigation可以拿出navigate和goBack函数
goBack可以调到上一级
navigate可以传递多个参数，那第一个参数就是你要跳转到具体哪一屏，在TabNavigator中定义的key的名字
Main或者Setup

*/

class MainScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button title="Go to Setup Tab" onPress={() => navigate('Setup')}></Button>
    );
  }
}

class SetupScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Setup'
  };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button title="Go back to home tab" onPress={() => goBack()}></Button>
    );
  }
}

const BasicApp = TabNavigator({
  Main: {screen: MainScreen},
  Setup: {screen: SetupScreen}
});

export default BasicApp;
