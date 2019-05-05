import { connect } from 'react-redux';
import NewExercise from './NewExercise';
import { setExercises } from '../../redux/functions/exercises';

const mapStateToProps = state => ({
  categories: state.exercisesReducer.categories,
  exercises: state.exercisesReducer.exercises,
});

const mapDispatchToProps = {
  setExercises,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewExercise);
