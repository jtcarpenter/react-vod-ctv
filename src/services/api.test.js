import {api} from 'services/api';

const successfulReponse = new Promise((resolve, reject) => {
    resolve({
        ok: true,
        status: 204,
        json: () => {
            return Promise.resolve({test: 'test'})
        }
    });
})

describe('api', () => {

    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(
            () => successfulReponse
        );
    });

    describe('home', () => {
        it('returns data on successful get response', () => {
            api.home.get().then((response) => {
                expect(response.test).toBe('test');
            })
            .catch(() => {});
        });
    });

    describe('player', () => {
        it('returns data on successful get response', () => {
            api.player.get({id: 1}).then((response) => {
                expect(response.test).toBe('test');
            })
            .catch(() => {});
        });
    });
});