import * as types from '../constants/keyActionTypes';

export function keyPressed(keyType) {
    return {
        type: types.KEY_PRESSED,
        payload: {
            keyType
        }
    }
}
