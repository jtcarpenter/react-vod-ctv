import {loaded} from 'sagas/playerSaga'
import * as actions from 'actions/playerActions'
import {call, put} from 'redux-saga/effects'
import {api} from 'services/api'

const playerOpts = {id: 0};
const playerData = {
    id: 0,
    title: 'test',
    src: 'test'
};

describe('playerSaga', () => {

    const generator = loaded({payload: playerOpts});

    it('should yield actions.load', () => {
        const next = generator.next(actions.load(playerOpts))
        expect(next.value).toEqual(call(api.player.get, playerOpts));
    });

    it('should yield actions.loaded(playerData)', () => {
        const next = generator.next(playerData);
        expect(next.value).toEqual(put(actions.loaded(playerData)));
    })
});