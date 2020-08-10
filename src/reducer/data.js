import { MARK_DATA_AS_FETCHING, RECEIVE_DATA } from '../actions';

export default (state = {}, action) => {
	switch (action.type) {
		case MARK_DATA_AS_FETCHING: {
			const { dataName } = action;
			if (state[dataName] === undefined) {
				return {...state, [dataName]: null };
			}
			return state;
		}
		case RECEIVE_DATA: {
			const { data, dataName } = action;
			return { ...state, [dataName]: data };
		}
		default: return state;
	}
}