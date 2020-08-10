import { call, put, takeEvery, select } from 'redux-saga/effects';
import { FETCH_DATA, RECEIVE_DATA, ERROR_DETECTED, MARK_DATA_AS_FETCHING } from '../actions';
import getData from '../api';

function* __fetchData({ dataName }) {
	let data = yield select(({ data }) => data[dataName]);

	if (data !== undefined) {
		return;
	}

	yield put({ type: MARK_DATA_AS_FETCHING, dataName });

	try {
		data = yield call(getData, dataName);
	} catch(error) {
		yield put({ type: ERROR_DETECTED, error });
		return;
	}

	yield put({ type: RECEIVE_DATA, dataName, data });
}


export default function* watchFetchData() {
	yield takeEvery(FETCH_DATA, __fetchData);
}