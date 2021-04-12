/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '266232518100-dnd9e8re8c3ai0qe3bp2opjl8rh67k1p.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userData = await GoogleSignin.signIn();
      setUserInfo(userData.user);
      setloggedIn(true);
      console.log(userData);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {loggedIn ? (
          <View style={styles.card}>
            <Image style={styles.img} source={{uri: userInfo.photo}} />
            <Text>Name : {userInfo.name}</Text>
            <Text>Email : {userInfo.email} </Text>
          </View>
        ) : (
          <>
            <GoogleSigninButton
              style={{width: 192, height: 48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => signIn()}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default App;
