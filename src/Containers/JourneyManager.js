import React, { Component, Dimensions } from 'react';
import { WebView } from 'react-native';


class JourneyManager extends Component {
  render() {
    return (
      <WebView
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          source={{uri: 'https://github.com/facebook/react-native'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          style={{ width: 200, height: 20 }}  />
    );
  }
}

export {
    JourneyManager
}
