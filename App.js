import React, {Component} from 'react';
import {Animated, StyleSheet, Text, SafeAreaView} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

class App extends Component {
  state = {
    initialAnimationValue: new Animated.ValueXY(0),
  };

  onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: this.state.initialAnimationValue.x,
          translationY: this.state.initialAnimationValue.y,
        },
      },
    ],
    {listener: (event) => {}, useNativeDriver: true},
  );

  animationEvent = {
    transform: [
      {
        translateY: this.state.initialAnimationValue.y.interpolate({
          inputRange: [0, 700],
          outputRange: [0, 700],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: this.state.initialAnimationValue.x.interpolate({
          inputRange: [0, 310],
          outputRange: [0, 310],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PanGestureHandler onGestureEvent={this.onGestureEvent}>
          <Animated.View style={{flex: 1}}>
            <Animated.View
              style={[styles.innerContainer, this.animationEvent]}
            />
          </Animated.View>
        </PanGestureHandler>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 10,
  },
});

export default App;
