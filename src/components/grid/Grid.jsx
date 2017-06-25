import React from 'react';
import GridRow from '../gridRow/GridRow.jsx';

export function Grid({cols, data = {items: []}, handleSelect, currentFocus}) {
    const rows = [];
    data.items.forEach((item, index) => {
        if (index % cols === 0) {
            rows.push([item]);
        } else {
            rows[rows.length - 1].push(item);
        }
    });
    return (
        <div className="grid">
            {rows.map((row, index) =>
                <GridRow
                    key={index}
                    row={row}
                    handleSelect={handleSelect}
                    currentFocus={currentFocus}
                >
                </GridRow>
            )}
        </div>
    )
}

export default Grid;