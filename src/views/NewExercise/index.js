import { connect } from 'react-redux';
import NewExercise from './NewExercise';

const mapStateToProps = state => ({
  categories: state.exerciseReducer.categories,
});

export default connect(mapStateToProps, null)(NewExercise);
