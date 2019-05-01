import { connect } from 'react-redux';
import NewExercise from './NewExercise';

const mapStateToProps = state => ({
  categories: state.exerciseReducer.categories,
  exercises: state.exerciseReducer.exercises,
});

export default connect(mapStateToProps, null)(NewExercise);
