import React, {Component} from 'react';
import * as firebase from 'firebase';
import AppPreLoader from '../components/AppPreLoader';
import{TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-render-html';
import { Ionicons } from '@expo/vector-icons';
import Strings from '../utils/Strings';
import BannerAd from '../components/BannerAd';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Tags extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST55.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });


_isMounted = false;


constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      dataSource:[]
    }

  }

  componentDidMount() {
    
       this._isMounted = true;
       
       return fetch(ConfigApp.URL+'json/data_tags.php')
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

PostsByTag=(tag_id, tag_title)=>
{
      this.props.navigation.navigate('PostsByTagScreen', { IdTag: tag_id, TitleTag: tag_title });    
}

  render () {

      if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (

<Container style={styles.background_general}>

<View style={{padding: 20, flex: 1}}>

         <FlatList
          data={ this.state.dataSource }
          renderItem={({item, index}) => 
    <TouchableOpacity onPress={this.PostsByTag.bind(this, item.tag_id, item.tag_title)} style={styles.buttonstyle2}>
        <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{item.tag_title.toUpperCase()}</Text>
        <Ionicons name='ios-arrow-forward' style={styles.buttonstyle2icon} />
    </TouchableOpacity>
}
        keyExtractor={(item, index) => index.toString()}

        />

<View style={{height: 30}}></View>

</View>
<BannerAd/>

</Container>

    )
  }

}