import { SET_SESSIONS } from './types';

const setSessionsAction = session => ({
  type: SET_SESSIONS,
  payload: session,
});

export { setSessionsAction  };
