import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomInput = ({placeholder, iconName, clickHandler, value}) => {
  return (
    <View style={styles.inputContainer}>
      <AntDesign name={iconName} size={16} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => clickHandler(text)}
        value={value}
      />
    </View>
  );
};

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  }

  getMultiple = async () => {
    let values;
    try {
      values = await AsyncStorage.multiGet([
        'email',
        'name',
        'phone',
        'password',
        'confirmPassword',
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  multiSet = async () => {
    const email = ['email', `${this.state.email}`];
    const name = ['name', `${this.state.name}`];
    const phone = ['phone', `${this.state.phone}`];
    const password = ['password', `${this.state.password}`];
    const confirmPassword = [
      'confirmPassword',
      `${this.state.confirmPassword}`,
    ];
    try {
      await AsyncStorage.multiSet([
        email,
        name,
        phone,
        password,
        confirmPassword,
      ]);
    } catch (e) {
      console.log(e);
    }
  };
  createBtnHandler = (navigation) => {
    this.multiSet();
    this.getMultiple();
    navigation.navigate('Home');
  };

  nameClick = (text) => {
    this.setState({name: text});
  };
  emailClick = (text) => {
    this.setState({email: text});
  };
  phoneClick = (text) => {
    this.setState({phone: text});
  };
  passwordClick = (text) => {
    this.setState({password: text});
  };
  confirmPasswordClick = (text) => {
    this.setState({confirmPassword: text});
  };

  render() {
    const {navigation} = this.props;
    const {email, name, phone, password, confirmPasword} = this.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.topText}>Let's Get Started!</Text>
            <Text style={styles.secText}>
              Create an account to Q Allure to get all the features
            </Text>
            <CustomInput
              placeholder="Name"
              iconName="user"
              clickHandler={this.nameClick}
              value={name}
            />
            <CustomInput
              placeholder="Email"
              iconName="mail"
              clickHandler={this.emailClick}
              value={email}
            />
            <CustomInput
              placeholder="Phone"
              iconName="mobile1"
              clickHandler={this.phoneClick}
              value={phone}
            />
            <CustomInput
              placeholder="Password"
              iconName="unlock"
              clickHandler={this.passwordClick}
              value={password}
            />
            <CustomInput
              placeholder="Confirm Password"
              iconName="unlock"
              clickHandler={this.confirmPasswordClick}
              value={confirmPasword}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.createBtnHandler(navigation)}>
              <Text style={styles.btnText}>CREATE</Text>
            </TouchableOpacity>
            <View style={styles.lastTextContainer}>
              <Text>Already have an account?</Text>
              <Text style={styles.lastText}>Login here</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#dedede',
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 40,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  secText: {
    fontSize: 12,
    color: 'grey',
  },
  inputContainer: {
    width: '90%',
    height: 60,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    borderWidth: 0.3,
  },
  input: {
    width: '90%',
    height: 60,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    fontSize: 18,
  },
  btn: {
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#005eff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
  lastTextContainer: {
    flexDirection: 'row',
  },
  lastText: {
    color: '#005eff',
  },
});
