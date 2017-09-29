import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Cat, Hat, Bat } from '../svg/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxOne: {
    backgroundColor: '#fccca7'
  },
  boxTwo: {
    backgroundColor: '#fabeb9'
  },
  boxThree: {
    backgroundColor: '#a7e1c4'
  }
});

class ShowSvgIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.boxOne]}><Bat /></View>
        <View style={[styles.box, styles.boxTwo]}><Hat /></View>
        <View style={[styles.box, styles.boxThree]}><Cat /></View>
      </View>
    );
  }
}

export default ShowSvgIcon;
