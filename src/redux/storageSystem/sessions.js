import AsyncStorage from '@react-native-community/async-storage';
import store from '../store';
import { setSessionsAction } from '../actions/sessions';
import { getStorableSessions, getReduxSessions } from '../../utils/sessions';

const sessionsKey = 'sessionsKey';

async function storeSessions(sessions) {
  const storableSessions = getStorableSessions(sessions);
  const sessionsString = JSON.stringify(storableSessions);
  try {
    await AsyncStorage.setItem(sessionsKey, sessionsString);
  } catch (err) {
    throw new Error(err);
  }
}

async function loadSessions() {
  try {
    const sessionsString = await AsyncStorage.getItem(sessionsKey);
    if (sessionsString) {
      const sessions = JSON.parse(sessionsString);
      const reduxSessions = getReduxSessions(sessions);
      store.dispatch(setSessionsAction(reduxSessions));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export { storeSessions, loadSessions };
