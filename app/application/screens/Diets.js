 import React, {Component} from 'react';
import { NavigationActions, StackNavigator } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader'; 
import{ ImageBackground, Dimensions, View, TouchableOpacity, FlatList, Button, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, Body, Right, List, ListView, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';
import SwiperFlatList from 'react-native-swiper-flatlist';
import BannerAd from '../components/BannerAd';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Diets extends Component {
   static navigationOptions = {
  headerShown: false
};

_isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      diets:[],
      categories:[]
    };
  }

  componentDidMount() {
    
    this._isMounted = true;

    var request_1_url = ConfigApp.URL+'json/data_diets.php';
    var request_2_url = ConfigApp.URL+'json/data_categories.php';

    fetch(request_1_url).then((response) => response.json()).then((responseJson)  => {
        if (this._isMounted) {
          this.setState({
            diets: responseJson.filter(x => x.diet_featured == '1')
        });
        }
    }).then(()=>{
        fetch(request_2_url).then((response) => response.json()).then((responseJson) => {
         if (this._isMounted) {
          this.setState({
            categories: responseJson,
            isLoading: false,
         });
        }
     }).done();
    }).done();

     }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  DietDetails (item) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DietDetailsScreen',
      params: {item}
    });
    this.props.navigation.dispatch(navigateAction);
  }

DietsByCategory=(category_id, category_title)=>
{
      this.props.navigation.navigate('DietsByCategoryScreen', { IdCategory: category_id, TitleCategory: category_title });    
}

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    const { params } = this.props.navigation.state;

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
        <Col size={2} style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{Strings.ST3.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={this.navigateToScreen('CategoriesScreen')}>
<Ionicons name="md-search" style={{fontSize: 27, color: '#fff'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>

<ScrollView>

<SwiperFlatList
          data={ this.state.diets }
          renderItem={({item}) => 
                <TouchableOpacity onPress={() => this.DietDetails(item)} activeOpacity={1}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.diet_image}} style={styles.background_diets}>
                    
                    <LinearGradient colors={['rgba(0,0,0,0.10)','rgba(0,0,0,0.45)', 'rgba(0,0,0,0.85)']} style={styles.gradient_diets}>
                            <Text style={styles.category_diets}>{item.category_title.toUpperCase()}</Text>
                            <Text numberOfLines={2} style={styles.title_diets}>{item.diet_title}</Text>
                    </LinearGradient>
                    
                </ImageBackground>
                </TouchableOpacity>
}
        keyExtractor={(item, index) => index.toString()}

        />

<View style={{backgroundColor: ColorsApp.PRIMARY}}>
<Text style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 15, fontSize: 14, color: '#ffffff', fontWeight: 'bold'}}>{Strings.ST41.toUpperCase()}</Text>
</View>

<View style={{padding: 5, paddingTop: 10, backgroundColor: '#FFF'}}>

         <FlatList
          data={ this.state.categories }
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


</View>

</ScrollView>


</Container>
    );
  }
}

