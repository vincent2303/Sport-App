import { connect } from 'react-redux';
import Home from './Home';
import { setExercises } from '../../redux/functions/exercises';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
});
const mapActionsToProps = ({ setExercises });

export default connect(mapStateToProps, mapActionsToProps)(Home);
