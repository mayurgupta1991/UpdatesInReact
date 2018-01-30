import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchWebApi } from './webapis/dashboard';
import { getResponse } from './actions/common';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
    const url = 'https://api.welcometv.net/api/v1/videoList/npQNyYVn0fgUokNaUoTXsg?langId=1&categoryId=4&page=1&size=8';
    try {
        const user = yield call(() => fetchWebApi('', url));
        user.request.then(response => {
           // yield put(getResponse(response));
            console.log(response);
        }).catch(e => { console.log(e); });
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