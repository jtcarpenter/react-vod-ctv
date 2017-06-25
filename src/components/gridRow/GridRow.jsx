import React from 'react';
import GridItem from '../gridItem/GridItem.jsx';

export function GridRow({row, handleSelect}) {

    return (
        <div className="grid-row">
            {row.map((item, index) =>
                <GridItem
                    key={index}
                    index={index}
                    item={item}
                    handleSelect={handleSelect}
                >
                </GridItem>
            )}
        </div>
    )
}

export default GridRow;