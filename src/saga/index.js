import { all } from 'redux-saga/effects';
import watchFetchData from './data';

export default function* () { yield all([watchFetchData()])}
