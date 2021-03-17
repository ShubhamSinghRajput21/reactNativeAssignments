import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  getUserData = async () => {
    let name;
    try {
      name = await AsyncStorage.getItem('name');
    } catch (e) {
      // read error
    }

    this.setState({name: name});
  };
  componentDidMount() {
    this.getUserData();
    console.log('routes');
    console.log(this.state.name);
  }

  render() {
    const {name} = this.state;

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={name ? 'Home' : 'Sign-Up'}>
          <Stack.Screen
            name="Sign-Up"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
