import React, {Component} from 'react';
import * as firebase from 'firebase';
import AppPreLoader from '../components/AppPreLoader';
import{ImageBackground, TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-render-html';
import { Ionicons } from '@expo/vector-icons';
import Strings from '../utils/Strings';
import { LinearGradient } from 'expo-linear-gradient';
import BannerAd from '../components/BannerAd';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Categories extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST41.toUpperCase()}`,
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
       
       return fetch(ConfigApp.URL+'json/data_categories.php')
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

DietsByCategory=(category_id, category_title)=>
{
      this.props.navigation.navigate('DietsByCategoryScreen', { IdCategory: category_id, TitleCategory: category_title });    
}

  render () {

      if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (

<Container style={styles.background_general}>

<View style={{padding:5, paddingTop: 10, paddingBottom: 20, backgroundColor: '#FFF', flex: 1}}>

         <FlatList
          data={ this.state.dataSource }
          numColumns={2}
          renderItem={({item, index}) => 
                <TouchableOpacity onPress={this.DietsByCategory.bind(this, item.category_id, item.category_title)} activeOpacity={1} style={{flex: 1}}>
                <View style={{margin: 5}}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.category_image}} style={styles.background_posts_2columns} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']} style={styles.gradient_posts_2columns}>
                            <Text numberOfLines={1} style={styles.title_posts_categories}>{item.category_title.toUpperCase()}</Text>
                    </LinearGradient>
                </ImageBackground>
                </View>
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