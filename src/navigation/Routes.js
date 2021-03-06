import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '../Screens/BottomTab';

const Stack = createStackNavigator();

function Home({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}> Home Screen </Text>
      <Button
        onPress={() =>
          navigation.navigate('Sign-up', {
            header: 'NOT Signup',
          })
        }
        title="Go to Sign Up"
        color="#841584"
      />
    </View>
  );
}

function SignUp({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}>
        {' '}
        I have Changed the header of this screen using params
      </Text>
      <Text style={styles.homeText}> Sign Up Screen </Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Go to Log In"
        color="#841584"
      />
    </View>
  );
}

function Login({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}> Log In Screen </Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go Back Home"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate('Bottom-Tab')}
        title="Go To Bottom Tab Screen"
        color="#841584"
      />
    </View>
  );
}

class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            options={({route}) => ({title: route.params.header})}
            name="Sign-up"
            component={SignUp}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Bottom-Tab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 20,
    marginBottom: 30,
  },
});

export default Routes;
