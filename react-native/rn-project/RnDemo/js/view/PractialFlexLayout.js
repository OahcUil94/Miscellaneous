import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


/*

默认最外层的View横向是自动撑开一行的，
而最外层下面的View将会是内容的宽度，不会自动撑开到父级的宽度，所以下面的，如果想要自动撑开到父级的宽度，
可以设置alignSelf: 'stretch'，纵向再自动撑开，就设置flex: 1

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  pinContainer: {
    backgroundColor: 'red'
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pinContainer}>
          <Text style={{width: 100}}>Hello World</Text>
        </View>
      </View>
    );
  }
}

export default App;
