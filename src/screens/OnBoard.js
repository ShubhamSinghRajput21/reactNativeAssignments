import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
} from 'react-native';

const DATA = [
  {
    key: 0,
    title: 'FITNESS',
    image: require('../assets/1st.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    key: 1,
    title: 'POWERLIFTING',
    image: require('../assets/2nd.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    key: 2,
    title: 'YOGA',
    image: require('../assets/3rd.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
];

export default class OnBoard extends Component {
  state = {fadeAnim: new Animated.Value(1), scrollX: new Animated.Value(0)};

  beginScrolling = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 10,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const {scrollX} = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Animated.ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScrollBeginDrag={() => this.beginScrolling}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {
                  useNativeDriver: false,
                },
              )}>
              {DATA.map((content, index) => {
                return (
                  <Animated.View
                    key={content.key.toString()}
                    style={[styles.img, {opacity: this.state.fadeAnim}]}>
                    <Image source={content.image} style={styles.img} />
                    <Text style={styles.title}>{content.title}</Text>
                    <Text style={styles.description}>
                      {content.description}
                    </Text>
                  </Animated.View>
                );
              })}
            </Animated.ScrollView>
          </View>
          <View style={styles.dotsContainer}>
            {DATA.map((_, index) => {
              const color = scrollX.interpolate({
                inputRange: [(index - 1) * 250, index * 250, (index + 1) * 250],
                outputRange: ['#FFFFFF', '#2F485E', '#FFFFFF'],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  style={[styles.dot, {backgroundColor: color}]}
                  key={index.toString()}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#d2f7ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    width: 250,
    height: 400,
    borderRadius: 20,
  },
  imgContainer: {
    flexDirection: 'row',
  },
  img: {
    width: 250,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  description: {
    fontSize: 10,
    marginHorizontal: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  dotsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#2F485E',
    borderWidth: 0.8,
  },
});
