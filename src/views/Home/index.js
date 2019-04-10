import { connect } from 'react-redux';
import Home from './Home';
import { pushExo } from '../../redux/actions/exercise';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
});
const mapActionsToProps = ({ pushExo });

export default connect(mapStateToProps, mapActionsToProps)(Home);
