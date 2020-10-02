import React, {Component} from 'react';
import{ Image, View, Text} from 'react-native';
import Strings from '../utils/Strings';

export default class ListEmpty extends Component {
	constructor (props) {
		super(props);
		const {title} = props;
		this.state = {
			title: title
		};
	}

  render () {

		const {title} = this.state;

    return (

<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 14, marginVertical: 8, color: '#b5b5b5'}}>{title.toUpperCase()}</Text>
</View>

    )
  }

}
