import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';


const mapStateToProps = state => ({
  sessions: state.sessionsReducer.sessions,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
