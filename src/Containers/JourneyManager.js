import React, { Component } from 'react';
import {  Animated, WebView, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

  
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = {
    // container:  { width: 200, height: 200, display: 'flex', flexDirection: 'row', overflow: 'scroll' },
    vid:        { width: viewportWidth, height: viewportHeight - 20, marginTop: 20 },
    // left:       { backgroundColor: 'green', top: 0, left: -200 },
    // center:     { backgroundColor: 'teal', top: 0, left: 0 },
    // right:      { backgroundColor: 'blue', top: 0, left: 200 }
};

class JourneyManager extends Component {

    state = { entries: [{color: 'blue'}, {color: 'green'}, {color: 'teal'}], one: null, two: null, three: null }

    updateSlides = () => {
      this.state.entries.shift();
      this.state.entries.push({color: 'red'})
    }

    _renderItem = ({item, index}) => {

        var style   = {...styles.vid, backgroundColor: item.color},
            onPress = function () {};

        if ( item.color === 'teal' ) {
          onPress = this.updateSlides;
        }

        var thing = <TouchableOpacity style={style} onPress={onPress}>
                <Text>{ viewportWidth }</Text>
            </TouchableOpacity>

        return (
            thing
        );
    }

    render () {
        return (
            <Carousel
              loop={true}
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth} />
        );
    }
}

export {
    JourneyManager
}
