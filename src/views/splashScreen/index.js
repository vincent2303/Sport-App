import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';

const mapStateToProps = state => ({
  exercises: state.exerciseReducer.exercises,
});
const mapActionsToProps = ({ });

export default connect(null, null)(SplashScreen);
