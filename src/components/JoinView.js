import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, Image,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class JoinView extends Component {
  render() {
    return (
      <ScrollView>
          <View style={styles.middleBody}>
            <TextInput 
            style={styles.inputContainer}
            placeholder='First Name'
            />
            <TextInput 
            style={styles.inputContainer}
            placeholder='Last Name'
            />
            <TextInput 
            style={styles.inputContainer}
            placeholder='Your Email'
            />
            <View style={styles.inputContainer2}>
              <TextInput placeholder='Password' />
              <Text>Show</Text>
            </View>
            <View style={styles.inputContainer3}>
              <View style={{
                flexDirection:'row',
                alignItems:'center' 
              }}>
                <Image source={require('../assets/flag.jpg')} style={styles.img}/>
                <Text style={{marginLeft:20}}>+1</Text>
              </View>
              <TextInput  style={{marginLeft:20}} placeholder='123 456 7890' />
            </View>
            <View style={styles.maleFemale}>
              <FontAwesome name="circle-thin" color='orange' size={20} style={{marginLeft:20}}/>
              <Text  style={{marginLeft:10}}>Male</Text>
              <FontAwesome name="circle-thin" color='orange' size={20} style={{marginLeft:40}}/>
              <Text  style={{marginLeft:10}}>Female</Text>
            </View>
            <View style={styles.termsContainer}>
              <FontAwesome name="check-square" color="orange" size={20}/>
              <Text style={{textAlign:'justify', marginLeft:10}}>
              Be first to know about new arrivals, sales & promos by ubmitting
              your email. You can opt out at any time.
              <Text style={styles.underline}>Privacy Policy</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.signInBtn}>
            <Text style={styles.signInBtnTxt}>Join Now</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}>
            <View style={styles.orCircle}>
              <Text>or</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.googleBtn}>
            <Image source={require('../assets/googleLogo.png')} style={styles.logoImages}/>
            <Text style={styles.googleBtnTxt}>
              Join In With Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookBtn}>
            <Image source={require('../assets/facebookLogo.png')} style={styles.logoImages}/>
            <Text style={styles.signInBtnTxt2}>
              Join In With Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleBtn}>
            <Image source={require('../assets/appleLogo.png')} style={styles.logoImages}/>
            <Text style={styles.signInBtnTxt2}>
              Join In With Apple
            </Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomFirstTxt}>Don't have an account?</Text>
            <Text style={styles.bottomSecondTxt}> Join</Text>
          </View>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  middleBody:{
    flex:1,
    alignItems:'center',
  },
  inputContainer:{
    width:'90%',
    height:50,
    borderWidth:0.3,
    paddingLeft:10,
    marginTop:10
  },
  inputContainer2:{
    width:'90%',
    height:50,
    marginHorizontal:'5%',
    borderWidth:0.3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginTop:10
  },
  inputContainer3:{
    width:'90%',
    height:50,
    marginHorizontal:'5%',
    borderWidth:0.3,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    marginTop:10
  },
  img:{
    width:30,
    height:30,
    borderRadius:15
  },
  maleFemale:{
    flexDirection:'row',
    alignSelf:'flex-start',
    marginTop:10
  },
  termsContainer:{
    alignSelf:'flex-start',
    flexDirection:'row',
    marginLeft:20,
    marginRight:40,
    marginTop:10
  },
  underline: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  signInBtn:{
    width:'90%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000',
    marginTop:10
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
    marginVertical:20,
    backgroundColor:'#000',
    height:0.5,
    alignItems:'center',
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
    borderWidth:0.3,
    marginTop:10
  },
  facebookBtn:{
    width:'90%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.3,
    backgroundColor:'#3F51B5',
    marginTop:10
  },
  appleBtn:{
    width:'90%',
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.3,
    backgroundColor:'#000',
    marginTop:10
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
    borderWidth:0.3,
    marginTop:10
  },
  bottomSecondTxt:{
    fontWeight:'bold'
  }
})
