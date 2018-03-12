import React, { Component } from 'react';
import {  Animated, WebView, View, Dimensions, Text, TouchableOpacity, FlatList, PanResponder } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// UTILS
import { modulo } from '../utils/math';


var count = 0;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window'),
        halfWidth   = viewportWidth/2,
        halfHeight  = viewportHeight/2;

const styles = {
    vid:        { width: viewportWidth, height: viewportHeight - 20, marginTop: 20, position: 'absolute' },
    left:       { top: -1 * halfHeight, left: -3 * halfWidth },
    center:     { top: -1 * halfHeight, left: -1 * halfWidth },
    right:      { top: -1 * halfHeight, left: 3 * halfWidth },
};

var indexToPos = {
    0: 'left',
    1: 'center',
    2: 'right'
};


class JourneyVid extends Component {
    render () {
        count++
        var posKey  = indexToPos[ this.props.index ],
            color   = this.props.color || 'red';

        var style = {...styles.vid, ...styles[ posKey ], backgroundColor: color}
        return (
            <Animated.View style={style}>
                <WebView
                    ref={'webview'}
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    startInLoadingState={true} />
                <Text style={{position: 'absolute', height: 300, width: 300, top: 0, 'z-index': 100000000000000000000}}> {count} </Text>
            </Animated.View>
        );
    }
};


// https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0
// https://facebook.github.io/react-native/docs/panresponder.html
class JourneyManager extends Component {

    state = {
        allProps: [
            { key: 1, color: 'blue', url: 'https://www.youtube.com/watch?v=43w7rcYPUnI' },
            { key: 2, color: 'teal', url: 'https://www.youtube.com/watch?annotation_id=annotation_228595337&feature=iv&src_vid=ZWib5olGbQ0&v=XIOoCKO-ybQ' },
            { key: 3, color: 'green', url: 'https://www.youtube.com/watch?v=kCSzjExvbTQ' }
        ],
        dragging: false
    }

    componentWillMount () {
        // Initialize PanResponder with move handling
        // https://facebook.github.io/react-native/docs/panresponder.html
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder:   ( evnt, gestureState ) => { return true },
            onPanResponderMove:             this.onDrag,
            onPanResponderRelease:          this.endDrag,
            // For other elments being entered. Keep it in for now
            onPanResponderTerminate:        this.endDrag,
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    onDrag = ( evnt, gestureState ) => {

        // If already dragging, don't do anything
        if ( this.state.dragging ) { return this; }

        var gs = gestureState;

        // If the gesture has moved far enough to be intentional
        if ( Math.abs(gs.dx) > 75 ) {
            // Move in the direction indicated by a negative or
            // positive movement (left or right)
            var sign = gs.dx < 0? -1:1
            var newProps = this.swipeResult( sign );
            this.setState({ allProps: newProps, dragging: true });
        }

    }

    endDrag = () => { this.setState({ dragging: false }); }

    swipeResult = ( toAdd ) => {
    // Change the order of the items. In future, change video links as well for
    // non-visible items.
        var { allProps }    = this.state,
            newAllProps     = [];

        for ( var propsi = 0; propsi < allProps.length; propsi++ ) {
            var props       = allProps[ propsi ],
                newIndex    = modulo(propsi + toAdd, 3);
            newAllProps[ newIndex ] = props;
        }

        return newAllProps;
    }

    render () {

        var { allProps }    = this.state,
            // Can't spread and add props at same time inside JSX here
            one             = {...allProps[0], index: 0 },
            two             = {...allProps[1], index: 1 },
            three           = {...allProps[2], index: 2 };

        return (
            <View {...this.panResponder.panHandlers}>
                <JourneyVid {...one} />
                <JourneyVid {...two} />
                <JourneyVid {...three} />
            </View>
        );
    }
}

export {
    JourneyManager,
    JourneyVid
}
