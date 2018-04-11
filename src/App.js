import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

// ROUTES
import { JourneyManager } from './Containers/JourneyManager';


export default class App extends React.Component {
  render() {
    return (
      <View id={'webRoot'} style={styles.container}>
        <JourneyManager path={'something'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
