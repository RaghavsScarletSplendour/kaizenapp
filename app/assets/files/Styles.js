'use strict';

import {Dimensions, Platform} from "react-native";
import ColorsApp from '../../application/utils/ColorsApp';

var React = require('react-native');

var { StyleSheet } = React;

var {height, width} = Dimensions.get('window');

export const PrimaryColor = ColorsApp.PRIMARY;
export const SecondaryColor = ColorsApp.SECOND;
export const TertiaryColor = ColorsApp.TERTIARY;


module.exports = StyleSheet.create({

//////////////////////// GENERAL

collapseheader:{
  backgroundColor: '#fbfbfc',
  paddingVertical: 15,
  paddingHorizontal: 15,
  borderLeftWidth: 3,
  borderColor: PrimaryColor,
  justifyContent: 'center'
},

collapseicon:{
  fontSize: 24,
  color: PrimaryColor,
  position: 'absolute',
  right: 10
},

buttonstyle1:{
  backgroundColor: '#fbfbfc',
  paddingVertical: 15,
  paddingHorizontal: 15,
  borderLeftWidth: 3,
  borderColor: PrimaryColor,
  justifyContent: 'center',
  marginBottom: 15
},

buttonstyle1icon:{
  fontSize: 24,
  color: PrimaryColor,
  position: 'absolute',
  right: 10
},

buttonstyle2:{
  backgroundColor: '#fbfbfc',
  paddingVertical: 20,
  paddingHorizontal: 15,
  justifyContent: 'center',
    borderLeftWidth: 3,
  borderColor: PrimaryColor,
  paddingRight: 24,
  marginBottom: 15
},

buttonstyle2icon:{
  fontSize: 24,
  color: PrimaryColor,
  position: 'absolute',
  right: 10
},

socialicon:{
fontSize: 46,
width: 50,
height: 50,
color: PrimaryColor,

},

arrowbackicon:{
color: '#000',
  fontSize: 27,
  marginLeft: 30
},

arrowbackiconRight:{
color: '#000',
  fontSize: 27,
  marginRight: 30
},


whitecolor:{
color: '#ffffff',
},

primarycolor:{
color: PrimaryColor,
},

primarybackground:{
backgroundColor: PrimaryColor,
},

headerStyle:{
      backgroundColor: '#ffffff',
      shadowOpacity: 0,
      borderBottomWidth: 0,
      elevation: 0,
},


inputhome:{
  backgroundColor: '#ffffff',
  borderTopLeftRadius: 50,
  borderBottomLeftRadius: 50,
  fontSize: 14,
  paddingLeft: 20,
  borderWidth: 0
},

inputBgicon:{
  backgroundColor: TertiaryColor,
  width: 52,
  height: ( Platform.OS === 'ios' ) ? 51 : 50,
  borderTopRightRadius: 50,
  borderBottomRightRadius: 50,
  marginTop: ( Platform.OS === 'ios' ) ? 3 : 1,
  alignItems: 'center',
  justifyContent: 'center'  
},

alert:{
  borderLeftWidth: 2,
  borderColor: TertiaryColor,
  padding: 10,
  backgroundColor: '#f7f7f7',
  borderRadius: 4

},

textalert:{
  color: TertiaryColor,
  fontSize: 14
},

tabBarUnderline:{
backgroundColor: PrimaryColor,
},

buyButton:{
  backgroundColor: PrimaryColor,
  padding: 15,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 10,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
},
starcolor:{
  color: '#f1c40f'
},

buyButton2:{
  backgroundColor: PrimaryColor,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 10,
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
},

titlePayment:{
  margin: 5,
  paddingTop: 10,
  paddingBottom: 10,
  alignContent: 'center',
  alignItems: 'center',
  backgroundColor: '#efefef',
  borderRadius: 10
},

readmore:{
backgroundColor: '#fff',
alignItems: 'center',
alignContent: 'center',
justifyContent: 'center',
width: 50,
height: 50,
position: 'absolute',
right: 15,
borderRadius: 50,
top: 30,
zIndex: 99999
},

readmoreIcon:{
  fontSize: 22,
  color: PrimaryColor
},

categoryOffer:{
color: 'rgba(255,255,255,0.5)',
fontSize: 12,
marginBottom: 8
},

secondcolor:{
color: PrimaryColor,
},

padding_general:{
padding: 20,
backgroundColor: '#FFF'
},

background_general:{
backgroundColor: '#FFF'
},

card_general:{
width: width*0.95,
height: height*0.43,
borderRadius: 8
},

buttonCard:{
paddingHorizontal: 10,
paddingVertical: 3,
backgroundColor: PrimaryColor,
borderRadius: 5,
marginTop: 5
},

socialIcon:{
  fontSize: 46,
  width: 50,
  height: 50,
  color: PrimaryColor
},

gradient_general:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: '100%',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 8
},

title_general:{
color: '#FFF',
fontSize: 24,
fontWeight: 'bold',
marginBottom: 5
},

subtitle_general:{
color: PrimaryColor,
fontSize: 14,
fontWeight: 'bold'
},

touchBookmark:{
backgroundColor: PrimaryColor,
width: 50,
height: 50,
position: 'absolute',
right: 15,
bottom: -25,
borderRadius: 50,
alignItems: 'center',
justifyContent: 'center'
},

touchBookmarkTran:{
backgroundColor: 'rgba(0,0,0,0.4)',
width: 50,
height: 50,
position: 'absolute',
right: 15,
top: 10,
borderRadius: 50,
alignItems: 'center',
justifyContent: 'center'
},


pickerinput:{
  width: width * .9,
  borderWidth: 1,
justifyContent: 'center',
  height: 55,
  borderColor: 'rgba(0,0,0,0.2)',
  borderRadius: 50,
  marginBottom: 15
},

pickericon:{
fontSize: 22,
paddingRight: 17,
paddingTop: 3,
color: PrimaryColor
},

//////////////////////// DETAILS

label_details:{
color: PrimaryColor,
fontSize: 15,
fontWeight: 'bold',
marginBottom: 3
},


//////////////////////// QUOTES

quote:{
borderLeftWidth: 5,
borderColor: PrimaryColor,
marginHorizontal: 20,
marginVertical: 8,
backgroundColor: '#fbfbfc',
minHeight: 90,
alignItems: 'flex-start',
justifyContent: 'center',
paddingHorizontal: 20,
paddingVertical: 20
},

textquote:{
fontSize: 15,
fontWeight: 'bold'
},

copyquote:{
fontSize: 13,
fontWeight: 'bold'
},

//////////////////////// CATEGORIES

title_categories:{
color: '#FFF',
fontSize: 14,
fontWeight: 'bold'
},

title_categories_background:{
  width: width*0.95,
  alignItems: 'center',
  padding: 15,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8
},

title_categories_border:{
height: 2,
backgroundColor: PrimaryColor,
width: 50
},

gradient_categories:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: height*0.21,
alignItems: 'center',
justifyContent: 'flex-end',
borderRadius: 8
},

background_categories:{
width: width*0.95,
height: height*0.21,
alignItems: 'center',
justifyContent: 'flex-end',
marginBottom: 10,
borderRadius: 8
},

gradient_2columns:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: height /4.50,
width : null, 
alignItems: 'center',
justifyContent: 'flex-end',
borderRadius: 8,
},

title_2columns_background:{
  width: null,
  alignSelf: 'stretch',
  alignItems: 'center',
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  padding: 15
},

background_2columns:{
height: height /4.50,
width : null,
borderRadius: 8,
alignItems: 'center',
justifyContent: 'flex-end',
},

background_exercises:{
height: height /4.50,
width : null,
borderRadius: 8,
alignItems: 'flex-start',
justifyContent: 'flex-end',
},

//////////////////////// POSTS


title_posts_categories:{
color: '#FFF',
fontSize: 13,
padding: 10,
fontWeight: 'bold',
paddingTop: 2
},

date_posts:{
color: 'rgba(255,255,255,0.50)',
fontSize: 11,
padding: 10,
paddingBottom: 0,
fontWeight: 'bold'
},

gradient_posts_2columns:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: height * 0.15,
alignItems: 'flex-start',
justifyContent: 'flex-end',
borderRadius: 8
},

background_posts_2columns:{
width: width * 0.46,
height: height * 0.15,
alignItems: 'flex-start',
justifyContent: 'flex-end',
},

postDetail_background:{
width: width,
height: height * 0.25,
alignItems: 'center',
justifyContent: 'center',
},

postDetail_gradient:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: height * 0.10,
alignItems: 'flex-start',
justifyContent: 'flex-end'
},

postDetail_title:{
  fontSize: 20,
  color: '#FFFFFF',
  fontWeight: 'bold',
  lineHeight: 25,
},

postDetail_tag:{
  fontSize: 15,
  fontWeight: 'bold',
  color: PrimaryColor,
  lineHeight: 30,
},

postDetail_date:{
  fontSize: 12,
  fontWeight: '300',
  color: '#666',
  paddingRight: 14
},

postCommentButton:{
  backgroundColor: PrimaryColor,
  borderRadius: 6,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
},

postCommentText:{
  color: '#FFFFFF',
  fontSize: 14,
  fontWeight: 'bold',

},

commentTitle:{
  color: '#000',
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 10,
},

showcomments:{
width: width * 0.93,
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#666',
marginTop: 12,
height: 40,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
},
borderRadius: 6,
alignItems: 'center',
alignContent: 'center',
justifyContent: 'center',
},


//////////////////////// DIETS

gridDietImage:{
  width: 50,
  height: 50,
  marginBottom: 15,
  marginTop: 20
},

gridDietText:{
  color: PrimaryColor,
  fontSize: 14,
  fontWeight: 'bold'
},

gridDietCol:{
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
height: height*0.19
},

title_diets:{
color: '#FFF',
fontSize: 20,
marginBottom: 15,
fontWeight: 'bold' 
},

title_diets_categories:{
color: '#FFF',
fontSize: 14,
padding: 10,
fontWeight: 'bold'
},

category_diets:{
color: PrimaryColor,
fontSize: 14,
backgroundColor: 'transparent',
fontWeight: 'bold',
marginBottom: 5,
},

subcategory_diets:{
color: '#FFF',
fontSize: 15,
opacity: 0.5,
marginBottom: 10,
},

gradient_ddiet:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: height * 0.35,
paddingHorizontal: 20,
paddingVertical: 20,
alignItems: 'flex-start',
justifyContent: 'flex-end',
},


gradient_diets:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: height * 0.39,
alignItems: 'flex-start',
justifyContent: 'flex-end'
},

background_diets:{
width: width,
height: height * 0.39,
alignItems: 'flex-start',
justifyContent: 'flex-end',
padding: 15 
},

gradient_diets_2columns:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: height * 0.15,
alignItems: 'flex-start',
justifyContent: 'flex-end'
},

background_diets_2columns:{
width: width * 0.46,
height: height * 0.15,
alignItems: 'flex-start',
justifyContent: 'flex-end',
},

background_diets_col:{
width: width,
height: height * 0.25,
alignItems: 'center',
justifyContent: 'center',
},

info_diets:{
  backgroundColor: 'rgba(0,0,0,0.70)',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 6,
  paddingBottom: 11,
  paddingTop: 11
},

title_diets_detail:{
  fontSize: 22,
  fontWeight: 'normal',
  lineHeight: 30,
},

gtitle_diets_detail:{
  fontSize: 16,
  fontWeight: 'bold',
},

description_diets_detail:{
  fontSize: 14,
},

col_diets: {
height: 70,
alignItems: 'center',
justifyContent: 'center'

},

icon_dietscol:{
width: 34,
height: 34,
marginBottom: 10
},

titlecol_diets: {
fontSize: 15,
marginTop: 8,

},

titlecol1_diets: {
fontWeight: 'bold',
fontSize: 14,

},

headerProfile:{
  width: width,
  height: height * 0.12,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: PrimaryColor,
  marginTop: -1
},

nameProfile:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 6
},

tabs: {
backgroundColor: PrimaryColor,
},

activetabs: {
backgroundColor: PrimaryColor,
},

tabs_text: {
color: 'rgba(255,255,255,0.4)',
fontWeight: 'normal',
fontSize: 13
},

activetabs_text: {
color: '#fff',
fontWeight: 'bold',
fontSize: 13
},

tabs_2: {
backgroundColor: '#fafafa',

},

activetabs_2: {
backgroundColor: '#fafafa',

},

tabs_text_2: {
color: 'rgba(0,0,0,0.3)',
fontWeight: 'normal'
},

activetabs_text_2: {
color: TertiaryColor,
fontWeight: 'normal'
},

//////////////////////// CARDS

title_card:{
color: '#FFF',
fontSize: 16,
marginBottom: 6,
fontWeight: 'bold' 
},

category_card:{
marginBottom: 6,
color: PrimaryColor,
fontWeight: 'bold',
fontSize: 14,
},

category_card_2:{
color: '#FFF',
opacity: 0.8,
marginBottom: 3,
fontSize: 14
},

subcategory_card:{
color: PrimaryColor,
fontSize: 14,

},

price:{
color: '#f1c40f',
fontSize: 14,
marginRight: 5,
fontWeight: 'bold'
},

oldprice:{
color: '#FFF',
fontSize: 12,
opacity: 0.8,
textDecorationLine: 'line-through'
},

detailPrice:{
  fontWeight: 'bold',
  fontSize: 19,
  marginBottom: 3,
},

detailOldPrice:{
  fontSize: 15,
  color: '#888888'
},

detailPrice2:{
  fontWeight: 'bold',
  fontSize: 19,
  color: PrimaryColor
},

totalprice:{
  fontSize: 13,
  marginBottom: 3,
  color: '#fff'
},


savePrice:{
  marginBottom: 5,
  marginTop: 5,
  backgroundColor: '#ddedd1',
  alignSelf: 'flex-start',
  padding: 5,
  paddingLeft: 7,
  paddingRight: 7,
  borderRadius: 5

},

saveTextPrice:{
  fontSize: 15,
  color: '#367806',

},

saveHomePrice:{
  marginBottom: 5,
  marginTop: 5,
  backgroundColor: '#ddedd1',
  alignSelf: 'flex-start',
  padding: 5,
  paddingLeft: 7,
  paddingRight: 7,
  borderRadius: 5

},

saveTextHomePrice:{
  fontSize: 13,
  color: '#367806',

},

gradient_card:{
position: 'absolute',
padding:15,
left: 0,
right: 0,
bottom: 0,
height: height * 0.23,
alignItems: 'flex-start',
justifyContent: 'flex-end',
borderRadius: 8
},

background_card:{
width: width*0.95,
height: height * 0.23,
alignItems: 'flex-start',
justifyContent: 'flex-end',
padding: 15,
marginBottom: 10
},

//////////////////////// WORKOUT DETAILS

title_workout:{
color: '#FFF',
fontSize: 18,
marginBottom: 5,
fontWeight: 'bold',
paddingTop: 40
},

category_workout:{
color: PrimaryColor,
fontSize: 16,
fontWeight: 'bold' 

},

gradient_workout:{
position: 'absolute',
left: 0,
right: 0,
bottom: 0,
height: height * 0.35,
alignItems: 'center',
justifyContent: 'center'
},

background_workout:{
width: width,
height: height * 0.35,
alignItems: 'center',
justifyContent: 'center',
},

col_workout: {
height: 70,
alignItems: 'center',
justifyContent: 'center'

},

titlecol_workout: {
fontWeight: 'bold',
fontSize: 16,
color: '#fff',
marginBottom: 3

},

icon_workout:{

fontSize: 22,
color: PrimaryColor,
position: 'absolute',
right: 15

},

textButton_workout:{
color: '#000',
fontSize: 15,
fontWeight: 'bold',

},

button_workout:{
backgroundColor: '#fbfbfc',
justifyContent: "center",
alignItems: 'flex-start',
height: 50,
paddingHorizontal: 20,
elevation: 0,
shadowOpacity: 0,
marginVertical: 8,
marginHorizontal: 15,
borderLeftWidth: 2,
borderColor: PrimaryColor,
 },

//////////////////////// EXERCISE

footer_exercise:{
backgroundColor: '#fff',
borderColor: '#fff',
marginTop: 10,
marginBottom: 5,
elevation: 0,
shadowOpacity: 0,
 },

start_exercise:{
backgroundColor: '#fff',
borderColor: PrimaryColor,
borderWidth: 1,
elevation: 0,
shadowOpacity: 0,
borderRadius: 5,
width: width * 0.9
 },

 textStart_exercise:{
color: PrimaryColor,
fontSize: 16,
fontWeight: 'bold'
 },

 col_exercise:{
alignItems: 'center',
justifyContent: 'center'
 },

 titlecol_exercise: {
fontWeight: 'bold',
marginTop: 2,
marginBottom: 6,
fontSize: 16,

},

title_exercise_background:{
  width: width,
  alignItems: 'flex-start',
  padding: 15
},

subtitle_exercise:{
color: PrimaryColor,
},

bannerAd:{
  position: 'absolute',
  bottom: 25,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'transparent',
  width: width
},

bannerAdLight:{
  position: 'absolute',
  bottom: 10,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundColor: 'transparent',
  width: width
},

icon_get:{

fontSize: 14,
fontWeight: 'bold',
color: PrimaryColor

},

icon_exercise:{
fontSize: 40,
color: PrimaryColor,
marginTop: 10,
marginBottom: 7
},

icon_videoexercise:{
width: 50, height: 50,
marginTop: 10,
marginBottom: 7
},

playButton:{
  backgroundColor: PrimaryColor,
  elevation: 0,
  shadowOpacity: 0
},

playCol_exercise:{
alignItems: 'center',
justifyContent: 'center',
margin: 15
 },

//////////////////////// START

socialFacebook:{
minWidth: 250,
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#fff',
borderRadius: 100,
marginBottom: 11,
height: 53,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
}
},

button_start_1:{
minWidth: 250,
backgroundColor: PrimaryColor,
borderWidth: 1,
borderColor: PrimaryColor,
borderRadius: 25,
marginBottom: 11,
height: 53,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
}
},

button_start:{
minWidth: 250,
backgroundColor: 'transparent',
borderWidth: 1,
borderColor: PrimaryColor,
borderRadius: 25,
marginBottom: 11,
height: 53,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
}
},

button_start_text:{
fontWeight: 'bold',
color: PrimaryColor,
fontSize: 14

},

button_start_2:{
width: width * 0.80,
marginBottom: 11,
height: 53,
borderRadius: 25,
alignItems: 'center',
alignContent: 'center',
justifyContent: 'center',
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
},
},

logo_start:{
width: 200,
height: 200,
marginTop: 15,
marginBottom: 5},

logo_login:{
width: 200,
height: 200,
marginTop: 15,
marginBottom: 30},

button_contact:{
width: width * 0.92,
backgroundColor: PrimaryColor,
marginBottom: 8,
height: 53,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
},
borderRadius: 6,
alignItems: 'center',
alignContent: 'center',
justifyContent: 'center',
},


//////////////////////// LOGIN & SIGNUP

button_auth:{
width: width * 0.80,
backgroundColor: PrimaryColor,
marginBottom: 8,
height: 53,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
},
borderRadius: 25,
alignItems: 'center',
alignContent: 'center',
justifyContent: 'center',
},

text_auth:{
backgroundColor: 'transparent',
textAlign:'center',
maxWidth: 300,
minWidth: 300,
marginTop: 5,
fontSize: 13,
color: '#808080',
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
}
},

inputLogin:{

backgroundColor: '#FFFFFF',
width: width*0.80,
shadowRadius: 5,
marginBottom: 10,
borderColor: '#a4a4a4',
color: '#a4a4a4'

},
//////////////////////// HOME


listitem_home:{

borderBottomWidth: 0,
backgroundColor: 'transparent',
},

icon_home:{

	fontSize: 20,
	color: '#ddd'

},

note_home:{

  fontSize: 13,

},


gridHomeImage:{
  width: 50,
  height: 50,
  marginBottom: 15,
  marginTop: 20
},

gridHomeText:{
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
  opacity: 0.6
},

gridHomeCol:{
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
height: height*0.19
},

//////////////////////// CALCULATOR

calctitle:{
color: PrimaryColor,
justifyContent: "center",
alignSelf: "center",
marginTop: 30,
fontSize: 18,
fontWeight: 'bold'
},

calcsubtitle:{
color: '#999',
justifyContent: "center",
alignSelf: "center",
marginTop: 10,
fontSize: 16,
},

calcinput:{

backgroundColor: '#FFFFFF',
width: width*0.50,
shadowRadius: 5,
marginBottom: 10,
borderColor: '#a4a4a4',
paddingHorizontal: 15,
color: '#a4a4a4'

},

calcbutton: {
width: width * 0.50,
backgroundColor: TertiaryColor,
justifyContent: "center",
marginBottom: 8,
height: 53,
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
shadowOffset: {
  width: 0,
  height: 0
  },
  },

calcbuttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: '#fff',
    fontWeight: "bold"
  },

calcresultnumber: {
    alignSelf: "center",
    color: PrimaryColor,
    fontSize: 55,
    padding: 15
  },

calcresulttext: {
    alignSelf: "center",
    color: PrimaryColor,
    fontSize: 25,
    padding: 15
  },


bmicol:{
alignItems: 'center',
justifyContent: 'center',
margin: 4,
borderRadius: 4,
},

bmi1col:{
alignItems: 'flex-start',
justifyContent: 'center',
margin: 4,
borderRadius: 4,
backgroundColor: '#f1f2f6',
paddingLeft: 25
},

bmicoltext:{
fontWeight: 'bold',
fontSize: 16 
},

bmicolnumber:{
fontWeight: 'bold',
fontSize: 16 
},

//////////////////////// MENU

container_menu: {
    flex: 1,
    backgroundColor: '#ffffff'
},

item_menu:{

borderBottomWidth: 0,
borderBottomColor: '#FFFFFF',
marginLeft: 0,
paddingRight: 20,
paddingLeft: 40,
marginBottom: 3,
marginTop: 3
},

text_menu:{

fontSize: 14,
color: TertiaryColor,
fontWeight: 'bold',
},

iconSidemenu:{

color: TertiaryColor,
fontSize: 25

},

sideMenu:{

backgroundColor: '#ffffff',
flexDirection:'column',
justifyContent: 'center',
alignItems: 'center', 
height: height * 0.29,
marginTop: 25,
padding:25
},

thumbnail_menu:{
marginRight: 10,
maxWidth: 40
},

icon_menu:{

  fontSize: 18,
  color: '#b5b5b5',
  opacity: 0.5

},

  footer_menu: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: TertiaryColor
  },

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    
  },

  modal3: {
    height: 'auto',
    maxHeight: height * 0.60,
    width: width * 0.80,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8
  },

});
