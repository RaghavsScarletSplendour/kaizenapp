import React, {Component} from 'react';
import {View, TouchableOpacity} from "react-native";
import {Form, Item, Input, Label, Textarea, Button, Text } from 'native-base';
import * as firebase from 'firebase';
import Strings from '../utils/Strings';
import Rating from 'react-native-star-rating';

var styles = require('../../assets/files/Styles');

export default class PostForm extends Component {
	constructor() {
		super();
		var user = firebase.auth().currentUser;
		var date = new Date().toString();
		this.state = {
			comment: {
				comment: '',
				rating: 5,
				user: user.displayName,
				date: date
			}
		};
	}

	randomFunction() {
        this.props.closeModal();
    }

	addComment () {

		var validate = this.state.comment;
		var comment = this.state.comment.comment;

		if(comment !== '') {
			let data = {};
			let comment = Object.assign({}, validate);
			let ref = firebase.database().ref().child('postComments');
			const key = ref.push().key;

			data[`${this.props.postId}/${key}`] = comment;

			ref.update(data).then(() => {
				this.setState((prevState, props) => {

					var user = firebase.auth().currentUser;
					var date = new Date().toString();
					return {
						comment: {
							comment: '',
							rating: 5,
							user: user.displayName,
							date: date

						}
					}
				});

				this.randomFunction();

			})
		}
	}

	onChangeRating (value) {
		this.setState({
			comment: {
				comment: this.state.comment.comment,
				rating: value,
				user: this.state.comment.user,
				date: this.state.comment.date,
			}}
			);
	}

	onChangeMessage (value) {
		this.setState({
			comment: {
				comment: value,
				rating: this.state.comment.rating,
				user: this.state.comment.user,
				date: this.state.comment.date,
			}}
			);
	}

	render () {

const {rating} = this.state.comment;

		return (
					<View>

<Form style={{marginBottom: 35, marginTop: 10}}>

            <Rating
			ref="input"
        	disabled={false}
        	maxStars={5}
        	emptyStar={'ios-star-outline'}
        	fullStar={'ios-star'}
        	halfStar={'ios-star-half'}
        	iconSet={'Ionicons'}
        	rating={rating}
        	containerStyle={{width: 160}}
        	starSize={26}
        	selectedStar={value => this.onChangeRating(value)}
        	emptyStarColor={'#f1c40f'}
            fullStarColor={'#f1c40f'}
      		/>

      		<Textarea rowSpan={3} onChangeText={value => this.onChangeMessage(value)} style={{borderWidth: 1, borderColor: 'rgba(0,0,0,0.2)', marginTop: 30, marginBottom: 0, borderRadius: 6}}/>

</Form>

				<TouchableOpacity onPress={this.addComment.bind(this)} style={styles.postCommentButton}>
				<Text style={styles.postCommentText}>{Strings.ST110.toUpperCase()}</Text>
				</TouchableOpacity>

				</View>


		)
	}
}