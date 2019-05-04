const sessionsInitialState = {
  sessions: [],
};

function sessionsReducer(state = sessionsInitialState, { type, payload }) {
  switch (type) {
    default:
      return { ...state };
  }
}
export default sessionsReducer;
