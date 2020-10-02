import React from 'react';
import SideMenu from './SideMenu';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import {Dimensions, Text} from "react-native";
var styles = require('../../assets/files/Styles');

var {height, width} = Dimensions.get('window');

import HomeScreen from '../screens/Home';
import WorkoutsScreen from '../screens/Workouts';
import WGoalsScreen from '../screens/WGoals';
import WLevelsScreen from '../screens/WLevels';
import WorkoutsByGoalScreen from '../screens/WorkoutsByGoal';
import WorkoutsByLevelScreen from '../screens/WorkoutsByLevel';
import WorkoutDetailsScreen from '../screens/WorkoutDetails';
import Day1Screen from '../screens/Day1';
import Day2Screen from '../screens/Day2';
import Day3Screen from '../screens/Day3';
import Day4Screen from '../screens/Day4';
import Day5Screen from '../screens/Day5';
import Day6Screen from '../screens/Day6';
import Day7Screen from '../screens/Day7';
import ExercisesScreen from '../screens/Exercises';
import EquipmentsScreen from '../screens/Equipments';
import ExercisesByMuscleScreen from '../screens/ExercisesByMuscle';
import ExercisesByEquipmentScreen from '../screens/ExercisesByEquipment';
import EBodypartsScreen from '../screens/EBodyparts';
import ExerciseDetailsScreen from '../screens/ExerciseDetails';
import LogoutScreen from "../screens/Logout";
import DietsScreen from "../screens/Diets";
import DietsByCategoryScreen from "../screens/DietsByCategory";
import DietDetailsScreen from "../screens/DietDetails";
import PostsScreen from "../screens/Posts";
import PostDetailsScreen from "../screens/PostDetails";
import TagsScreen from "../screens/Tags";
import PostsByTagScreen from "../screens/PostsByTag";
import CategoriesScreen from "../screens/Categories";
import PostCommentsScreen from "../screens/PostComments";
import TermsScreen from '../screens/Terms';
import QuotesScreen from '../screens/Quotes';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import AboutUsScreen from '../screens/AboutUs';
import ContactUsScreen from '../screens/ContactUs';
import CalculatorScreen from '../screens/Calculator';
import BmiInfoScreen from '../screens/BmiInfo';


const leftIcon = (navigation, icon) => <Ionicons 
	name={icon}
	style={{marginLeft: 20}}
	size={27}
	color="#000"
	onPress={() => navigation.openDrawer()}
/>;

const navigationOptions = {
  defaultNavigationOptions: {
    headerStyle: styles.headerStyle,
    headerBackTitle: null,
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold'
    }
  }
};

const HomeNavigator = createStackNavigator(
{
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
	  headerLeft: () => leftIcon(navigation, 'md-menu'),
	})
  },
  WorkoutsScreen: {
    screen: WorkoutsScreen
  },
  WGoalsScreen: {
    screen: WGoalsScreen
  },
  WLevelsScreen: {
    screen: WLevelsScreen
  },
  WorkoutsByGoalScreen: {
    screen: WorkoutsByGoalScreen
  },
  WorkoutsByLevelScreen: {
    screen: WorkoutsByLevelScreen
  },
  WorkoutDetailsScreen: {
    screen: WorkoutDetailsScreen
  },
  Day1Screen: {
    screen: Day1Screen
  },
  Day2Screen: {
    screen: Day2Screen
  },
  Day3Screen: {
    screen: Day3Screen
  },
  Day4Screen: {
    screen: Day4Screen
  },
  Day5Screen: {
    screen: Day5Screen
  },
  Day6Screen: {
    screen: Day6Screen
  },
  Day7Screen: {
    screen: Day7Screen
  },
  PostDetailsScreen: {
    screen: PostDetailsScreen
  },
  EquipmentsScreen: {
    screen: EquipmentsScreen
  },
  ExercisesScreen: {
    screen: ExercisesScreen
  },
  ExercisesByMuscleScreen: {
    screen: ExercisesByMuscleScreen
  },
  ExercisesByEquipmentScreen: {
    screen: ExercisesByEquipmentScreen
  },
  EBodypartsScreen: {
    screen: EBodypartsScreen
  },
  ExerciseDetailsScreen: {
    screen: ExerciseDetailsScreen
  },
  LogoutScreen: {
    screen: LogoutScreen
  },
  TermsScreen: {
    screen: TermsScreen
  },
  DietsScreen: {
    screen: DietsScreen
  },
  DietsByCategoryScreen: {
    screen: DietsByCategoryScreen
  },
  PostsScreen: {
    screen: PostsScreen
  },
  PostsByTagScreen: {
    screen: PostsByTagScreen
  },
  PostCommentsScreen: {
    screen: PostCommentsScreen
  },
  CategoriesScreen: {
    screen: CategoriesScreen
  },
  TagsScreen: {
    screen: TagsScreen
  },
  DietDetailsScreen: {
    screen: DietDetailsScreen
  },
  TermsScreen: {
    screen: TermsScreen
  },
  QuotesScreen: {
    screen: QuotesScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  },
  SettingsScreen: {
    screen: SettingsScreen
  },
  AboutUsScreen: {
    screen: AboutUsScreen
  },
  ContactUsScreen: {
    screen: ContactUsScreen
  },
  CalculatorScreen: {
    screen: CalculatorScreen
  },
  BmiInfoScreen: {
    screen: BmiInfoScreen
  },
}, navigationOptions

);

const RootStack = createDrawerNavigator({

Home: {
    screen: HomeNavigator,
  },
}, {
  contentComponent: SideMenu,
  drawerWidth: width * .7,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export default createAppContainer(RootStack)
