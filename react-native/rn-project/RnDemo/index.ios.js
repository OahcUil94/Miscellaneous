/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import TestTabNavigator from './js/TestTabNavigator.js';
// import TestNavigator from './js/TestNavigator';
// import BasicApp from './js/navigation/Index';
// import BasicApp from './js/navigation/index/Index2';
// import App from './js/navigation/gettingStarted/HelloMobileNavigation';
// import App from './js/navigation/gettingStarted/nestingNavigators';
// import App from './js/navigation/navigators/StackNavigatorDemo';
// Rn只识别js后缀的文件，不识别jsx
// import App from './js/view/ViewStyle';
// import App from './js/view/ShowSvgIcon';
// import App from './js/view/PractialFlexLayout';
import App from './js/netflix/app';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

AppRegistry.registerComponent('RnDemo', () => App);
