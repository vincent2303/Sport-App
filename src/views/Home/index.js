import { connect } from 'react-redux';
import Home from './Home';
import { addExercise } from '../../redux/functions/exercises';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
});
const mapActionsToProps = ({ addExercise });

export default connect(mapStateToProps, mapActionsToProps)(Home);
