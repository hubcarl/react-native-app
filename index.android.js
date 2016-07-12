/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ImageText = require('./component/ImageText');

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          React Native Test!
        </Text>
         <ImageText style={styles.imageItem1} color='#aaa' width='100' height='100' text='Icon' img='https://raw.githubusercontent.com/lizhangqu/androidicons/master/assets/blue_dark/xhdpi/ic_action_achievement.png'></ImageText>
         <ImageText style={styles.imageItem2} color='#aaa' width='100' height='100' text='Icon' img='https://raw.githubusercontent.com/lizhangqu/androidicons/master/assets/blue_dark/xhdpi/ic_action_bike.png'></ImageText>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageItem1:{
    marginLeft:100,
  },
  imageItem2:{
    marginLeft:100,
  }
});

AppRegistry.registerComponent('ReactNativeApp', () => AwesomeProject);
