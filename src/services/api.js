const GRID_DATA_URL = '/grid-data.json';
const PLAYER_DATA_URL = '/item-data';

export const api = {

    grid: {
        get: () => fetch(GRID_DATA_URL)
            .then((response) => {
                if (response.status / 100 !== 2) {
                    return {error: 'error'};
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
                if (response.status / 100 !== 2) {
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