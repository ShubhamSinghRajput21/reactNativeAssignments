import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Product() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}>Products Page</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}>Chatting Page</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.homeText}>Settings Page</Text>
    </View>
  );
}

export default class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Products') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Chatting') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Products" component={Product} />
        <Tab.Screen name="Chatting" component={Profile} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
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
