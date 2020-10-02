 import React, {Component} from 'react';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Tab, Tabs } from 'native-base';
import { ImageBackground, Dimensions, View, TouchableOpacity, SafeAreaView, ScrollView, FlatList, StatusBar, AsyncStorage, Linking, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { LinearGradient } from 'expo-linear-gradient';
import PostRating from '../components/PostRating';
import PostForm from '../forms/PostForm';
import CommentsCount from '../forms/CommentsCount';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as firebase from 'firebase';
import ConfigApp from '../utils/ConfigApp';
import ColorsApp from '../utils/ColorsApp';
import Strings from '../utils/Strings';
import BannerAd from '../components/BannerAd';
import HTML from 'react-native-render-html';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Modal from 'react-native-modalbox';
import Toast from 'react-native-root-toast';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class PostDetails extends Component {
   static navigationOptions = {
  headerShown: false
};

  constructor(props) {
    super(props)
    const {params} = props.navigation.state;
    this.state = {
      item: params.item,
      isLoading: true,
      isVisible: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: false,
      sliderValue: 0.3
    };
  }

savePosts = async (post_id, post_title, post_image, post_date, tag_title, post_description, uid) => {
    try {
        let post = {
            userId: uid,
            post_id: post_id,
            post_title: post_title,
            post_image: post_image,
            post_date: post_date,
            tag_title: tag_title,
            post_description: post_description

        }

        const posts = await AsyncStorage.getItem('posts') || '[]';
        let postsFav = JSON.parse(posts);
        postsItems = postsFav.filter(function(e){ return e.post_id !== post_id && e.userId == uid })
        postsItems.push(post);
        AsyncStorage.setItem('posts', JSON.stringify(postsItems)).then(() => {

            Toast.show(Strings.ST53.toUpperCase(), {duration: Toast.durations.SHORT, position: Toast.positions.CENTER, shadow: false, animation: true})
           

        });
        
    } catch(error) {

    }
};

  closeModal(){
    this.refs.modal3.close();

  }

CommentsByPost=(post_id)=>
{
      this.props.navigation.navigate('PostCommentsScreen', { postId: post_id});    
}

  render() {

    const {item} = this.state;  
    var user = firebase.auth().currentUser;

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
    <Text numberOfLines={1} style={{fontSize: 16, color: '#fff', fontWeight: 'bold' }}>{Strings.ST130.toUpperCase()}</Text>
    </Col>
    <Col style={{alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
    <TouchableOpacity onPress={this.savePosts.bind(this, item.post_id, item.post_title, item.post_image, item.post_date, item.tag_title, item.post_description, user.uid)}>
<Ionicons name="md-star" style={{fontSize: 27, color: '#FFFFFF'}}/>
</TouchableOpacity>
    </Col>
</Grid>
</LinearGradient>

<ScrollView>
<KeyboardAwareScrollView>

<ImageBackground source={{uri: ConfigApp.URL+'images/'+item.post_image}} style={styles.background_diets}>
    <LinearGradient colors={['rgba(0,0,0,0.10)','rgba(0,0,0,0.45)', 'rgba(0,0,0,0.85)']} style={styles.gradient_diets}>

        <Text style={styles.postDetail_tag}>{item.tag_title.toUpperCase()}</Text>
        <Text style={styles.postDetail_title}>{item.post_title}</Text>   
        <PostRating postId={item.post_id}/>
        <View style={{height: 10}}></View>

    </LinearGradient>
</ImageBackground>

<View style={{backgroundColor: ColorsApp.PRIMARY, width: width, paddingVertical: 5}}>

           <ListItem icon style={{borderBottomWidth: 0}}>
            <Body style={{borderBottomWidth: 0}}>
            <TouchableOpacity onPress={this.CommentsByPost.bind(this, item.post_id)}>
              <Text style={{fontSize: 14, fontWeight: '300', color: '#fff' }}>{Strings.ST84.toUpperCase()} <CommentsCount postId={item.post_id} /></Text>
            </TouchableOpacity>
            </Body>
            <Right style={{borderBottomWidth: 0}}>
                  <TouchableOpacity onPress={() => this.refs.modal3.open()} activeOpacity={1} style={{justifyContent: 'center', flexDirection: 'row'  }}>
                  <Text style={{fontSize: 14, color: '#fff', fontWeight: '300', paddingRight: 6}}> {Strings.ST83.toUpperCase()}</Text>
                  <Ionicons active name="ios-add-circle" style={{ fontSize: 16, color: '#fff'}} />
                  </TouchableOpacity>
            </Right>
          </ListItem>

</View>

<View style={{margin: 15, marginBottom: 5}}>

<HTML html={item.post_description} onLinkPress={(evt, href) => { Linking.openURL(href); }} />

<View style={{marginTop: 15, height: 1, backgroundColor: '#eee'}}></View>

<View style={{marginTop: 15, paddingBottom: 15, alignContent: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>

<Ionicons active name="md-calendar" style={{ fontSize: 14, color: '#666', paddingRight: 10}} />
<Text style={styles.postDetail_date}>{item.post_date.toUpperCase()}</Text>

<Ionicons active name="md-folder-open" style={{ fontSize: 14, color: '#666', paddingRight: 10}} />
<Text style={styles.postDetail_date}>{item.tag_title.toUpperCase()}</Text>

</View>

<View style={{height: 1, backgroundColor: '#eee'}}></View>

</View>



<Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} swipeArea={20} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState} isDisabled={this.state.isDisabled} coverScreen={true}>
<View style={{marginTop: 8, marginBottom: 8}}>
<Text style={styles.commentTitle}>{Strings.ST83.toUpperCase()}</Text>
<PostForm postId={item.post_id} closeModal={() => this.closeModal()}/>
</View>
</Modal>

<View style={{height: 100}}/>


</KeyboardAwareScrollView>

</ScrollView>


<BannerAd/>

</Container>
    );
  }
}

