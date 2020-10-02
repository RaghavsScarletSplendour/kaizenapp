import React, {Component} from 'react';
import{TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import PostComments from '../forms/PostComments';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modalbox';
import PostForm from '../forms/PostForm';

import Strings from '../utils/Strings';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class CommentsByPost extends Component {

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
    title: `${Strings.ST84.toUpperCase()}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>,
    headerRight: <Ionicons name={'md-add'} onPress={() => state.params.handleSave()} style={styles.arrowbackiconRight}/>,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      isOpen: false,
      isDisabled: false,
      swipeToClose: false,
      sliderValue: 0.3
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleSave: () => this.saveDetails() })
  }

  saveDetails() {
    this.refs.modal3.open();
  }

  closeModal(){
    this.refs.modal3.close();

  }

  render () {

    const { params } = this.props.navigation.state;
    const postId = params ? params.postId : null;

    return (

<Container style={styles.background_general}>
<ScrollView>

<View style={{marginHorizontal: 5}}>

<PostComments postId={postId} />

</View>

</ScrollView>

<Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} swipeArea={20} swipeToClose={this.state.swipeToClose} onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState} isDisabled={this.state.isDisabled} coverScreen={true}>
<View style={{marginTop: 8, marginBottom: 8}}>
<Text style={styles.commentTitle}>{Strings.ST83.toUpperCase()}</Text>
<PostForm postId={postId} closeModal={() => this.closeModal()}/>
</View>
</Modal>

</Container>

    )
  }

}