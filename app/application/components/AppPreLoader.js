import React, { Component } from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions, Text} from 'react-native';
import { registerRootComponent } from 'expo';
import ColorsApp from '../utils/ColorsApp';

const {width, height} = Dimensions.get('window');

class AppPreLoader extends React.Component {
	
	render (){
		return (
<View style={styles.preloader}>
<ActivityIndicator size="large" color={ColorsApp.PRIMARY}/>
</View>
			)
	}
}

const styles = StyleSheet.create({
	preloader:{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: height,
		backgroundColor: '#FFFFFF',
	}
})

export default AppPreLoader;