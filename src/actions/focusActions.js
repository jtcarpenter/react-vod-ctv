import * as focusTypes from 'constants/focusActionTypes';

export function changeFocus(focusKey) {
    return {
        type: focusTypes.CHANGE_FOCUS,
        payload: {
            focusKey
        }
    }
}