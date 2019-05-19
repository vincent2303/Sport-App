import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../views/Home';
import Exercises from '../views/Exercises';
import Sessions from '../views/Sessions';
import SessionReport from '../views/SessionReport';
import DrawerContent from '../views/DrawerContent';
import SplashScreen from '../views/SplashScreen';
import NewExercise from '../views/NewExercise';
import EditExercise from '../views/EditExercise';
import EditSession from '../views/EditSession';

const stackNavigator = createStackNavigator({
  Home,
  Exercises,
  NewExercise,
  EditExercise,
  Sessions,
  EditSession,
  SessionReport,
});

const DrawerNavigator = createDrawerNavigator({
  SplashScreen,
  Home: stackNavigator,
}, {
  contentComponent: DrawerContent,
});

export default createAppContainer(DrawerNavigator);
