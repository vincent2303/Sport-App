import { connect } from 'react-redux';
import EditExercise from './EditExercise';

const mapStateToProps = state => ({
  selectedExercise: state.exerciseReducer.selectedExercise,
});

export default connect(mapStateToProps, null)(EditExercise);
