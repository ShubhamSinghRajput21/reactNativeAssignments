import React, {Component} from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import AddEmployee from '../screens/AddEmployee';

const Stack = createStackNavigator();

export default class StackNavigatior extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={({navigation}) => ({
              headerRight: ({navi}) => (
                <Button
                  title="Add Employee +"
                  onPress={() => navigation.navigate('Add-Employee')}
                />
              ),
            })}
          />
          <Stack.Screen name="Add-Employee" component={AddEmployee} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
