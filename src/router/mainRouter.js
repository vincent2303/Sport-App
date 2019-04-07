import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../views/Home';
import Exercises from '../views/Exercises';
import SessionCycle from '../views/SessionCycle';
import SessionReport from '../views/SessionReport';

const DrawerNavigator = createDrawerNavigator({
  Home,
  Exercises,
  SessionCycle,
  SessionReport,
});

export default createAppContainer(DrawerNavigator);
