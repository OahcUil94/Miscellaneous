import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Girl extends Component {
  static navigationOptions = {
    title: 'Girl Component'
  }
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}> I am a Girl</Text>
        <Text style={styles.text}> send boy a choclate {params.word}</Text>
        <Text style={styles.text} onPress={() => {params.onCallback('choclate');this.props.navigation.navigate('Boy')}}>回赠巧克力2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },

  text: {
    fontSize: 22
  }
});
