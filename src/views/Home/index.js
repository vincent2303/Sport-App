import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => state;
const mapActionsToProps = null;

export default connect(mapStateToProps, mapActionsToProps)(Home);
