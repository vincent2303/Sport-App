import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../views/Home';
import Exercises from '../views/Exercises';
import Sessions from '../views/Sessions';
import SessionReport from '../views/SessionReport';
import DrawerContent from '../views/DrawerContent';
import SplashScreen from '../views/SplashScreen';
import NewExercise from '../views/NewExercise';
import EditExercise from '../views/EditExercise';
import NewSession from '../views/NewSession';

const exerciseNavigation = createStackNavigator({
  Exercises,
  NewExercise,
  EditExercise,
  Sessions,
});

const sessionsNavigation = createStackNavigator({
  Sessions,
  NewSession,
});

const DrawerNavigator = createDrawerNavigator({
  SplashScreen,
  Home,
  Exercises: exerciseNavigation,
  Sessions: sessionsNavigation,
  NewSession,
  SessionReport,
}, {
  contentComponent: DrawerContent,
});

export default createAppContainer(DrawerNavigator);
