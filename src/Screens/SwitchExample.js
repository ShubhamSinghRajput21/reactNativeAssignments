import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, SafeAreaView} from 'react-native';
import Slider from '@react-native-community/slider';

export default function SwitchExample() {
  const [isenabled, setenabled] = useState(false);
  const [sliderValue, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Switch value={isenabled} onValueChange={setenabled} />
      {isenabled ? (
        <Slider
          style={styles.slider}
          value={sliderValue}
          onValueChange={setValue}
          minimumValue={0}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="green"
          maximumTrackTintColor="blue"
        />
      ) : null}
      {isenabled ? <Text>{sliderValue}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 200,
    height: 40,
  },
});
