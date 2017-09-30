import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    marginHorizontal: 15
  }
});

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggle()}>
        <Icon name="bars" color="#FFF" size={25}/>
      </TouchableWithoutFeedback>
      <Icon name="search" color="#FFF" size={25} />
    </View>
  );
}
/*
class Header extends Component {
  render() {
    return (
      <View></View>
    );
  }
}
*/

export default Header;
