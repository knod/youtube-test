import React, { Component, Dimensions } from 'react';
import {  Animated, WebView, View } from 'react-native';


const styles = {
  container:  { width: 200, height: 200, display: 'flex', flexDirection: 'row', overflow: 'scroll' },
  vid:        { width: 200, height: 200, position: 'absolute' },
  left:       { backgroundColor: 'green', top: 0, left: -200 },
  center:     { backgroundColor: 'teal', top: 0, left: 0 },
  right:      { backgroundColor: 'blue', top: 0, left: 200 }
};

class JourneyManager extends Component {
  state = {left: new  Animated.Value(-200)}

  componentDidMount () {
    Animated.spring(
      this.state.left,
      { toValue: 0 }
    ).start();
  }

  render() {
    var left = this.state.left;

    var left = {...styles.vid, ...styles.left, left: left},
        center = {...styles.vid, ...styles.center},
        right = {...styles.vid, ...styles.right};

    return (
      <View style={styles.container}>
        <View style={center} />
        <Animated.View style={left} />
        <View style={right} />
      </View>


    //   <WebView
    //       ref={'webview'}
    //       automaticallyAdjustContentInsets={false}
    //       source={{uri: 'https://github.com/facebook/react-native'}}
    //       javaScriptEnabled={true}
    //       domStorageEnabled={true}
    //       decelerationRate="normal"
    //       startInLoadingState={true}
    //       style={{ width: 200, height: 20 }}  />
    );
  }
}

export {
    JourneyManager
}
