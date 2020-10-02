import React, {Component} from 'react';
import { Dimensions, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Container, Body, Footer, Header, Input, Item, Left, Text, Title, Right, View, Button, Toast, Form} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modalbox';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-render-html';
import Strings from '../utils/Strings';
import { LinearGradient } from 'expo-linear-gradient';
import ColorsApp from '../utils/ColorsApp';
import {Grid, Row, Col } from 'react-native-easy-grid';
import * as firebase from 'firebase';

var styles = require('../../assets/files/Styles');
var width = Dimensions.get('window').width;

export default class Login extends Component {
	static navigationOptions = {
	headerShown: false
};

constructor() {
    super();
    this.state = {
 
      email: '',
      password: ''
    }
 }
	login (){

		const { email }  = this.state;
		const { password }  = this.state;

		if (email, password) {
			firebase.auth().signInWithEmailAndPassword(email,password)
			.then(() => {
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (errorCode === 'auth/wrong-password') {

				Toast.show({ text: `${Strings.ST30}`, position: 'bottom', buttonText: `${Strings.ST33}` })

				}
				else if (errorCode === 'auth/user-not-found') {

				Toast.show({ text: `${Strings.ST31}`, position: 'bottom', buttonText: `${Strings.ST33}` })

				}
				else{
				Toast.show({ text: `${Strings.ST32}`, position: 'bottom', buttonText: `${Strings.ST33}` })
				}

			});
		}

	}

	forgetpass() {
		const navigateAction = NavigationActions.navigate({
			routeName: 'ForgetPass'
		});
		this.props.navigation.dispatch(navigateAction);
	}

	render() {
		return (

<Container style={styles.background_general}>

<KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>

<LinearGradient colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 45, paddingHorizontal: 30, width: width}}>
</LinearGradient>

<ScrollView>


<LinearGradient colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.0)']} style={{paddingTop: 45, paddingHorizontal: 30, width: width, marginBottom: 5}}>

<Grid >
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
<Ionicons name="md-arrow-back" style={{fontSize: 27, color: '#000'}}/>
</TouchableOpacity>
    </Col>
        <Col size={2} style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold' }}>{Strings.ST26.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    </Col>
</Grid>
</LinearGradient>


		<View style={{flex: 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20}}>
			<Image source={require('../../assets/images/logo_dark.png')} style={styles.logo_login} resizeMode="contain"/>

			<Form ref="formId">

			<Item rounded style={styles.inputLogin}>
			<Ionicons name="md-mail" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
           	<Input onChangeText={email => this.setState({email})} placeholder={Strings.ST107} placeholderTextColor="#a4a4a4" style={{fontSize: 16, color: '#a4a4a4'}} autoCapitalize="none"/>
          	</Item>

          	<Item rounded style={styles.inputLogin}>
          	<Ionicons name="md-lock" style={{fontSize: 18, marginLeft: 18, marginRight: 5, color: '#a4a4a4'}} />
          	<Input onChangeText={password => this.setState({password})} placeholder={Strings.ST108} placeholderTextColor="#a4a4a4" style={{fontSize: 16, color: '#a4a4a4'}} secureTextEntry={true} autoCapitalize="none"/>
          	</Item>

			</Form>

			<TouchableOpacity onPress={this.login.bind(this)}>
			<View style={styles.button_auth}>
			<Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 14}}>{Strings.ST28.toUpperCase()}</Text>
			</View>
			</TouchableOpacity>	

				<TouchableOpacity  onPress={this.forgetpass.bind(this)} style={styles.text_auth}>
				<Text style={styles.text_auth}>{Strings.ST29.toUpperCase()}</Text>
				</TouchableOpacity>


			</View>

</ScrollView>
</KeyboardAvoidingView>
</Container>

			);
	}
}