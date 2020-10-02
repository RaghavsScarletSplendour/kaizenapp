 import React, {Component} from 'react';
import { NavigationActions, StackNavigator, withNavigation } from 'react-navigation';
import{ ImageBackground, Dimensions, View, TouchableOpacity, AsyncStorage, ScrollView, FlatList, StatusBar, Image, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Content, Body, Text, List, Right, ListItem, Tab, Tabs} from 'native-base';
import * as firebase from 'firebase';
import ConfigApp from '../utils/ConfigApp';
import BannerAd from '../components/BannerAd';
import HTML from 'react-native-render-html';
import Strings from '../utils/Strings';
import Toast from 'react-native-root-toast';
import ColorsApp from '../utils/ColorsApp';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class DietDetails extends Component {
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

saveDiets = async (diet_id, diet_title, diet_image, diet_servings, diet_time, diet_calories, diet_protein, diet_fat, diet_carbs, diet_ingredients, diet_directions, diet_description, uid) => {
    try {
        let diet = {
            userId: uid,
            diet_id: diet_id,
            diet_title: diet_title,
            diet_image: diet_image,
            diet_servings: diet_servings,
            diet_time: diet_time,
            diet_calories: diet_calories,
            diet_protein: diet_protein,
            diet_fat: diet_fat,
            diet_carbs: diet_carbs,
            diet_ingredients: diet_ingredients,
            diet_directions: diet_directions,
            diet_description: diet_description

        }
        const diets = await AsyncStorage.getItem('diets') || '[]';
        let dietsFav = JSON.parse(diets);
        dietsItems = dietsFav.filter(function(e){ return e.diet_id !== diet_id && e.userId == uid })
        dietsItems.push(diet);
        AsyncStorage.setItem('diets', JSON.stringify(dietsItems)).then(() => {

          Toast.show(Strings.ST53.toUpperCase(), {duration: Toast.durations.SHORT, position: Toast.positions.CENTER, shadow: false, animation: true})
            

        });
        
    } catch(error) {

    }
};

  render() {

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
        <Col size={2} style={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
    <Text numberOfLines={1} style={{fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{Strings.ST129.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    <TouchableOpacity onPress={this.saveDiets.bind(this, item.diet_id, item.diet_title, item.diet_image, item.diet_servings, item.diet_time, item.diet_calories, item.diet_protein, item.diet_fat, item.diet_carbs, item.diet_ingredients, item.diet_directions, item.diet_description, user.uid)}>
<Ionicons name="md-star" style={{fontSize: 27, color: '#FFFFFF'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>


<ImageBackground source={{uri: ConfigApp.URL+'images/'+item.diet_image}} style={styles.background_diets}>
                    <LinearGradient colors={['rgba(0,0,0,0.10)','rgba(0,0,0,0.45)', 'rgba(0,0,0,0.85)']} style={styles.gradient_diets}>
                            <Text style={styles.category_diets}>{item.category_title.toUpperCase()}</Text>
                            <Text style={styles.title_diets}>{item.diet_title}</Text>
                    </LinearGradient>
</ImageBackground>

<Tabs tabBarUnderlineStyle={{backgroundColor: '#fff'}} tabContainerStyle={{ elevation:0 }}>

<Tab heading={Strings.ST46.toUpperCase()} tabStyle={styles.tabs} activeTabStyle={styles.activetabs} textStyle={styles.tabs_text} activeTextStyle={styles.activetabs_text}>
            
 <ScrollView> 
 <View style={{margin: 15, marginTop: 40}}>

<Grid style={{marginBottom: 15}}>

<Row style={{height: 75, backgroundColor: '#fff'}}>
<Col style={styles.col_diets}>
<Image source={require('../../assets/images/caloriesf.png')} style={styles.icon_dietscol} />
<Text style={styles.titlecol1_diets}>{Strings.ST45.toUpperCase()}</Text>
<Text style={styles.titlecol_diets}>{item.diet_calories}</Text>
</Col>

<Col style={styles.col_diets}>
<Image source={require('../../assets/images/protein.png')} style={styles.icon_dietscol} />
<Text style={styles.titlecol1_diets}>{Strings.ST50.toUpperCase()}</Text>
<Text style={styles.titlecol_diets}>{item.diet_protein}</Text>
</Col>

<Col style={styles.col_diets}>
<Image source={require('../../assets/images/fat.png')} style={styles.icon_dietscol} />
<Text style={styles.titlecol1_diets}>{Strings.ST51.toUpperCase()}</Text>
<Text style={styles.titlecol_diets}>{item.diet_fat}</Text>
</Col>

<Col style={styles.col_diets}>
<Image source={require('../../assets/images/carbs.png')} style={styles.icon_dietscol} />
<Text style={styles.titlecol1_diets}>{Strings.ST52.toUpperCase()}</Text>
<Text style={styles.titlecol_diets}>{item.diet_carbs}</Text>
</Col>

</Row>

</Grid>

<HTML html={item.diet_description} />

</View>


</ScrollView>
          </Tab>
          <Tab heading={Strings.ST47.toUpperCase()} tabStyle={styles.tabs} activeTabStyle={styles.activetabs} textStyle={styles.tabs_text} activeTextStyle={styles.activetabs_text}>
            <ScrollView>
            
            <View style={{margin: 15, marginTop: 20}}>           
            <HTML html={item.diet_ingredients} />
            </View>
            </ScrollView>

          </Tab>


          <Tab heading={Strings.ST48.toUpperCase()} tabStyle={styles.tabs} activeTabStyle={styles.activetabs} textStyle={styles.tabs_text} activeTextStyle={styles.activetabs_text}>
            <ScrollView>
            
            <View style={{marginTop: 20, marginRight: 15}}>           
            <HTML html={item.diet_directions} />
            </View>
            </ScrollView>
            
          </Tab>


</Tabs>

<BannerAd/>

</Container>
    );
  }
}

