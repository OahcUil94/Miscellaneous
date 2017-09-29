import React, { Component } from 'react';
import { ListView, View, Text, Button, StyleSheet } from 'react-native';

export default class ListViewTest extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {}
    });
  }

   render() {
    return (

    );
  }
}
