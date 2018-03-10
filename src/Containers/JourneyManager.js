import React, { Component } from 'react';
import {  Animated, WebView, View, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';


  
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = {
    container:  { width: 200, height: 200, display: 'flex', flexDirection: 'row', overflow: 'scroll' },
    vid:        { width: 200, height: 200 },
    left:       { backgroundColor: 'green', top: 0, left: -200 },
    center:     { backgroundColor: 'teal', top: 0, left: 0 },
    right:      { backgroundColor: 'blue', top: 0, left: 200 }
};

class JourneyManager extends Component {



    state = { entries: [{color: 'blue'}, {color: 'green'}, {color: 'teal'}]}

    _renderItem ({item, index}) {

        var style = {...styles.vid, backgroundColor: item.color}

        return (
            <View style={style}>
                <Text>{ 'Here' }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={200}
              itemWidth={190} />
        );
    }
}

export {
    JourneyManager
}
