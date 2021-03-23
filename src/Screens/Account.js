import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignInView from '../components/SignInView';
import JoinView from '../components/JoinView';
import Entypo from 'react-native-vector-icons/Entypo';


const DATA =[
  {
    id:'1',
    secondIcon:'chevron-forward',
    title:'Track Order',
    firstIcon:'location-outline',
    language:'',
    flag:''
  },
  {
    id:'2',
    secondIcon:'chevron-forward',
    title:'Size Chart',
    firstIcon:'resize',
    language:'',
    flag:''
  },
  {
    id:'3',
    title:'Notifications',
    secondIcon:'chevron-forward',
    firstIcon:'notifications-outline',
    language:'',
    flag:''
  },
  {
    id:'4',
    title:'Store Locator',
    secondIcon:'chevron-forward',
    firstIcon:'locate',
    language:'',
    flag:''
  },
  {
    id:'5'
  },
  {
    id:'6',
    title:'Country',
    secondIcon:'chevron-forward',
    firstIcon:'globe',
    language:'USD',
    flag:require('../assets/flag.jpg')
  },
  {
    id:'7',
    title:'Language',
    secondIcon:'chevron-forward',
    firstIcon:'book-outline',
    language:'ENG',
    flag:''
  },
  {
    id:'8',
    title:'About Us',
    secondIcon:'chevron-forward',
    firstIcon:'person-outline',
    language:'',
    flag:''
  },
  {
    id:'9',
    title:'FAQ',
    secondIcon:'chevron-forward',
    firstIcon:'help-circle-outline',
    language:'',
    flag:''
  },
  {
    id:'10',
    title:'Shipping & Returns',
    secondIcon:'chevron-forward',
    firstIcon:'gift-outline',
    language:'',
    flag:''
  },
  {
    id:'11',
    title:'Chat With Us',
    secondIcon:'chevron-forward',
    firstIcon:'chatbox-ellipses-outline',
    language:'',
    flag:''
  },
  {
    id:'12',
    title:'Rate Application',
    secondIcon:'chevron-forward',
    firstIcon:'star-outline',
    language:'',
    flag:''
  },
  {
    id:'13',
    title:'Share Application',
    secondIcon:'chevron-forward',
    firstIcon:'thumbs-up-outline',
    language:'',
    flag:''
  },
  {
    id:'14',
    title:'Privacy Policy',
    secondIcon:'chevron-forward',
    firstIcon:'document-outline',
    language:'',
    flag:''
  },
  {
    id:'15',
    title:'Terms & Conditions',
    secondIcon:'chevron-forward',
    firstIcon:'document-text-outline',
    language:'',
    flag:''
  },
  {
    id:'16',
    title:'Send Us An Email',
    secondIcon:'chevron-forward',
    firstIcon:'mail-outline',
    language:'',
    flag:''
  }
];

function Header (props){
  return (
  <View style={styles.header}>
    <View style={styles.headerInnerColumn}>
            <Text style={styles.welcomeTxt}>Welcome!</Text>
              <TouchableOpacity style={styles.signinJoin} onPress={()=>props.setModalVisible(true)}>
                <Text style={styles.signinJoinTxt}>SIGN IN | JOIN</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.userIconContainer}>
            <AntDesign name='user' size={20} color='#ffb566'/>
          </View>      
  </View>
        );
}

const Item = ({title, firstIcon, secondIcon, id, language, flag}) => {

  if(id==='5'){
    return <View style={styles.horizontalGap}/>;
  }else{
    return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.innerItemContainer}>
        <Ionicons name={firstIcon} size={20}/>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View style={styles.innerItemContainer}>
        {flag ? <Image style={styles.flag} source={flag}/>: null}
        {language ? <Text>{language}</Text>: null}
        <Ionicons name={secondIcon} size={20} style={styles.secondIcon}/>
      </View>
    </TouchableOpacity>);
  }
}

export default class Account extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:false,
      signInScreen:false,
      joinScreen:false
    }
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible:visible,signInScreen:visible})
  }

  renderItem = ({item}) =>(
    <Item {...item}/>
  );
  render() {
    const{modalVisible} = this.state;
    return (
      <>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content'/>
      <SafeAreaView style={styles.safeAreaView}>
        <Header setModalVisible={this.setModalVisible}/>
        <View style={styles.horizontalGap}/>
        <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item=>item.id}/>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <View style={styles.header2}>
            <TouchableOpacity onPress={()=>{
              this.setState({
              signInScreen:true,
              joinScreen:false
              })
            }}>
              <Text style={styles.headerTxt2} >Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cross} onPress={()=>this.setModalVisible(false)}>
              <Entypo name='cross' size={22}/>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>this.setState({
              signInScreen:false,
              joinScreen:true})}>
              <Text style={styles.headerTxt2}>Join</Text>
            </TouchableOpacity>
          </View>
          {this.state.signInScreen?<SignInView />:null}
          {this.state.joinScreen?<JoinView />:null}
        </Modal>
      </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  safeAreaView:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:'8%',
  },
  header:{
    flexDirection:'row',
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#fff'
  },
  welcomeTxt:{
    fontSize:18,
    fontWeight:'bold'
  },
  signinJoin:{
    backgroundColor:'#fff0e6',
    padding:5,
    borderRadius:10,
    marginTop:10
  },
  signinJoinTxt:{
    fontSize:12
  },
  userIconContainer:{
    backgroundColor:'#fff0e6',
    width:40,
    height:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  horizontalGap:{
    height:10,
    backgroundColor:'#dedede'
  },
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:15,
    paddingHorizontal:20
  },
  itemTitle:{
    marginLeft:20,
    fontSize:16
  },
  innerItemContainer:{
    flexDirection:'row'
  },
  secondIcon:{
    marginLeft:10
  },
  flag:{
    width:30,
    height:20,
    marginRight:10,
  },
  header2:{
    position:'relative',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:20,
    borderBottomWidth:0.3
  },
  cross:{
    position:'absolute',
    right:10
  },
  headerTxt2:{
    fontSize:18
  },
})
