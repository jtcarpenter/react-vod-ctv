import {call, put, takeEvery} from 'redux-saga/effects'
import * as types from '../constants/playerActionTypes';
import * as actions from '../actions/playerActions'
import {api} from '../services/api'

// Our worker Saga: will perform the async task
export function *loaded(action) {
    const data = yield call(api.player.get, action.payload);
    if (data.error) {
        // TODO: handle error
    }
    yield put(actions.loaded(data));
}

// Our watcher Saga: spawn a new loaded task on each LOAD
export function *watchLoad() {
    yield takeEvery(types.LOAD, loaded)
}