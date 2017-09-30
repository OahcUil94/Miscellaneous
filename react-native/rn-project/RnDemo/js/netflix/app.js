import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';

import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenu(isOpen) {
    this.setState({isOpen});
  }

  render() {
    // 如果最外面是scrollView包裹的，就不好使了
    // 所以最外层最好就是一个大的View，如果要使用ScrollView的话，在里层使用
    // side-menu可以自己去改node_modules的代码，把style.js中的overlay样式的backgroundColor和opacity改了
    return (
      <View style={[{flex: 1}, styles.container]}>
      <SideMenu
      menu={<Menu />}
      isOpen={this.state.isOpen}
      onChange={(isOpen) => this.updateMenu(isOpen)}
    >
      <ScrollView>
        <Header toggle={this.toggle.bind(this)} />
        <Slider />
        <List />
        <View style={{height: 200, backgroundColor: 'pink'}}></View>
      </ScrollView>
    </SideMenu>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#000'
  }
});

export default App;
