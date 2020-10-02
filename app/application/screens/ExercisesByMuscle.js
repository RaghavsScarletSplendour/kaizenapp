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
import BannerAd from '../components/BannerAd';
import ListEmpty from '../components/ListEmpty';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class ExercisesByMuscle extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.TitleBodypart.toUpperCase()}`,
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
       
       return fetch(ConfigApp.URL+'json/data_muscle.php?muscle='+this.props.navigation.state.params.IdMuscle)
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
  
  ExerciseDetails (item) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'ExerciseDetailsScreen',
      params: {item}
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    const dataSource = this.state.dataSource

    if (dataSource.length == []) {
      return (
        <ListEmpty title={Strings.ST140}/>
      );
    } 
    
    const { params } = this.props.navigation.state;
    const IdMuscle = params ? params.IdMuscle : null;

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>



<View style={{padding: 5, paddingTop: 10, paddingBottom: 20, backgroundColor: '#FFF', flex: 1}}>


<FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
                
            <ListItem style={{paddingLeft: 0, marginLeft: 0, backgroundColor:'#FFF', opacity: 1, borderColor: 'rgba(0,0,0,0.05)', borderBottomWidth: 1, marginVertical: 20}}  onPress={() => this.ExerciseDetails(item)} noIndent>
              <Thumbnail square source={{ uri: ConfigApp.URL+'images/'+item.exercise_image }} style={{paddingLeft: 10, marginLeft: 10, width: 90, height: 70}} />
              <Body style={{paddingLeft: 0, marginLeft: 0}}>
                <Text numberOfLines={2} style={{fontSize: 14, fontWeight: 'bold'}}>
                {item.exercise_title.toUpperCase()}
                </Text>
              </Body>
              <Right>
                <Text note>
                <Ionicons name="ios-arrow-forward" style={styles.icon_workout}/>
                </Text>
              </Right>
            </ListItem>
          
}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={this.renderFooter}


        /> 

<View style={{height: 70}}></View>

</View>


<BannerAd/>

</Container>
    );
  }
}

