import { connect } from 'react-redux';
import NewSession from './NewSession';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
  categories: state.exerciseReducer.categories,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewSession);
