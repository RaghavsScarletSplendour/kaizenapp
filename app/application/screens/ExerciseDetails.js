 import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader'; 
import{ ImageBackground, Dimensions, View, TouchableOpacity, FlatList, ActivityIndicator, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Text, Body, Right, List, Footer, ListView, Accordion, Button, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ColorsApp from '../utils/ColorsApp';
import NativeBannerAd from '../components/NativeBannerAd';
import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import HTML from 'react-native-render-html';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class ExerciseDetails extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST115.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    });

_isMounted = false;

  constructor(props) {
    super(props);
    const {params} = props.navigation.state;
    this.state = {
      item: params.item,
      isLoading: true,
      mute: true,
      shouldPlay: false,
      dataSource:[],
    };
  }

  handlePlayAndPause = () => {  
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay  
    }));
  }

  componentDidMount() {
    
       this._isMounted = true;
       
       return fetch(ConfigApp.URL+'json/data_bodypart.php?exercise='+this.props.navigation.state.params.item.exercise_id)
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

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }
    
  const {item} = this.state;  

    return (
<Container style={styles.background_general}>

<StatusBar barStyle="dark-content"/>

<ScrollView>

<Video
    source={{ uri: item.exercise_video }}
    usePoster={true}
    posterSource={{ uri: ConfigApp.URL+'images/'+item.exercise_image }}
    shouldPlay={this.state.shouldPlay}
    resizeMode="contain"
    style={{ width, height: height * 0.30, borderWidth: 1, borderColor: '#FFF', borderBottomWidth: 0, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}
    isMuted={this.state.mute}
  />

<Grid>
<Row style={{height: 110}}>

<Col style={styles.col_exercise}>
<MaterialIcons name="format-list-bulleted" style={styles.icon_exercise} />
<Text style={styles.titlecol_exercise}>{Strings.ST97}</Text>
<Text>{item.exercise_sets}</Text>
</Col>

<Col style={styles.col_exercise}> 
<MaterialIcons name="autorenew" style={styles.icon_exercise} />

<Text style={styles.titlecol_exercise}>{Strings.ST98}</Text>
<Text>{item.exercise_reps}</Text>
</Col>

<Col style={styles.col_exercise}>
<MaterialIcons name="timer" style={styles.icon_exercise} />

<Text style={styles.titlecol_exercise}>{Strings.ST99}</Text>
<Text>{item.exercise_rest}</Text>
</Col>

</Row>

</Grid>

<View style={{marginHorizontal: 16, marginTop: 40}}>
<Collapse isCollapsed={false} style={{marginBottom: 8}}>
    <CollapseHeader>
      <View style={styles.collapseheader}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST112.toUpperCase()}</Text>
        <MaterialIcons name='remove' style={styles.collapseicon} />
      </View>
    </CollapseHeader>
    <CollapseBody>
   
      <View style={{padding: 20}}>
      <Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST111}</Text>
      <Text>{item.exercise_title}</Text>
      <View style={{padding: 8}} />
      <Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST17}</Text>
      <Text>{item.level_title}</Text>
      <View style={{padding: 8}} />
      <Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST100}</Text>
      <Text>{item.equipment_title}</Text>
      <View style={{padding: 8}} />
      <Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST101}</Text>
      <FlatList data={ this.state.dataSource } refreshing="false" renderItem={({item}) => <Text>{item.bodypart_title}</Text> } keyExtractor={(item, index) => index.toString()} />
      </View>

    </CollapseBody>
</Collapse>


<Collapse isCollapsed={false} style={{marginBottom: 8}}>
    <CollapseHeader>
      <View style={styles.collapseheader}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST113.toUpperCase()}</Text>
        <MaterialIcons name='remove' style={styles.collapseicon} />
      </View>
    </CollapseHeader>
    <CollapseBody>
   
      <View style={{padding: 20}}>
      <HTML html={item.exercise_instructions} onLinkPress={(evt, href) => { Linking.openURL(href); }} />
      </View>

    </CollapseBody>
</Collapse>

<Collapse isCollapsed={false}>
    <CollapseHeader>
      <View style={styles.collapseheader}>
        <Text style={{fontWeight: 'bold'}}>{Strings.ST114.toUpperCase()}</Text>
        <MaterialIcons name='remove' style={styles.collapseicon} />
      </View>
    </CollapseHeader>
    <CollapseBody>
   
      <View style={{padding: 20}}>
      <HTML html={item.exercise_tips} onLinkPress={(evt, href) => { Linking.openURL(href); }} />
      </View>

    </CollapseBody>
</Collapse>

</View>

</ScrollView>

<Footer style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center', paddingBottom: 12, backgroundColor: '#fff', borderColor: '#fff'}}>
<Grid>
<Row>
<Col style={styles.playCol_exercise}>
{this.state.shouldPlay ? (
  <Button iconLeft rounded block onPress={this.handlePlayAndPause} style={styles.playButton}>
  <MaterialIcons name='pause-circle-filled' style={{fontSize: 24, color: '#fff'}} />
  <Text style={{fontWeight: 'bold'}}>{Strings.ST103.toUpperCase()}</Text>
</Button>
  ) : (
  <Button iconLeft rounded block onPress={this.handlePlayAndPause} style={styles.playButton}>
  <MaterialIcons name='play-circle-filled' style={{fontSize: 24, color: '#fff'}} />
  <Text style={{fontWeight: 'bold'}}>{Strings.ST102.toUpperCase()}</Text>
</Button>
  )}

</Col>
</Row>

</Grid>
</Footer>

</Container>
    );
  }
}

