import * as focusTypes from 'constants/focusActionTypes';

const defaultState = {
    // @TODO: This will be dependent on context
    currentFocus: null
}

export default function keyReducer(state = defaultState, action) {
    switch (action.type) {
        case focusTypes.CHANGE_FOCUS: {
            const {focusKey = state.currentFocus} = action.payload;
            return Object.assign({}, state, {
                currentFocus: focusKey
            });
        }
        default:
            return state;
    }
}