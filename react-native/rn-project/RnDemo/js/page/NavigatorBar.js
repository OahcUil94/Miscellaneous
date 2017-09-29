import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar
} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const STATUSBARSHAPE = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf('default', 'light-content', 'dark-content'),
  hidden: PropTypes.bool
};

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar: PropTypes.shape(STATUSBARSHAPE)
  };

  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hide: false
    };
  }

  render() {
    let titleView = this.props.titleView? this.props.titleView: <Text>{this.props.title}</Text>;
    let content = (
      <View style={styles.navBar}>
        {this.props.leftButton}
        <View style={styles.titleViewContainer}>
          {titleView}
        </View>
        {this.props.rightButton}
      </View>
    );
    return (
      <View style={styles.container}>
        <View><StatusBar {...this.props.statusBar}/></View>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray'
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios'? NAV_BAR_HEIGHT_IOS: NAV_BAR_HEIGHT_ANDROID,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 20,
    color: '#FFF'
  },
  statusBar: {
    height: Platform.OS === 'ios'? STATUS_BAR_HEIGHT: 0
  }
});
