import { PUSH_EXERCISE } from './types';

const pushExo = () => (dispatch) => {
  dispatch({
    type: PUSH_EXERCISE,
  });
};

function pushMap() {}

export { pushExo, pushMap };
