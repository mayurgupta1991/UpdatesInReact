import { all, put, call, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchData } from './actions/async/getUserData';
import { getResponse } from './actions/common';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
    try {
        const userData = yield call(fetchData());
        yield put(getResponse(userData));
    } catch (e) {
        console.log(e);
    }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 *//*
function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}*/

export default mySaga;