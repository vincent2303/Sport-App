const exerciseInitialState = { exercise: [] };
function exerciseReducer(state = exerciseInitialState) {
  return { ...state };
}
export default exerciseReducer;
