import React from 'react';
import Lane from '../lane/Lane.jsx';
import styles from '../../index.scss';

export function getLaneIndex(lanes, focusKey) {
    for (let i = 0, l = lanes.length; i < l; i += 1) {
        for (let j = 0, m = lanes[i].items.length; j < m; j += 1) {
            if (focusKey === lanes[i].items[j].nav.focusKey) {
                return i;
            }
        }
    }
    return 0
}

export function Home({
        laneData = {lanes: []},
        handleSelect,
        currentFocus,
        initialFocusKey
    }) {

    const laneIndex = getLaneIndex(laneData.lanes, currentFocus);
    const offset = (laneIndex && laneIndex > 0)
        ? parseInt(styles.CONTENT_BTN_HEIGHT, 10) / 2
        : 0;
    const style = {
        marginTop: (laneIndex || laneIndex === 0)
            ? -((laneIndex * (
                (parseInt(styles.CONTENT_BTN_HEIGHT, 10)) +
                (parseInt(styles.CONTENT_BTN_MARGIN, 10) * 2))
            ) - offset)
            : 0
    }

    return (
        <div style={style} className="home">
            {
                laneData.lanes.map((item, index) =>
                    <Lane
                        key={index}
                        data={item}
                        handleSelect={handleSelect}
                        currentFocus={currentFocus}
                        initialFocusKey={initialFocusKey}
                    />
                )
            }
        </div>
    )
}

export default Home;