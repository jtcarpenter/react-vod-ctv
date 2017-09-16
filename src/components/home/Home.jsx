import React from 'react';
import Lane from '../lane/Lane.jsx';

export function Home({
        laneData = {lanes: []},
        handleSelect,
        currentFocus,
        initialFocusKey
    }) {

    return (
        <div className="home">
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