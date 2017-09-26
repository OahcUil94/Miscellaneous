import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class TabNavigatorTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={{color: '#f46e65'}}
            title="首页"
            renderIcon={() => <Image style={styles.image} source={require('../res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#f46e65'}]} source={require('../res/images/ic_polular.png')} />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'category'}
            selectedTitleStyle={{color: '#3dbd7d'}}
            title="分类"
            renderIcon={() => <Image style={styles.image} source={require('../res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#3dbd7d'}]} source={require('../res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'category' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'myStudy'}
            selectedTitleStyle={{color: '#f7629e'}}
            title="我的学习"
            renderIcon={() => <Image style={styles.image} source={require('../res/images/ic_unstar_navbar.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#f7629e'}]} source={require('../res/images/ic_unstar_navbar.png')} />}
            onPress={() => this.setState({ selectedTab: 'myStudy' })}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            selectedTitleStyle={{color: '#3db8c1'}}
            title="我"
            renderIcon={() => <Image style={styles.image} source={require('../res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#3db8c1'}]} source={require('../res/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'my' })}>
            <View style={styles.page4}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: '#f46e65'
  },
  page2: {
    flex: 1,
    backgroundColor: '#3dbd7d'
  },
  page3: {
    flex: 1,
    backgroundColor: '#f7629e'
  },
  page4: {
    flex: 1,
    backgroundColor: '#3db8c1'
  },
  image: {
    height: 28,
    width: 28
  }
});
