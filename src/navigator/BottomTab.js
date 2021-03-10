import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function Categories() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Categories</Text>
    </View>
  );
}

function WhishList() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>WhishList</Text>
    </View>
  );
}

function Cart() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Cart</Text>
    </View>
  );
}

function Account() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account</Text>
    </View>
  );
}

export default class BottomTab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Categories') {
                iconName = 'bars';
              } else if (route.name === 'My-Cart') {
                iconName = 'shoppingcart';
              } else if (route.name === 'Whishlist') {
                iconName = 'hearto';
              } else if (route.name === 'Account') {
                iconName = 'user';
              }
              return <IconAntDesign name={iconName} size={30} color={color} />;
            },
          })}
          tabBarOptions={{
            labelStyle: {fontSize: 14, color: '#000000'},
            style: {
              height: 100,
            },
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="My-Cart" component={Cart} />
          <Tab.Screen name="Whishlist" component={WhishList} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
