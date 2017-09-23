import * as keyTypes from 'constants/keyActionTypes';

export function keyPressed(keyType) {
    return {
        type: keyTypes.KEY_PRESSED,
        payload: {
            keyType
        }
    }
}