import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

class RecentChatsScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
          />
      </View>
    );
  }
}

class AllContactScreen extends Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
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

const MainScreenNavigator = TabNavigator({
  Recent: {screen: RecentChatsScreen},
  All: {screen: AllContactScreen}
});

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats'
    }
  },
  Chat: {screen: ChatScreen}
});

class NavigatorWrappingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NavigatorWrappingScreen</Text>
        <SimpleApp navigation={this.props.navigation} />
      </View>
    );
  }
}

NavigatorWrappingScreen.router = SimpleApp.router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingTop: 50,
    paddingBottom: 50
  }
});

export default NavigatorWrappingScreen;
