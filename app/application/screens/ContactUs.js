import React, {Component} from 'react';
import * as firebase from 'firebase';
import { ImageBackground, TouchableOpacity, Platform, StyleSheet, TextInput, View, Alert, KeyboardAvoidingView, Dimensions, Image, StatusBar, ScrollView } from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Form, Item, Input, Label, Textarea, Button, Text } from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-root-toast';
import Strings from '../utils/Strings';
import { Ionicons } from '@expo/vector-icons';
import ColorsApp from '../utils/ColorsApp';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class ContactUs extends Component {
   static navigationOptions = {
  headerShown: false
};

constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserMessage: ''
 
    }
 }

 UserRegistrationFunction = () =>{
 
 
 const { UserName }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserMessage }  = this.state ;
 
fetch(ConfigApp.URL+'controller/contactform.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: UserName,
 
    email: UserEmail,
 
    message: UserMessage
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        if (responseJson == 'false') {
          Toast.show(Strings.ST32, {duration: Toast.durations.SHORT, position: Toast.positions.CENTER, shadow: false, animation: true})

        }else{
          Toast.show(Strings.ST74, {duration: Toast.durations.SHORT, position: Toast.positions.CENTER, shadow: false, animation: true})
          this.props.navigation.goBack()

        }

      }).catch((error) => {
        console.log(error);

      });
 
 
  }

  render () {

    return (

<KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>

<StatusBar barStyle="light-content"/>

<View style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 55, paddingHorizontal: 30, width: width}}>

<Grid>
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
<Ionicons name="md-arrow-back" style={{fontSize: 27, color: '#fff'}}/>
</TouchableOpacity>
    </Col>
        <Col size={2} style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{Strings.ST73.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>

    </Col>
</Grid>
</View>

<ScrollView>


<ImageBackground source={require('../../assets/images/header.jpg')} style={{flexDirection:'column',height: height*0.50, alignItems: 'center', justifyContent: 'center' }}>
<View style={{alignItems: 'center', paddingTop: 20}}>
<Ionicons name="ios-mail" style={{fontSize: 68, color: ColorsApp.PRIMARY, marginBottom: 5}}/>

<Text style={{color: '#fff', fontSize: 16, fontWeight:'bold', marginBottom: 10}}>{Strings.ST77.toUpperCase()}</Text>
<Text style={{color: '#fff', fontSize: 13, opacity: 0.7, fontWeight:'300'}}>{Strings.ST76.toUpperCase()}</Text>
</View>
</ImageBackground>

<View style={{margin: 20, height: height*0.50}}>
<Form style={{marginBottom: 35, marginTop: 10}}>
            <Item stackedLabel last>
              <Label style={{color: '#888888',fontSize: 15}}>{Strings.ST78.toUpperCase()}</Label>
              <Input onChangeText={UserName => this.setState({UserName})} style={{fontSize: 15}} />
            </Item>

            <Item stackedLabel last>
              <Label style={{color: '#888888',fontSize: 15}}>{Strings.ST79.toUpperCase()}</Label>
              <Input onChangeText={UserEmail => this.setState({UserEmail})} style={{fontSize: 15}} autoCapitalize="none" />
            </Item>

            <Textarea rowSpan={3} bordered placeholder={Strings.ST80.toUpperCase()} placeholderTextColor="#888888" onChangeText={UserMessage => this.setState({UserMessage})} style={{fontSize: 15, marginTop: 15, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}} />

</Form>

<View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'column', alignSelf: 'center' }}>
<Button block rounded onPress={this.UserRegistrationFunction} style={styles.button_contact}>
<Text style={{fontWeight: 'bold' }}>{Strings.ST81.toUpperCase()}</Text>
</Button>
</View>

</View>

</ScrollView>


</KeyboardAvoidingView>

    )
  }

}