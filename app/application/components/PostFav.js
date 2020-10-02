import React, {Component} from 'react';
import * as firebase from 'firebase';
import { NavigationActions, StackNavigator, withNavigation} from 'react-navigation';
import{AsyncStorage, TouchableOpacity, Dimensions, View, Image, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Container, Body, Thumbnail, Text, List, Right, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import ListEmpty from './ListEmpty';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Strings from '../utils/Strings';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

class PostFav extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      posts: []
    }

  }

_isMounted = false;


  componentDidMount () {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchPosts();
     }
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

  renderFooterPosts = () => {
  const posts = this.state.posts
  if (posts.length != 0) return null;


  return (
    <ListEmpty title={Strings.ST67}/>
   );
};

removePost = async (post_id) => {
try {

var user = firebase.auth().currentUser;
uid = user.uid;

const posts = await AsyncStorage.getItem('posts');
let postsFav = JSON.parse(posts);
postsItems = postsFav.filter(function(e){ return e.post_id !== post_id && e.userId == uid })

await AsyncStorage.setItem('posts', JSON.stringify(postsItems));

this.setState({ 
...this.state, 
posts: postsItems || [] 
}); 

} catch(error) {

}}; 

  render () {

    return (

 <View style={{margin: 5, marginTop: 8}}> 

<List>


<FlatList
          data={this.state.posts}
          refreshing="true"
          renderItem={({item, index}) =>

<ListItem style={{paddingLeft: 0, marginLeft: 0, backgroundColor:'#FFF', opacity: 1, borderColor: 'rgba(0,0,0,0.05)', borderBottomWidth: 0}}  onPress={() => this.PostDetails(item)} >
              <Thumbnail square size={80} source={{ uri: ConfigApp.URL+'images/'+item.post_image }} style={{paddingLeft: 10, marginLeft: 10, borderRadius: 4}} />
              <Body style={{paddingLeft: 0, marginLeft: 0}}>
                <Text numberOfLines={2} style={{fontSize: 13, marginBottom: 3, fontWeight: 'bold'}}>
                {item.post_title.toUpperCase()}
                </Text>
              </Body>
              <Right>
              <TouchableOpacity onPress={this.removePost.bind(this, item.post_id)} activeOpacity={1}>
                <Ionicons name="md-close" style={{fontSize: 19, backgroundColor: '#fbfbfc', borderColor: '#eee', borderWidth: 1, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10}}/>
              </TouchableOpacity>

              </Right>
            </ListItem>

          
}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={this.renderFooterPosts}


        /> 

</List>

  </View> 

    )
  }

    async fetchPosts () {
      var user = firebase.auth().currentUser;
      uid = user.uid;

      let postsJSON= await AsyncStorage.getItem('posts');
      let postsFav = JSON.parse(postsJSON);
      postsItems = postsFav.filter(function(e){
            return e.userId == uid
        })
      const postsArray = postsItems || [];
      this.setState({
        ...this.state,
        posts: postsArray
      });
  }

}

export default withNavigation(PostFav);
