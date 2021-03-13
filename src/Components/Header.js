import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export default class Header extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}
          style={styles.mainContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText1}>Store Selected:</Text>
            <Text style={styles.headerText2}> Coop Moindal Abby</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Alert', 'User Has Pressed');
              }}
              style={styles.Icon}>
              <IconAntDesign name="closecircle" color="#fff" size={16} />
            </TouchableOpacity>
          </View>
          <TextInput style={styles.input}>
            <IconAntDesign name="search1" size={20} color="#fff" />
          </TextInput>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: '10%',
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  headerText1: {
    color: '#fff',
    fontSize: 16,
  },
  headerText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#c9c9c9',
    paddingLeft: 10,
    color: 'red',
  },
  Icon: {
    marginLeft: '27%',
  },
});
