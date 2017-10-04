import {loaded} from 'sagas/homeSaga'
import * as actions from 'actions/homeActions'
import {call, put} from 'redux-saga/effects'
import {api} from 'services/api'

const homeData = {items: []};
const homeError = {error: 'an error'};

describe('homeSaga', () => {

    let generator = null;

    beforeEach(() => {
        generator = loaded();
    });

    it('should yield actions.load', () => {
        const next = generator.next(actions.load())
        expect(next.value).toEqual(call(api.home.get));
    });

    it('should yield actions.loaded(homeData)', () => {
        generator.next(actions.load());
        const next = generator.next(homeData);
        expect(next.value).toEqual(put(actions.loaded(homeData)));
    });

    it('should yield actions.failed(homeError)', () => {
        generator.next(actions.load());
        const next = generator.next(homeError);
        expect(next.value).toEqual(put(actions.failed(homeError)));
    });
});