import React, {Component} from 'react';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import{ ImageBackground, AsyncStorage, TouchableOpacity, Dimensions, View, Image, SafeAreaView, ScrollView, StatusBar, FlatList} from 'react-native';
import { Container, Content, Body, Thumbnail,Text, List, Right,Left, Button, ListItem, Tab, Tabs} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import ConfigApp from '../utils/ConfigApp';
import TimeAgo from 'react-native-timeago';
import PostFav from '../components/PostFav';
import DietFav from '../components/DietFav';
import WorkoutFav from '../components/WorkoutFav';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import ColorsApp from '../utils/ColorsApp'; 
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Profile extends Component {
   static navigationOptions = {
  headerShown: false
};


constructor(props) {

    super(props);

    this.state = {
      loading: true
    }

  }

  logOut (){
firebase.auth().signOut()
 }
 
  render () {

  var user = firebase.auth().currentUser;
  var email, displayName, emailVerified, creationTime;

  if (user != null) {
  email = user.email;
  displayName = user.displayName;
  emailVerified = user.emailVerified;
  creationTime = user.metadata.creationTime;

  }

    return (

<Container style={styles.background_general}>

<StatusBar barStyle="light-content"/>

<LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 55, paddingHorizontal: 30, width: width}}>

<Grid>
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
<Ionicons name="md-arrow-back" style={{fontSize: 27, color: '#fff'}}/>
</TouchableOpacity>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    <TouchableOpacity onPress={this.logOut.bind(this)}>
<MaterialCommunityIcons name="login-variant" style={{fontSize: 27, color: '#FFFFFF'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>

<ScrollView>

<ImageBackground source={require('../../assets/images/header.jpg')} style={{width: width, height: height * 0.30, alignItems: 'center', justifyContent: 'center'}}>

        <Text style={{color: ColorsApp.PRIMARY, fontSize: 18, marginTop: 30, fontWeight: 'bold' }}>{displayName.toUpperCase()}</Text>
        <Text style={{color: '#FFF', fontSize: 14, marginTop: 6, textTransform: 'uppercase'}}> {Strings.ST65} <TimeAgo time={creationTime} hideAgo={true}/></Text>  
        <View style={{height: 10}}></View>

</ImageBackground>

<View style={{backgroundColor: ColorsApp.PRIMARY}}>
<Text style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 15, fontSize: 14, color: '#ffffff', fontWeight: 'bold'}}>{Strings.ST56.toUpperCase()}</Text>
</View>

<View style={{marginHorizontal: 16, marginVertical: 25}}>
<Collapse isCollapsed={true} style={{marginBottom: 8}}>
    <CollapseHeader>
      <View style={styles.collapseheader}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST1.toUpperCase()}</Text>
        <MaterialIcons name='remove' style={styles.collapseicon} />
      </View>
    </CollapseHeader>
    <CollapseBody>
   
      <WorkoutFav />

    </CollapseBody>
</Collapse>

<Collapse isCollapsed={true} style={{marginBottom: 8}}>
    <CollapseHeader>
      <View style={styles.collapseheader}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST4.toUpperCase()}</Text>
        <MaterialIcons name='remove' style={styles.collapseicon} />
      </View>
    </CollapseHeader>
    <CollapseBody>
   
      <PostFav />

    </CollapseBody>
</Collapse>

<Collapse isCollapsed={true} style={{marginBottom: 8}}>
    <CollapseHeader>
      <View style={styles.collapseheader}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST3.toUpperCase()}</Text>
        <MaterialIcons name='remove' style={styles.collapseicon} />
      </View>
    </CollapseHeader>
    <CollapseBody>
   
      <DietFav />

    </CollapseBody>
</Collapse>

</View>

</ScrollView>

</Container>

    )
  }

}