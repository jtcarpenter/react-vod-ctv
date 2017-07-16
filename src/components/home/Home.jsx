import React from 'react';
import Grid from '../grid/Grid.jsx';
import Lane from '../lane/Lane.jsx';

export function Home({
        laneData = {lanes: []},
        gridData = {items: []},
        handleSelect,
        currentFocus
    }) {

    return (
        <div className="home">
            {laneData.lanes.map((item, index) =>
                <Lane
                    key={index}
                    data={item}
                    handleSelect={handleSelect}
                    currentFocus={currentFocus}
                />
            )}
               {/* <Grid
                cols={gridData.cols}
                data={gridData}
                handleSelect={handleSelect}
                currentFocus={currentFocus}
            /> */}
        </div>
    )
}

export default Home;