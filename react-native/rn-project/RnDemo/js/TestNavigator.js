import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Boy from './page/Boy';
import Girl from './page/Girl';

const SimpleApp = StackNavigator({
  Boy: {screen: Boy},
  Girl: {screen: Girl}
});

export default SimpleApp;

// 它的第一块内容主要讲的是如何使用TabNavigator
// 第二块内容主要讲如何使用Navigator，但是这个库啊，是之前版本中，RN自带的，后来就没了
// 所以，今天要把react-navigator搞定
