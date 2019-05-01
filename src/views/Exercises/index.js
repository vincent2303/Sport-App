import { connect } from 'react-redux';
import Exercises from './Exercises';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
  categories: state.exerciseReducer.categories,
});

export default connect(mapStateToProps, null)(Exercises);
