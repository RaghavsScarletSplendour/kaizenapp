import PropTypes from 'prop-types';
import React, {Component} from 'react';
var styles = require('../../assets/files/Styles');
import {NavigationActions} from 'react-navigation';
import {Dimensions, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Thumbnail, Button, Body, Right, Switch } from 'native-base';
var {height, width} = Dimensions.get('window');

import Strings from '../utils/Strings';
import ColorsApp from '../utils/ColorsApp';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container_menu}>
          <View style={styles.sideMenu}>
<Image
      source={require('../../assets/images/logo_dark.png')}
      style={{width: 140, height: 140}}
      resizeMode='contain'/>
</View>

        <ScrollView>

              <ListItem style={styles.item_menu} onPress={this.navigateToScreen('WorkoutsScreen')} icon>
            <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="calendar" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST1.toUpperCase()}</Text>
              </Body>

            </ListItem>

                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('ExercisesScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="dumbbell" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST2.toUpperCase()}</Text>
              </Body>

            </ListItem>

                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('DietsScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="silverware" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST3.toUpperCase()}</Text>
              </Body>

            </ListItem>


                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('PostsScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="library-books" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST4.toUpperCase()}</Text>
              </Body>

            </ListItem>

                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('QuotesScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="format-quote-close" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST5.toUpperCase()}</Text>
              </Body>

            </ListItem>

                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('CalculatorScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="calculator" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST105.toUpperCase()}</Text>
              </Body>

            </ListItem>

                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('ProfileScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="account" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST6.toUpperCase()}</Text>
              </Body>

            </ListItem>

                <ListItem style={styles.item_menu} onPress={this.navigateToScreen('SettingsScreen')} icon>
                        <Left style={{borderBottomWidth: 0}}>
                <MaterialCommunityIcons name="bookmark-minus" style={styles.iconSidemenu}/>
            </Left>
            <Body style={{borderBottomWidth: 0}}>
                <Text style={styles.text_menu}>{Strings.ST7.toUpperCase()}</Text>
              </Body>

            </ListItem>

 
        </ScrollView>

        <TouchableOpacity onPress={this.navigateToScreen('LogoutScreen')} activeOpacity={1}>
        <View style={styles.footer_menu}>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>{Strings.ST8.toUpperCase()}</Text>
        </View>
        </TouchableOpacity>


      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;