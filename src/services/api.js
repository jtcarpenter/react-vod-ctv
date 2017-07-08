const HOME_DATA_URL = '/home-data.json';
const PLAYER_DATA_URL = '/item-data';

export const api = {

    home: {
        get: () => fetch(HOME_DATA_URL)
            .then((response) => {
                if (Math.floor(response.status / 100) !== 2) {
                    return {
                        error: 'error',
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
        get: (opts) => fetch(`${PLAYER_DATA_URL}-${opts.id}.json`)
            .then((response) => {
                if (Math.floor(response.status / 100) !== 2) {
                    return {error: 'error'};
                }
                return response.json()
                    .then((data) => data);
            })
            .catch((error) => {
                throw error;
            })
    }
}

export default api;