import React, {Component} from 'react';
import {StyleSheet, Text, Alert, BackHandler, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ClipboardExample, {CopyContent} from './src/Screens/ClipboardExample';

const Stack = createStackNavigator();

class HomeScreen extends Component {
  backAction = () => {
    Alert.alert('Alert', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          This page is showing the Backhandler functionality
        </Text>
      </View>
    );
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Clipboard">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Clipboard" component={ClipboardExample} />
        <Stack.Screen name="Copy-content" component={CopyContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
