 import React, {Component} from 'react';
import{ ImageBackground, Dimensions, TextInput, View, TouchableOpacity, Image, ScrollView, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Segment, Content, Text, Input, Item } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Strings from '../utils/Strings';
import { LinearGradient } from 'expo-linear-gradient';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';
import ConfigApp from '../utils/ConfigApp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-root-toast';
import {NavigationActions} from 'react-navigation';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Calculator extends Component {
   static navigationOptions = {
  headerShown: false
};

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  constructor(props){
    super(props); 
    this.state = {
    height: "",
    weight: "",
    resultNumber: "00.0",
    resultText: Strings.ST131,
    color: ColorsApp.PRIMARY,
    icon: require('../../assets/images/normal.png')
    }
  }

MetricCalculate = () => {

    const { height } = this.state;
    const { weight } = this.state;
    const lenghtheight = height.length.toString();
    let lenghtweight = weight.length.toString();

    if (height !== "" && weight !== "" && lenghtheight <= 3 && lenghtweight <= 3) {

    let imc = ((weight / height / height) * 10000); 
    this.setState({
      resultNumber: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultText: Strings.ST132 });
      this.setState({ color: "#22a6b3" });
      this.setState({ icon: require('../../assets/images/underweight.png') });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultText: Strings.ST133 });
      this.setState({ color: "#6ab04c" });
      this.setState({ icon: require('../../assets/images/normal.png') });


    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultText: Strings.ST134 });
      this.setState({ color: "#f0932b" });
      this.setState({ icon: require('../../assets/images/overweight.png') });


    } else {
      this.setState({ resultText: Strings.ST135 });
      this.setState({ color: "#eb4d4b" });
      this.setState({ icon: require('../../assets/images/obesity.png') });

    }
    }

    // imperial let imc = (this.state.weight * 703) / this.state.height ** 2;

  };

  render() {


  return (

<Container style={styles.background_general}>

<KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>

<StatusBar barStyle="light-content"/>

<LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 55, paddingHorizontal: 30, width: width}}>

<Grid>
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
<Ionicons name="md-arrow-back" style={{fontSize: 27, color: '#fff'}}/>
</TouchableOpacity>
    </Col>
        <Col size={2} style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{Strings.ST105.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={this.navigateToScreen('BmiInfoScreen')}>
<Ionicons name="md-information-circle-outline" style={{fontSize: 27, color: '#fff'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>

<ScrollView>

<View style={{backgroundColor: this.state.color, zIndex: 9, justifyContent: 'center',flexDirection: 'column', height: height*0.55}}>
<Image source={this.state.icon} style={{width: 120, height: 120, alignSelf: 'center'}} resizeMode="contain"/>
<Text style={{color: '#fff', fontSize: 26, fontWeight:'bold', alignSelf: 'center', marginTop: 20, marginBottom: 5}}>{this.state.resultText.toUpperCase()}</Text>
<View style={{backgroundColor: ColorsApp.TERTIARY, width: 150, height: 150, alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center', position: 'absolute', bottom: -75, zIndex: 99, borderRadius: 100, elevation: 0, borderWidth: 14, borderColor: '#FFFFFF' }}>
<Text style={{color: '#fff', fontSize: 26, fontWeight:'bold', marginBottom: 3}}>{this.state.resultNumber}</Text>
<Text style={{color: '#fff', fontSize: 13, fontWeight:'bold'}}>BMI</Text>
</View>
</View>

<View size={40} style={{backgroundColor: '#fff', paddingTop: 110, paddingHorizontal: 30, flexDirection: 'column', alignItems: 'center'}}>
  
  <Item rounded style={styles.calcinput}>
  <Input onChangeText={height => this.setState({height})} keyboardType="numeric" placeholder={Strings.ST136} placeholderTextColor="#a4a4a4" textAlign={'center'} style={{fontSize: 22, color: '#a4a4a4', fontWeight: '300'}}/>
  </Item>

  <Item rounded style={styles.calcinput}>
  <Input onChangeText={weight => this.setState({weight})} keyboardType="numeric" placeholder={Strings.ST137} placeholderTextColor="#a4a4a4" textAlign={'center'} style={{fontSize: 22, color: '#a4a4a4', fontWeight: '300'}}/>
  </Item>

<Button rounded onPress={this.MetricCalculate} style={styles.calcbutton}>
<Text style={{fontWeight: 'bold'}}>{Strings.ST138.toUpperCase()}</Text>
</Button>
<Text style={{fontSize: 14, color: '#a4a4a4'}}>{Strings.ST139}</Text>

</View>


</ScrollView>

</KeyboardAvoidingView>
</Container>

    );
  }
}
