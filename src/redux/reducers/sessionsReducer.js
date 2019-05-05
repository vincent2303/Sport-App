import { SET_SESSIONS } from '../actions/types';

const sessionsInitialState = {
  sessions: [],
};

function sessionsReducer(state = sessionsInitialState, { type, payload }) {
  switch (type) {
    case SET_SESSIONS:
      return { ...state, sessions: payload };
    default:
      return { ...state };
  }
}
export default sessionsReducer;
