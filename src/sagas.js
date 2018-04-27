import { all, put, call, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchData } from './actions/async/getUserData';
import { getResponse } from './actions/common';
import { USER_FETCH_REQUESTED } from './constants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
    try {
        const userData = yield call(fetchData, 1000);
        yield put(getResponse(userData.data));
    } catch (e) {
        console.log(e);
    }
}

function* middleSaga() {
    yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}

export default function* mySaga() {
    yield all([
        middleSaga()
    ]);
}
