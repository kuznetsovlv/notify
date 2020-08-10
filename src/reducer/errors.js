import { ERROR_DETECTED } from '../actions';

export default (state = [], {type, error}) => {
	switch(type) {
		case ERROR_DETECTED:
			return [...state, error];
		default: return state;
	}
}