import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '../views/Home';
import Exercises from '../views/Exercises';
import SessionCycle from '../views/SessionCycle';
import SessionReport from '../views/SessionReport';
import DrawerContent from '../views/DrawerContent';
import SplashScreen from '../views/SplashScreen';
import NewExercise from '../views/NewExercise';
import EditExercise from '../views/EditExercise';

const secondNav = createStackNavigator({
  Exercises,
  NewExercise,
  EditExercise,
});

const DrawerNavigator = createDrawerNavigator({
  SplashScreen,
  Home,
  Exercises: secondNav,
  SessionCycle,
  SessionReport,
}, {
  contentComponent: DrawerContent,
});

export default createAppContainer(DrawerNavigator);
