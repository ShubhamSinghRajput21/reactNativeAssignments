import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  getMultiple = async () => {
    let email;
    let name;
    try {
      name = await AsyncStorage.getItem('name');
      email = await AsyncStorage.getItem('email');
    } catch (e) {
      console.log(e);
    }
    this.setState({name: name, email: email});
  };

  componentDidMount() {
    this.getMultiple();
  }

  logoutHandler = (navigation) => {
    Alert.alert('Alert', 'Do you really want to Logout?', [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await AsyncStorage.clear();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Sign-Up'}],
              }),
            );
          } catch (e) {}
        },
        style: 'destructive',
      },
      {
        text: 'No',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  render() {
    const {name, email} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.logoutHandler(navigation)}>
          <Text style={styles.btnText}>LOGOUT</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}> {name} </Text>
          <Text style={styles.text}> {email} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#005eff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  btnText: {
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005eff',
  },
});
