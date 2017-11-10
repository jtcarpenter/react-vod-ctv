import homeReducer, {moviesSelector, moviesToHash} from 'reducers/homeReducer';
import * as homeTypes from 'constants/homeActionTypes';

const state = {
    byId: {},
    allIds: []
}
const mockMovie = {id: 'test'};
const mockMovie2 = {id: 'test2'};
const error = 'an error';
const loadedAction = {
    type: homeTypes.LOADED,
    payload: {movies: [mockMovie]}
}
const failedAction = {
    type: homeTypes.FAILED,
    payload: {error}
}
const mockMoviesArray = [mockMovie, mockMovie2];
const mockMoviesHash = {
    [mockMovie.id]: mockMovie,
    [mockMovie2.id]: mockMovie2
}

describe('homeReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = homeReducer(state, loadedAction);
        expect(actual).toEqual({
            byId: {[mockMovie.id]: mockMovie},
            allIds: [mockMovie.id]});
    });

    it('should create return state with error on after fail action', () => {
        const actual = homeReducer(state, failedAction);
        expect(actual.error).toEqual(failedAction.payload.error);
    });
});

describe('moviesToHash', () => {
    it('should create a hash of array of data', () => {
        const actual = moviesSelector(mockMoviesHash);
        expect(actual).toEqual(mockMoviesArray);
    })
});

describe('moviesSelector', () => {
    it('should return an array of data from a hash', () => {
        const actual = moviesToHash(mockMoviesArray);
        expect(actual).toEqual(mockMoviesHash);
    })
});