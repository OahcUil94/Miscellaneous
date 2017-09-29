import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';

const shows_first = {
  "results": [
      {
          "image": "http://dummyimage.com/240x360/7d7aca",
          "key": 1,
          "name": "k0b6e"
      },
      {
          "image": "http://dummyimage.com/240x360/2f1777",
          "key": 2,
          "name": "7zpk8"
      },
      {
          "image": "http://dummyimage.com/240x360/ab01ec",
          "key": 3,
          "name": "cg22b"
      },
      {
          "image": "http://dummyimage.com/240x360/77d9e4",
          "key": 4,
          "name": "bz2h8"
      },
      {
          "image": "http://dummyimage.com/240x360/1e0541",
          "key": 5,
          "name": "fyjej"
      },
      {
          "image": "http://dummyimage.com/240x360/db6c37",
          "key": 6,
          "name": "zajz3"
      },
      {
          "image": "http://dummyimage.com/240x360/b935f5",
          "key": 7,
          "name": "oi0rp"
      },
      {
          "image": "http://dummyimage.com/240x360/bfcada",
          "key": 8,
          "name": "n0h4h"
      },
      {
          "image": "http://dummyimage.com/240x360/4913a8",
          "key": 9,
          "name": "59oyd"
      },
      {
          "image": "http://dummyimage.com/240x360/ec9ede",
          "key": 10,
          "name": "gruyt"
      }
  ]
};

const shows_second = {
  "results": [
      {
          "image": "http://dummyimage.com/240x360/18aab2",
          "key": 11,
          "name": "tt7js"
      },
      {
          "image": "http://dummyimage.com/240x360/ba7405",
          "key": 12,
          "name": "bycrk"
      },
      {
          "image": "http://dummyimage.com/240x360/81f241",
          "key": 13,
          "name": "pzp68"
      },
      {
          "image": "http://dummyimage.com/240x360/c39e04",
          "key": 14,
          "name": "ietxd"
      },
      {
          "image": "http://dummyimage.com/240x360/09b2a7",
          "key": 15,
          "name": "4g76u"
      },
      {
          "image": "http://dummyimage.com/240x360/c7e251",
          "key": 16,
          "name": "81tfr"
      },
      {
          "image": "http://dummyimage.com/240x360/5aceab",
          "key": 17,
          "name": "9gtuk"
      },
      {
          "image": "http://dummyimage.com/240x360/1f612b",
          "key": 18,
          "name": "7drsk"
      },
      {
          "image": "http://dummyimage.com/240x360/ed2b64",
          "key": 19,
          "name": "6fskb"
      },
      {
          "image": "http://dummyimage.com/240x360/3f7201",
          "key": 20,
          "name": "a31rc"
      }
  ]
};


const styles = StyleSheet.create({
  text: {
    color: '#FFF'
  }
});


// ItemSeparatorComponent, horizontal
// 在当前RN版本中，ItemSeparatorComponent在横向的时候，不管用
// 后面的版本中将会发布的
export default class List extends Component {
  _renderItem(item, index) {
    return (
      <View style={{paddingRight: index === shows_first.results.length - 1? 0: 5}}>
        <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Text style={styles.text}>My List</Text>
          <FlatList
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width:0, paddingRight: 5, backgroundColor:'yellow'}}/>}
          data={shows_first.results}
          renderItem={({ item, index }) => this._renderItem(item, index)}
        />
        </View>
        <View>
          <Text style={styles.text}>My List</Text>
          <FlatList
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width:0, paddingRight: 5, backgroundColor:'yellow'}}/>}
          data={shows_second.results}
          renderItem={({ item, index }) => this._renderItem(item, index)}
        />
        </View>
      </View>
    );
  }
}
