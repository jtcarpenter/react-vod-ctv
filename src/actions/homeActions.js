import * as homeTypes from 'constants/homeActionTypes';

export function load() {
    return {
        type: homeTypes.LOAD
    };
}

export function loaded(payload) {
    return {
        type: homeTypes.LOADED,
        payload
    }
}

export function failed(payload) {
    return {
        type: homeTypes.FAILED,
        payload
    }
}