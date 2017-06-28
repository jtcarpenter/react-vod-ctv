import * as types from '../constants/gridActionTypes';

export function load() {
    return {
        type: types.LOAD
    };
}

export function loaded(payload) {
    return {
        type: types.LOADED,
        payload
    }
}