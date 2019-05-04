import { connect } from 'react-redux';
import DrawerContent from './DrawerContent';


const mapStateToProps = state => ({
  sessions: state.sessionsReducer.sessions,
});

export default connect(mapStateToProps, null)(DrawerContent);
