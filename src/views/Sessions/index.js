import { connect } from 'react-redux';
import Sessions from './Sessions';

const mapStateToProps = state => ({
  sessions: state.sessionsReducer.sessions,
  exercises: state.exercisesReducer.exercises,
});

const mapDispatchToProps = null;


export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
