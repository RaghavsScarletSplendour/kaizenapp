import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import StarRating from 'react-native-star-rating';

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import * as firebase from 'firebase';

export default class CommentList extends Component {
	render () {
		const {comment} = this.props;
    var user = firebase.auth().currentUser;

		return (

			<ListItem style={{marginHorizontal: 15}}>

              <Body style={{marginTop: 0}}>
      <StarRating
          disabled={true}
          maxStars={5}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          rating={comment.rating}
          containerStyle={{width: 80, marginLeft: 10, marginBottom: 5}}
          starSize={15}
            emptyStarColor={'#f1c40f'}
            fullStarColor={'#f1c40f'}
          />

              <Text note numberOfLines={5} style={{color: '#808080'}}>{comment.comment}</Text>
              </Body>
              <Right>
                <Text note style={{color: '#808080'}}>{comment.user}</Text>
              </Right>
            </ListItem>

		)
	}
}