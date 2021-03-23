import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class SignInView extends Component {
  render() {
    return (
      <>
        <View style={styles.middleBody}>
          <TextInput 
          style={styles.inputContainer}
          placeholder='Your Email Address'
          />
          <View style={styles.inputContainer2}>
            <TextInput placeholder='Password' style={styles.inputContainer3}/>
            <Text>Show</Text>
          </View>
          <Text>Forgot Password?</Text>
          <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInBtnTxt}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}>
            <View style={styles.orCircle}>
              <Text>or</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.googleBtn}>
            <Image source={require('../assets/googleLogo.png')} style={styles.logoImages}/>
            <Text style={styles.googleBtnTxt}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookBtn}>
            <Image source={require('../assets/facebookLogo.png')} style={styles.logoImages}/>
            <Text style={styles.signInBtnTxt2}>
              Sign In With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleBtn}>
            <Image source={require('../assets/appleLogo.png')} style={styles.logoImages}/>
            <Text style={styles.signInBtnTxt2}>
              Sign In With Apple
            </Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomFirstTxt}>Don't have an account?</Text>
            <Text style={styles.bottomSecondTxt}> Join</Text>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  middleBody:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  inputContainer:{
    width:'90%',
    height:50,
    borderWidth:0.3,
    paddingLeft:10
  },
  inputContainer2:{
    width:'90%',
    height:50,
    marginHorizontal:'5%',
    borderWidth:0.3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  signInBtn:{
    width:'90%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000',
  },
  signInBtnTxt:{
    color:'#fff',
    marginLeft:10
  },
  signInBtnTxt2:{
    color:'#fff',
    marginLeft:10
  },
  googleBtnTxt:{
    marginLeft:10
  },
  horizontalLine:{
    width:'90%',
    marginVertical:15,
    backgroundColor:'#000',
    height:0.5,
    alignItems:'center'
  },
  orCircle:{
    position:'absolute',
    top:-15,
    width:30,
    height:30,
    borderRadius:15,
    borderWidth:0.3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  googleBtn:{
    width:'90%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.3
  },
  facebookBtn:{
    width:'90%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.3,
    backgroundColor:'#3F51B5'
  },
  appleBtn:{
    width:'90%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.3,
    backgroundColor:'#000'
  },
  logoImages:{
    width:30,
    height:30
  },
  bottom:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'98%',
    height:60,
    backgroundColor:'#ddd',
    borderWidth:0.3
  },
  bottomSecondTxt:{
    fontWeight:'bold'
  }
})
