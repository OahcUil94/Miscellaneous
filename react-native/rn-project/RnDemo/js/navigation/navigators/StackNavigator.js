import React, { Component } from 'react';

/*
前面带有下划线的都是可以自定义的
StackNavigator({
  _routeName: {
    // RouteComponent是一个React组件，展示屏幕的主要内容，当该视图通过StackNavigator被加载，将会传入一个`navigation`props属性
    screen: _RouteComponent,

    // 可选的，当deep linking在webapp中使用，这个路径将会被使用，action和route参数将可以从path中提取到
    path: '_path/:_param',

    // 可选的，覆写视图中的`navigationOptions`
    navigationOptions:({ navigation }) => ({})
  }
}， {
  initialRouteName: _routeName,
  initialRouteParams: {_user: 'Lucy'},
  navigationOptions: ...
  paths: {},// 路由配置中设置的路径的覆盖映射
  mode: 'card' || 'modal',

});

*/
