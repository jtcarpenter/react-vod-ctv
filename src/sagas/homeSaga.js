import {call, put, takeEvery} from 'redux-saga/effects'
import * as homeTypes from 'constants/homeActionTypes'
import * as actions from 'actions/homeActions'
import {api} from 'services/api'

// Our worker Saga: will perform the async task
export function *loaded() {
    const data = yield call(api.home.get);
    if (data.error) {
        // TODO: handle error
    }
    yield put(actions.loaded(data));
}

// Our watcher Saga: spawn a new loaded task on each LOAD
export function *watchLoad() {
    yield takeEvery(homeTypes.LOAD, loaded)
}