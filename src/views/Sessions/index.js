import { connect } from 'react-redux';
import Sessions from './Sessions';

const mapStateToProps = state => ({
  sessions: state.sessionsReducer.sessions,
});

const mapDispatchToProps = null;


export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
