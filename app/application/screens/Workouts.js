 import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader'; 
import{ ImageBackground, Dimensions, View, TouchableOpacity, FlatList, Button, ActivityIndicator, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, Body, Right, List, ListView, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';
import BoxedShare from '../components/BoxedShare';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Workouts extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST1.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {


    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<ScrollView>

<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>

<TouchableOpacity onPress={this.navigateToScreen('WGoalsScreen')} activeOpacity={1} style={{marginBottom: 10}}>
<ImageBackground source={require('../../assets/images/goals.jpg')} style={styles.card_general} imageStyle={{borderRadius: 8}}>
<LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']} style={styles.gradient_general}>                        
    <Text style={styles.title_general}>{Strings.ST10.toUpperCase()}</Text>
    <Text style={styles.subtitle_general}>{Strings.ST12.toUpperCase()}</Text>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>


<TouchableOpacity onPress={this.navigateToScreen('WLevelsScreen')} activeOpacity={1}>
<ImageBackground source={require('../../assets/images/levels.jpg')} style={styles.card_general} imageStyle={{borderRadius: 8}}>
<LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']} style={styles.gradient_general}>                        
    <Text style={styles.title_general}>{Strings.ST11.toUpperCase()}</Text>
    <Text style={styles.subtitle_general}>{Strings.ST13.toUpperCase()}</Text>
</LinearGradient>
</ImageBackground>
</TouchableOpacity>

</View>

</ScrollView>


</Container>
    );
  }
}

