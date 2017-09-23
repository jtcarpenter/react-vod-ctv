import {loaded} from 'sagas/homeSaga'
import * as actions from 'actions/homeActions'
import {call, put} from 'redux-saga/effects'
import {api} from 'services/api'

const homeData = {items: []};

describe('homeSaga', () => {

    const generator = loaded()

    it('should yield actions.load', () => {
        const next = generator.next(actions.load())
        expect(next.value).toEqual(call(api.home.get));
    });

    it('should yield actions.loaded(homeData)', () => {
        const next = generator.next(homeData);
        expect(next.value).toEqual(put(actions.loaded(homeData)));
    })
});