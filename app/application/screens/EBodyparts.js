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

export default class EBodyparts extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST37.toUpperCase()}`,
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
    
       return fetch(ConfigApp.URL+'json/data_bodyparts.php')
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
  
ListExercisesByMuscle=(bodypart_id, bodypart_title)=>
{
      this.props.navigation.navigate('ExercisesByMuscleScreen', { IdMuscle: bodypart_id, TitleBodypart: bodypart_title });    
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


<View style={{padding:5, paddingTop: 10, backgroundColor: '#FFF'}}>

        <FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => 
                <TouchableOpacity onPress={this.ListExercisesByMuscle.bind(this, item.bodypart_id, item.bodypart_title)} activeOpacity={1} style={{flex: 1, margin: 3}}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.bodypart_image}} style={styles.background_2columns} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']} style={styles.gradient_2columns}>
                    <View style={styles.title_categories_border}></View>
                    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']} style={styles.title_2columns_background}>
                            <Text numberOfLines={1} style={styles.title_categories}>{item.bodypart_title.toUpperCase()}</Text>
                    </LinearGradient>
                    </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
}
        keyExtractor={(item, index) => index.toString()}

        />

<View style={{height: 10}}></View>
</View>

</Container>
    );
  }
}

