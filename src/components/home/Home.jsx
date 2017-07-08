import React from 'react';
import Grid from '../grid/Grid.jsx';

export function Home({cols, data = {items: []}, handleSelect, currentFocus}) {
    return (
        <div className="home">
            <Grid
                cols={cols}
                data={data}
                handleSelect={handleSelect}
                currentFocus={currentFocus}
            />
        </div>
    )
}

export default Home;