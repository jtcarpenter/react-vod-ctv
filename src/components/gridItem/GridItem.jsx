import React from 'react';
import {Link} from 'react-router';

export function GridItem({item, handleSelect, focused}) {

    function handleClick() {
        handleSelect(item.id);
    }

    const className = focused
        ? 'grid-item grid-item--focused'
        : 'grid-item';

    return (
        <Link to={`/player/${item.id}`}>
            <div
                className={className}
                id={item.id}
                onClick={handleClick}
            >
                {item.title}
            </div>
        </Link>
    )
}

export default GridItem;
