 import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader'; 
import{ ImageBackground, Dimensions, View, TouchableOpacity, FlatList, Button, AsyncStorage, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase'; 
import { Container, Text, Body, Right, List, ListView, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';
import Toast from 'react-native-root-toast';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class WorkoutDetails extends Component {
   static navigationOptions = {
  headerShown: false
};

  constructor(props) {
    super(props);
    const {params} = props.navigation.state;
    this.state = {
      item: params.item
    };
  }
  
saveWorkouts = async (workout_id, workout_title, workout_image, workout_duration, goal_title, level_title, uid) => {
    try {
        let workout = {
            userId: uid,
            workout_id: workout_id,
            workout_title: workout_title,
            workout_image: workout_image,
            workout_duration: workout_duration,
            goal_title: goal_title,
            level_title: level_title

        }
        const workouts = await AsyncStorage.getItem('workouts') || '[]';
        let workoutsFav = JSON.parse(workouts);
        workoutsItems = workoutsFav.filter(function(e){ return e.workout_id !== workout_id && e.userId == uid })
        workoutsItems.push(workout);
        AsyncStorage.setItem('workouts', JSON.stringify(workoutsItems)).then(() => {

          Toast.show(Strings.ST53.toUpperCase(), {duration: Toast.durations.SHORT, position: Toast.positions.CENTER, shadow: false, animation: true})

        });
        
    } catch(error) {

    }
};

ListDay1=(workout_id)=>
{
      this.props.navigation.navigate('Day1Screen', { WorkoutId: workout_id });   
};

ListDay2=(workout_id)=>
{
      this.props.navigation.navigate('Day2Screen', { WorkoutId: workout_id });   
};

ListDay3=(workout_id)=>
{
      this.props.navigation.navigate('Day3Screen', { WorkoutId: workout_id });   
};

ListDay4=(workout_id)=>
{
      this.props.navigation.navigate('Day4Screen', { WorkoutId: workout_id });   
};


ListDay5=(workout_id)=>
{
      this.props.navigation.navigate('Day5Screen', { WorkoutId: workout_id });   
};


ListDay6=(workout_id)=>
{
      this.props.navigation.navigate('Day6Screen', { WorkoutId: workout_id });   
};


ListDay7=(workout_id)=>
{
      this.props.navigation.navigate('Day7Screen', { WorkoutId: workout_id });   
};


  render() {

var icon = 'ios-arrow-forward';

var user = firebase.auth().currentUser;

const {item} = this.state;  

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="light-content"/>

<LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.0)']} style={{position: 'absolute', top: 0, zIndex: 100, paddingTop: 55, paddingHorizontal: 30, width: width}}>

<Grid >
    <Col style={{alignItems: 'flex-start', alignContent: 'flex-start', justifyContent: 'flex-start'}}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
<Ionicons name="md-arrow-back" style={{fontSize: 27, color: '#FFFFFF'}}/>
</TouchableOpacity>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    <TouchableOpacity onPress={this.saveWorkouts.bind(this, item.workout_id, item.workout_title, item.workout_image, item.workout_duration, item.goal_title, item.level_title, user.uid)}>
<Ionicons name="md-star" style={{fontSize: 27, color: '#FFFFFF'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>

<ScrollView>

<ImageBackground source={{uri: ConfigApp.URL+'images/'+item.workout_image}} style={styles.background_workout}>
<LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)',]} style={styles.gradient_workout}>

    <Text style={styles.title_workout}>{item.workout_title}</Text>
    <Text style={styles.category_workout}>{item.workout_duration.toUpperCase()}</Text>
</LinearGradient>
</ImageBackground>

<Grid>

<Row style={{height: 70, backgroundColor: ColorsApp.PRIMARY, marginBottom: 10}}>
<Col style={styles.col_workout}>
<Text style={styles.titlecol_workout}>{Strings.ST16.toUpperCase()}</Text>
<Text style={{color: '#fff', opacity: 0.7, fontSize: 15}}>{item.goal_title.toUpperCase()}</Text>
</Col>

<Col style={styles.col_workout}>
<Text style={styles.titlecol_workout}>{Strings.ST17.toUpperCase()}</Text>
<Text style={{color: '#fff', opacity: 0.7, fontSize: 15}}>{item.level_title.toUpperCase()}</Text>
</Col>
</Row>

</Grid>

          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay1.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST87.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay2.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST88.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay3.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST89.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay4.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST90.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay5.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST91.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay6.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST92.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_workout} onPress={this.ListDay7.bind(this, item.workout_id)} activeOpacity={1}>
            <Text style={styles.textButton_workout}>{Strings.ST93.toUpperCase()}</Text>
            <Ionicons name={icon} style={styles.icon_workout} />
          </TouchableOpacity>




</ScrollView>


</Container>
    );
  }
}

