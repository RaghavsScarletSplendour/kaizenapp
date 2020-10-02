import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from "../screens/Start";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";
import ForgetPassScreen from "../screens/ForgetPass";
import TermsGuestScreen from "../screens/TermsGuest";
import ColorsApp from '../utils/ColorsApp';
var styles = require('../../assets/files/Styles');

const navigationOptions = {
  defaultNavigationOptions: {
		    headerStyle: styles.headerStyle,
		    headerBackTitle: null,
		    headerTintColor: '#000',
  			headerTitleAlign: 'center',
		    headerTitleStyle: {
		      textAlign: 'center',
		      alignSelf: 'center',
		      justifyContent: 'space-between',
		      fontSize: 16,
		      color: '#000',
		      fontWeight: 'bold'
		    }
		}
};

const RootStack = createStackNavigator(
	{
		Start: {
			screen: StartScreen
		},

		Login: {
			screen: LoginScreen
		},
		Register: {
			screen: RegisterScreen
		},
		ForgetPass: {
			screen: ForgetPassScreen
		},
		Terms: {
			screen: TermsGuestScreen,
		},

		initialRouteName: StartScreen,
	},
		navigationOptions

)

export default createAppContainer(RootStack)