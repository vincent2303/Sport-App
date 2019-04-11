// a function that makes the redux state mutable
// return a deepClone of the state
// attention: works for 1 level of Map (no Map inside Map)

export default function transformIntoMutableState(state) {
  const mutableState = JSON.parse(JSON.stringify(state));
  Object.keys(state).forEach((key) => {
    const attribute = state[key];
    if (attribute instanceof Map) {
      mutableState[key] = new Map(JSON.parse(JSON.stringify([...attribute])));
    }
  });
  return mutableState;
}
