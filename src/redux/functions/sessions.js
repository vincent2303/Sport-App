import { setSessionsAction } from '../actions/sessions';
import { storeSessions } from '../storageSystem/sessions';

const setSessions = sessions => (dispatch) => {
  storeSessions(sessions);
  dispatch(setSessionsAction(sessions.slice()));
};

export { setSessions };
