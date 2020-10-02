import React, {Component} from 'react';
import{TouchableOpacity, Dimensions, View, Image, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import { Ionicons } from '@expo/vector-icons';

import Strings from '../utils/Strings';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class BmiInfo extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST116.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });

  render () {


   return (

<Container style={styles.background_general}>


<Grid style={{paddingHorizontal: 20, paddingVertical: 30, paddingTop: 10}}>

    <Row size={2}>
    <Col size={2} style={styles.bmi1col}><Text style={styles.bmicoltext}>{Strings.ST117.toUpperCase()}</Text></Col>
    <Col size={1} style={[styles.bmicol, {backgroundColor: '#dff9fb'}]}><Text style={styles.bmicolnumber}>{Strings.ST123}</Text></Col>
    </Row>

    <Row size={2}>
    <Col size={2} style={styles.bmi1col}><Text style={styles.bmicoltext}>{Strings.ST118.toUpperCase()}</Text></Col>
    <Col size={1} style={[styles.bmicol, {backgroundColor: '#badc58'}]}><Text style={styles.bmicolnumber}>{Strings.ST124}</Text></Col>
    </Row>

    <Row size={2}>
    <Col size={2} style={styles.bmi1col}><Text style={styles.bmicoltext}>{Strings.ST119.toUpperCase()}</Text></Col>
    <Col size={1} style={[styles.bmicol, {backgroundColor: '#f6e58d'}]}><Text style={styles.bmicolnumber}>{Strings.ST125}</Text></Col>
    </Row>

    <Row size={2}>
    <Col size={2} style={styles.bmi1col}><Text style={styles.bmicoltext}>{Strings.ST120.toUpperCase()}</Text></Col>
    <Col size={1} style={[styles.bmicol, {backgroundColor: '#ffbe76'}]}><Text style={styles.bmicolnumber}>{Strings.ST126}</Text></Col>
    </Row>

    <Row size={2}>
    <Col size={2} style={styles.bmi1col}><Text style={styles.bmicoltext}>{Strings.ST121.toUpperCase()}</Text></Col>
    <Col size={1} style={[styles.bmicol, {backgroundColor: '#ff7979'}]}><Text style={styles.bmicolnumber}>{Strings.ST127}</Text></Col>
    </Row>

    <Row size={2}>
    <Col size={2} style={styles.bmi1col}><Text style={styles.bmicoltext}>{Strings.ST122.toUpperCase()}</Text></Col>
    <Col size={1} style={[styles.bmicol, {backgroundColor: '#eb4d4b'}]}><Text style={styles.bmicolnumber}>{Strings.ST128}</Text></Col>
    </Row>

</Grid>


</Container>

    )
  }

}