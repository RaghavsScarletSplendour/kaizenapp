import React, {Component} from 'react';
import * as firebase from 'firebase';
import {View, Text} from "react-native";

export default class CommentsCount extends Component {
	constructor (props) {
		super(props);
		this.state = {
			rating: 0
		};
		const {postId} = props;
		this.commentsRef = firebase.database().ref(`postComments/${postId}`);
	}

	componentDidMount () {

		this.commentsRef.on("child_added", snapshot => {
			this.commentsRef.on("value", snap => {
				let comments = [];
				snap.forEach(row => {
					comments.push(parseInt(row.val().rating));
				});

				this.setState({
					rating: comments.length
				});

				/*this.refs.rating.setCurrentRating(
					comments.reduce((previous, current) => previous + current, 0) / comments.length
				);*/
			})
		});
	}

	render () {
		const {rating} = this.state;
		return (
      <Text>({rating})</Text>
		)
	}
}