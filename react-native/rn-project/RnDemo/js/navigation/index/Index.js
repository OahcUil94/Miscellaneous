// react-navigation首页
import React, { Component } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// 1. 如何定制header和tab的样式
// 2. 如何配合起来使用

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button title="Go to Jane's profile" onPress={() => navigate('Profile', {name: 'Jane'})} />
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  });

  render() {
    const { goBack } = this.props.navigation;
    return (<Button title="Go back" onPress={() => goBack()} />);
  }
}

const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen}
});

export default BasicApp;
