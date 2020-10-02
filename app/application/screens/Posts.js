import React, {Component} from 'react';
import { NavigationActions, StackNavigator } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader';
import{ ImageBackground, Dimensions, View, TouchableOpacity, FlatList, Button, ActivityIndicator, StatusBar, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, Body, Right, List, ListView, Left, Thumbnail, ListItem} from 'native-base';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ConfigApp from '../utils/ConfigApp';
import NativeBannerAd from '../components/NativeBannerAd';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Posts extends Component {
   static navigationOptions = {
  headerShown: false
};

  _isMounted = false;

  constructor(props) {
    super(props);
    this.infiniteScrollRef = null;
    this.state = {
      isLoading: true,
      posts:[],
      recentposts:[]
    };
  }

  componentDidMount() {
    
    this._isMounted = true;

    var request_1_url = ConfigApp.URL+'json/data_posts.php';

    fetch(request_1_url).then((response) => response.json()).then((responseJson)  => {

      if (this._isMounted) {
        this.setState({
            posts: responseJson.filter((e, index) => { return index < 8 && e.post_featured == '1' })
        });
      }

    }).then(()=>{
        fetch(request_1_url).then((response) => response.json()).then((responseJson) => {
         if (this._isMounted) {
          this.setState({
            recentposts: responseJson.filter((e, index) => { return index < 18 }),
            isLoading: false,
         });
        }
     }).done();
    }).done();

     }

  componentWillUnmount() {
    this._isMounted = false;
  }

  PostDetails (item) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'PostDetailsScreen',
      params: {item}
    });
    this.props.navigation.dispatch(navigateAction);
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
    <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{Strings.ST4.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
      <TouchableOpacity onPress={this.navigateToScreen('TagsScreen')}>
<Ionicons name="md-search" style={{fontSize: 27, color: '#fff'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>

<ScrollView>

<SwiperFlatList
          data={ this.state.posts }
          renderItem={({item}) => 
                <TouchableOpacity onPress={() => this.PostDetails(item)} activeOpacity={1}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.post_image}} style={styles.background_diets}>
                    
                    <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']} style={styles.gradient_diets}>
                            <Text style={styles.category_diets}>{item.tag_title.toUpperCase()}</Text>
                            <Text numberOfLines={2} style={styles.title_diets}>{item.post_title}</Text>
                    </LinearGradient>
                </ImageBackground>
                </TouchableOpacity>
}
        keyExtractor={(item, index) => index.toString()}

        />


<View style={{backgroundColor: ColorsApp.PRIMARY}}>
<Text style={{paddingTop: 15, paddingBottom: 15, paddingLeft: 15, fontSize: 14, color: '#ffffff', fontWeight: 'bold'}}>{Strings.ST54.toUpperCase()}</Text>
</View>

<View style={{margin: 7, marginTop: 8}}>

         <FlatList
          data={ this.state.recentposts }
          numColumns={2}
          renderItem={({item, index}) => 
                <TouchableOpacity onPress={() => this.PostDetails(item)} activeOpacity={1} style={{flex: 1}}>
                <View style={{margin: 5}}>
                <ImageBackground source={{uri: ConfigApp.URL+'images/'+item.post_image}} style={styles.background_posts_2columns} imageStyle={{borderRadius: 8}}>
                    <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']} style={styles.gradient_posts_2columns}>
                            <Text numberOfLines={1} style={styles.title_posts_categories}>{item.post_title}</Text>
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

