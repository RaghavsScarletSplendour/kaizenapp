import React, {Component} from 'react';
import{ Image, View, Text, Dimensions} from 'react-native';
import Strings from '../utils/Strings';
var {height, width} = Dimensions.get('window');

class CommentEmpty extends React.Component {

  render () {

    return (

<View style={{alignItems: 'center', justifyContent: 'center', height: height*0.85}}>
      <Text style={{fontSize: 16, marginBottom: 8, color: '#b5b5b5'}}>{Strings.ST86.toUpperCase()}</Text>
</View>

    )
  }

}

export default CommentEmpty;