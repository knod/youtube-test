import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// ROUTES
import { Journeys } from './Containers/Journeys';


export default class App extends React.Component {
  render() {
    return (
      <View id={'webRoot'} style={styles.container}>
        <Journeys style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
