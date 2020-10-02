 import React, {Component} from 'react';
import { NavigationActions, StackNavigator } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader';
import{ Dimensions, TouchableOpacity, FlatList, StatusBar, Clipboard, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import * as firebase from 'firebase';
import BannerAd from '../components/BannerAd';
import Strings from '../utils/Strings';
import ConfigApp from '../utils/ConfigApp';
import Toast from 'react-native-root-toast';
import ColorsApp from '../utils/ColorsApp';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Quotes extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST5.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });

_isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      quotes: [],
    };
  }

componentDidMount() {

       this._isMounted = true;

   return fetch(ConfigApp.URL+'json/data_quotes.php')
   .then((response) => response.json())
   .then((responseJson) => {
    if (this._isMounted) {
     this.setState({
       isLoading: false,
       quotes: responseJson
     });
     }
   })
   .catch((error) => {
   });

}

  componentWillUnmount() {
    this._isMounted = false;
  }

copyText(quote_title){

  Clipboard.setString(quote_title);
  
  Toast.show(Strings.ST57.toUpperCase(), {duration: Toast.durations.SHORT, position: Toast.positions.CENTER, shadow: false, animation: true})

}

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    const { params } = this.props.navigation.state;
    var user = firebase.auth().currentUser;



return (

<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<View style={{marginHorizontal: 20}}>
          <DeckSwiper
            dataSource={this.state.quotes}
            renderItem={item =>
              <TouchableOpacity onPress={this.copyText.bind(this, item.quote_title)} activeOpacity={1}>
              <Card style={{ elevation: 4, marginTop: 30}}>
                <CardItem cardBody>
                  <View style={{ padding: 30, flexDirection: "row", justifyContent: "center", backgroundColor: ColorsApp.PRIMARY, height: height * 0.8, width: width * 0.90, alignItems: 'center'  }}>
                  <Text style={{position: 'absolute', top: 15, right: 30, opacity: 0.3}}><Ionicons name="md-quote" style={{fontSize: 144}} /></Text>
                  <Text style={{fontWeight: 'bold', fontSize: 26, color: '#fff'}}>{item.quote_title.toUpperCase()}</Text>
                  <Text style={{fontSize: 14, color: '#fff', position: 'absolute', bottom: 15, opacity: 0.3}}>{Strings.ST58.toUpperCase()}</Text>
                  </View>
                </CardItem>
              </Card>
              </TouchableOpacity>
            }

          />
        </View>

</Container>
    );
  }

}

