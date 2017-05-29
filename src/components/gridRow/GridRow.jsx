import React from 'react';
import GridItem from '../gridItem/GridItem.jsx';
import Nav from '../Nav/Nav.jsx';

export function GridRow({row, handleSelect}) {

    return (
        <div className="grid-row">
            {row.map((item, index) =>
                <Nav
                    key={index}
                    right={index % 3 !== 2}
                    navId={item.id.toString()}
                >
                    <GridItem
                        key={index}
                        item={item}
                        handleSelect={handleSelect}
                    >
                    </GridItem>
                </Nav>
            )}
        </div>
    )
}

export default GridRow;
