import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import{ ImageBackground, Dimensions, View, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Container, Text} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import Strings from '../utils/Strings';
import ColorsApp from '../utils/ColorsApp';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');
const DeviceWidth = Dimensions.get('window').width;

export default class Home extends Component {
  static navigationOptions = {
  headerShown: false
};

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (

<Container style={{backgroundColor: ColorsApp.PRIMARY}}>

<ScrollView>

<LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 55, paddingHorizontal: 30, width: width}}>
</LinearGradient>


<LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 55, paddingHorizontal: 30, width: width}}>

<Grid >
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
<Ionicons name="md-menu" style={{fontSize: 27, color: '#FFFFFF'}}/>
</TouchableOpacity>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    </Col>
</Grid>
</LinearGradient>

<Grid>

 <ImageBackground source={require('../../assets/images/header.jpg')} style={{flexDirection:'column',height: height*0.4, alignItems: 'center', justifyContent: 'center' }}>
<View style={{width: width*0.8, alignItems: 'center'}}>
<Image source={require('../../assets/images/logo.png')} style={{width: 150, marginTop: 20}} resizeMode="contain"/>
</View>
</ImageBackground>


<Row>
    <Col>
    <TouchableOpacity onPress={this.navigateToScreen('WorkoutsScreen')} style={styles.gridHomeCol}>
    <Image source={require('../../assets/images/workouts.png')} style={styles.gridHomeImage} resizeMode="contain"/>
    <Text style={styles.gridHomeText}>{Strings.ST1.toUpperCase()}</Text>
    </TouchableOpacity>
    </Col>

    <Col>
    <TouchableOpacity onPress={this.navigateToScreen('ExercisesScreen')} style={styles.gridHomeCol}>
    <Image source={require('../../assets/images/exercises.png')} style={styles.gridHomeImage} resizeMode="contain"/>
    <Text style={styles.gridHomeText}>{Strings.ST2.toUpperCase()}</Text>
    </TouchableOpacity>
    </Col>
</Row>

<Row>
    {/*<Col>
    <TouchableOpacity onPress={this.navigateToScreen('DietsScreen')} style={styles.gridHomeCol}>
    <Image source={require('../../assets/images/diets.png')} style={styles.gridHomeImage} resizeMode="contain"/>
    <Text style={styles.gridHomeText}>{Strings.ST3.toUpperCase()}</Text>
    </TouchableOpacity>
    </Col>*/}

    <Col>
    <TouchableOpacity onPress={this.navigateToScreen('PostsScreen')} style={styles.gridHomeCol}>
    <Image source={require('../../assets/images/blog.png')} style={styles.gridHomeImage} resizeMode="contain"/>
    <Text style={styles.gridHomeText}>{Strings.ST4.toUpperCase()}</Text>
    </TouchableOpacity>
    </Col>
</Row>

<Row>

    <Col>
    <TouchableOpacity style={styles.gridHomeCol} onPress={this.navigateToScreen('CalculatorScreen')}>
    <Image source={require('../../assets/images/calculator.png')} style={styles.gridHomeImage} resizeMode="contain"/>
    <Text style={styles.gridHomeText}>{Strings.ST105.toUpperCase()}</Text>
    </TouchableOpacity>
    </Col>

    <Col>
    <TouchableOpacity style={styles.gridHomeCol} onPress={this.navigateToScreen('QuotesScreen')}>
    <Image source={require('../../assets/images/quotes.png')} style={styles.gridHomeImage} resizeMode="contain"/>
    <Text style={styles.gridHomeText}>{Strings.ST5.toUpperCase()}</Text>
    </TouchableOpacity>
    </Col>
</Row>

</Grid>

</ScrollView>

</Container>


    )
  }
}