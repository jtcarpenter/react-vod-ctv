import * as types from '../constants/playerActionTypes';

export function load(payload) {
    return {
        type: types.LOAD,
        payload
    };
}

export function loaded(payload) {
    return {
        type: types.LOADED,
        payload
    }
}
