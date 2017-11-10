import * as homeTypes from 'constants/homeActionTypes';

const defaultState = {
    byId: {},
    allIds: []
}

export const moviesToHash = (movies) => {
    return movies.reduce((hash, s) => {
        hash[s.id] = s;
        return hash;
    }, {});
}

export const moviesSelector = (movies) => {
    return Object.keys(movies).map((id) => {
        return movies[id];
    });
}

export default function homeReducer(state = defaultState, action) {
    switch (action.type) {
        case homeTypes.LOADED:
            return Object.assign({}, state, {
                byId: moviesToHash(action.payload.movies),
                allIds: action.payload.movies.map((movie) => {
                    return movie.id
                })
            });
        case homeTypes.FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state;
    }
}