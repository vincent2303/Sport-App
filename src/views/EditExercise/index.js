import { connect } from 'react-redux';
import EditExercise from './EditExercise';
import { setExercises } from '../../redux/functions/exercises';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
  selectedExercise: state.exerciseReducer.selectedExercise,
});

const mapDispatchToProps = {
  setExercises,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExercise);
