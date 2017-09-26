/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TestTabNavigator from './js/TestTabNavigator.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RnDemo extends Component {
  render() {
    return (<TestTabNavigator/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RnDemo', () => RnDemo);
