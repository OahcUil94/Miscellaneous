import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Boy extends Component {
  static navigationOptions = {
    title: 'Boy',
    headerTitle: <Text>Boy Title</Text>
  };

  render() {
    const { navigate } = this.props.navigation;
    return (<Button onPress={() => {navigate('Girl', {user: 'Girl'})}} title="Go to Girl" />);
  }
}

class Girl extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
    // header: () => <Button title="GirlsHeader" onPress={() => Alert.alert('Header')} />,
    headerBackTitle: 'dfdsfsdf',
    headerTruncatedBackTitle: 'fanhui',
    headerLeft: <Button onPress={() => {navigation.goBack()}} title="Go to Boy" />
  });

  render() {
    const { goBack } = this.props.navigation;
    return (<Button onPress={() => {goBack()}} title="Go to Boy" />);
  }
}

const styles = StyleSheet.create({
  card1: {
    backgroundColor: '#f7629e'
  },
  card2: {
    paddingTop: 100
  }
});

const App = StackNavigator({
  Boy: {screen: Boy},
  Girl: {screen: Girl}
}, {
  mode: 'card', // 'card'是左右滑动，'modal'是从下往上滑
  headerMode: 'float', // 'float'用于渲染ios，'screen'用于渲染'android', 'none'不渲染顶部header
  cardStyle: [styles.card1, styles.card2], // 定义视图的样式
  // onTransitionStart: () => Alert.alert('onTransitionStart'),
  // onTransitionEnd: () => Alert.alert('onTransitionEnd')
});

export default App;
