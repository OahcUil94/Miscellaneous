import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!!!</Text>
        <Button onPress={() => navigate('Chat', {user: 'OahcUil'})} title="Chat with OahcUil"></Button>
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    // state.params, goBack, navigate
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  Chat: {screen: ChatScreen}
});

export default SimpleApp;
