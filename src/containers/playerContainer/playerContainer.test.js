import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from 'containers/playerContainer/PlayerContainer';
import {movieSelector} from 'reducers/playerReducer';

const mockMovie = {id: 1};
const mockMovieWithTitle = {
    id: 1,
    title: 'test title'
}
const mockMovieWithTitle2 = {
    id: 2,
    title: 'test title 2'
};
const mockMoviesHash = {
    [mockMovieWithTitle.id]: mockMovieWithTitle,
    [mockMovieWithTitle2.id]: mockMovieWithTitle2
}
const mockLoad = () => ({});
const mockMatch = {params: {}}
const mockPlayVideo = () => {};
const mockPauseVideo = () => {};
const playerContainer = (
    <PlayerContainer
        load={mockLoad}
        movie={mockMovie}
        match={mockMatch}
        playVideo={mockPlayVideo}
        pauseVideo={mockPauseVideo}
    >
    </PlayerContainer>
);

describe('PlayerContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playerContainer);
        expect(wrapper.exists()).toBe(true);
    })
});

describe('movieSelector', () => {
    it('should return movie object with title from movies data', () => {
        const actual = movieSelector(mockMoviesHash, mockMovie);
        expect(actual).toEqual(mockMovieWithTitle);
    })
});