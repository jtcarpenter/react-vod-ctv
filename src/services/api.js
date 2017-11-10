import * as errorMessages from 'constants/errorMessages';

const HOME_DATA_URL = '/api/home-data.json';
const PLAYER_DATA_URL = '/api/item-data';

export const api = {

    home: {
        get: () => fetch(HOME_DATA_URL)
            .then((response) => {
                if (Math.floor(response.status / 100) !== 2) {
                    return {
                        error: errorMessages.ERROR_CONTENT,
                        status: response.status
                    };
                }
                return response.json()
                    .then((data) => data);
            })
            .catch((error) => {
                throw error;
            })
    },

    player: {
        get: (opts) => fetch(`${PLAYER_DATA_URL}.json?=${opts.id}`)
            .then((response) => {
                if (Math.floor(response.status / 100) !== 2) {
                    return {error: errorMessages.ERROR_CONTENT};
                }
                return response.json()
                    .then((data) => {
                        return Object.assign({}, data, {
                            id: opts.id
                        })
                    });
            })
            .catch((error) => {
                throw error;
            })
    }
}

export default api;