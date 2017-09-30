import React from 'react';
import Lane from 'containers/laneContainer/LaneContainer.jsx';
import styles from 'index.scss';

export function Home({
        laneData = {lanes: []},
        handleSelect,
        currentFocus,
        focusedLaneIndex,
        initialFocusKey
    }) {

    const itemHeight = parseInt(styles.CONTENT_BTN_HEIGHT, 10);
    const itemMargin = parseInt(styles.CONTENT_BTN_MARGIN, 10);
    const offset = (focusedLaneIndex && focusedLaneIndex > 0)
        ? itemHeight / 2
        : 0;
    const style = {
        marginTop: (focusedLaneIndex || focusedLaneIndex === 0)
            ? -(
                (
                    focusedLaneIndex * (
                        (itemHeight) +
                        (itemMargin * 2)
                    )
                ) - offset
            )
            : 0
    };

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