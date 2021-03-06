import { connect } from 'react-redux';
import EditSession from './EditSession';
import { setSessions } from '../../redux/functions/sessions';

const mapStateToProps = state => ({
  exercises: state.exercisesReducer.exercises,
  categories: state.exercisesReducer.categories,
  sessions: state.sessionsReducer.sessions,
});

const mapDispatchToProps = {
  setSessions,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSession);
