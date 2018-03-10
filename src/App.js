import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// ROUTES
import { Journeys } from './Containers/Journeys';
import { JourneyManager } from './Containers/JourneyManager';


export default class App extends React.Component {
        // <Journeys style={{flex: 1}}/>
  render() {
    return (
      <View id={'webRoot'} style={styles.container}>
        <JourneyManager path={'something'} style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
