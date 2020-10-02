import React, {Component} from 'react';
import{ Image, View, Text} from 'react-native';
import Strings from '../utils/Strings';

class RestDay extends React.Component {

  render () {

    return (

<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
      <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 8}}>{Strings.ST71.toUpperCase()}</Text>
      <Text style={{fontSize: 16, marginBottom: 8, color: '#b5b5b5'}}>{Strings.ST72.toUpperCase()}</Text>
</View>

    )
  }

}

export default RestDay;
