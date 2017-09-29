import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Boy extends Component {
  static navigationOptions = {
    title: 'Boy Component'
  };

  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> I am a boy</Text>
        <Text
          style={styles.text}
          onPress={() => this.props.navigation.navigate('Girl', {word: 'rose', onCallback: word => this.setState({word})})}> send girl a rose</Text>
        <Text style={styles.text}>{this.state.word}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray'
  },

  text: {
    fontSize: 20
  }
});
