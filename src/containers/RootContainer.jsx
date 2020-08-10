import { connect } from 'react-redux';
import Root from '../components/Root';

const mapStateToProps = ({ errors = []}) => ({ errors });

export default connect(mapStateToProps)(Root);
