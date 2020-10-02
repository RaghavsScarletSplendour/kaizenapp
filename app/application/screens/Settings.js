import React, {Component} from 'react';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import{TouchableOpacity, Dimensions, View, Image, ScrollView, Linking, StatusBar} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Text, List, ListItem, Left, Right, Body } from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Settings extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST7.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });


constructor(props) {

    super(props);

    this.state = {
      loading: true
    }

  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {

    return (

<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<ScrollView>
<Grid>

<Row style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center',  backgroundColor: '#FFF', height: height * 0.30, padding:30, paddingBottom: 0}}>
<Image
      source={require('../../assets/images/logo_dark.png')}
      style={{flex: 1, width: 150, height: 150}}
      resizeMode='contain'/>
</Row>

</Grid>

<View style={{padding: 45, paddingTop: 30}}>

<TouchableOpacity onPress={this.navigateToScreen('AboutUsScreen')} style={styles.buttonstyle1}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST9.toUpperCase()}</Text>
        <Ionicons name='ios-arrow-forward' style={styles.buttonstyle1icon} />
</TouchableOpacity>

<TouchableOpacity onPress={this.navigateToScreen('ContactUsScreen')} style={styles.buttonstyle1}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST75.toUpperCase()}</Text>
        <Ionicons name='ios-arrow-forward' style={styles.buttonstyle1icon} />
</TouchableOpacity>

<TouchableOpacity onPress={this.navigateToScreen('TermsScreen')} style={styles.buttonstyle1}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST82.toUpperCase()}</Text>
        <Ionicons name='ios-arrow-forward' style={styles.buttonstyle1icon} />
</TouchableOpacity>


</View>

<View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: 10}}>
<TouchableOpacity onPress={ ()=>{ Linking.openURL(ConfigApp.FACEBOOK)}}><Icon name="facebook-with-circle" style={styles.socialicon}/></TouchableOpacity>
<TouchableOpacity onPress={ ()=>{ Linking.openURL(ConfigApp.YOUTUBE)}}><Icon name="youtube-with-circle" style={styles.socialicon}/></TouchableOpacity>
<TouchableOpacity onPress={ ()=>{ Linking.openURL(ConfigApp.TWITTER)}}><Icon name="twitter-with-circle" style={styles.socialicon}/></TouchableOpacity>
<TouchableOpacity onPress={ ()=>{ Linking.openURL(ConfigApp.INSTAGRAM)}}><Icon name="instagram-with-circle" style={styles.socialicon}/></TouchableOpacity>

</View>

</ScrollView>

</Container>

    )
  }

}