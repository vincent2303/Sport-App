import { connect } from 'react-redux';
import Exercises from './Exercises';
import { selectExercise } from '../../redux/functions/exercises';

const mapStateToProps = state => ({
  exercises: state.exercisesReducer.exercises,
  categories: state.exercisesReducer.categories,
});

const mapDispatchToProps = {
  selectExercise,
};

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);
