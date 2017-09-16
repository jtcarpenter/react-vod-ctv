import React from 'react';
import Lane from '../../containers/laneContainer/LaneContainer.jsx';
import styles from '../../index.scss';

export function Home({
        laneData = {lanes: []},
        handleSelect,
        currentFocus,
        focusedLaneIndex,
        initialFocusKey
    }) {

    const offset = (focusedLaneIndex && focusedLaneIndex > 0)
        ? parseInt(styles.CONTENT_BTN_HEIGHT, 10) / 2
        : 0;
    const style = {
        marginTop: (focusedLaneIndex || focusedLaneIndex === 0)
            ? -((focusedLaneIndex * (
                (parseInt(styles.CONTENT_BTN_HEIGHT, 10)) +
                (parseInt(styles.CONTENT_BTN_MARGIN, 10) * 2))
            ) - offset)
            : 0
    };
    style.marginTop = 0;

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
                        isCurrentFocus={index === focusedLaneIndex}
                    />
                )
            }
        </div>
    )
}

export default Home;