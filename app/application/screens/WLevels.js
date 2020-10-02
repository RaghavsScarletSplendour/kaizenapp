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


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class WLevels extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST11.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });

_isMounted = false;

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[],
    };
  }

  componentDidMount() {

       this._isMounted = true;
    
       return fetch(ConfigApp.URL+'json/data_levels.php')
         .then((response) => response.json())
         .then((responseJson) => {
          if (this._isMounted) {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
           });
           }
         })
         .catch((error) => {
           console.error(error);
         });
     }

  componentWillUnmount() {
    this._isMounted = false;
  }

ListWorkoutsByLevel=(level_id, level_title)=>
{
  this.props.navigation.navigate('WorkoutsByLevelScreen', { IdLevel: level_id, TitleLevel: level_title });    
}

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>

        <FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
                <TouchableOpacity onPress={this.ListWorkoutsByLevel.bind(this, item.level_id, item.level_title)} activeOpacity={1}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.level_image}} style={styles.background_categories} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']} style={styles.gradient_categories}>
                    <View style={styles.title_categories_border}></View>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']} style={styles.title_categories_background}>
                            <Text style={styles.title_categories}>{item.level_title.toUpperCase()}</Text>
                    </LinearGradient>
                    </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
}
        keyExtractor={(item, index) => index.toString()}

        />

</View>


</Container>
    );
  }
}

