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

export default class Equipments extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST38.toUpperCase()}`,
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
       
       return fetch(ConfigApp.URL+'json/data_equipments.php')
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

ListExercisesByEquipment=(equipment_id, equipment_title)=>
{
      this.props.navigation.navigate('ExercisesByEquipmentScreen', { IdEquipment: equipment_id, TitleEquipment: equipment_title });    
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


<View style={{padding:5, paddingTop: 10, paddingBottom: 20, backgroundColor: '#FFF', flex: 1}}>

<List>

<FlatList
          data={ this.state.dataSource }
          refreshing="false"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
                
            <ListItem style={{paddingLeft: 0, marginLeft: 0, backgroundColor:'#FFF', opacity: 1, borderColor: 'rgba(0,0,0,0.05)', borderBottomWidth: 1, height: 100}}  onPress={this.ListExercisesByEquipment.bind(this, item.equipment_id, item.equipment_title)} >
              <Thumbnail square source={{ uri: ConfigApp.URL+'images/'+item.equipment_image }} style={{padding: 10, marginLeft: 14, width: 50, height: 50}} resizeMode="contain" />
              <Body style={{paddingLeft: 0, marginLeft: 0}}>
                <Text numberOfLines={2} style={{fontSize: 14, marginLeft: 24, fontWeight: 'bold'}}>
                {item.equipment_title.toUpperCase()}
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

        
</List>

</View>


</Container>
    );
  }
}

