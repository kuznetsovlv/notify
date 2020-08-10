import { connect } from 'react-redux';
import { FETCH_DATA } from '../actions';
import ContentManager from '../components/ContentManager';

const mapStateToProps = ( { data }, { dataName }) => ({ data: data[dataName] });

const mapDispatchToProps = dispatch => ({
	onInit: (dataName) => () => { dispatch({ type: FETCH_DATA, dataName }); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentManager);
