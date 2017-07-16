import React from 'react';
import {Link} from 'react-router-dom';
import focusable from '../../hocs/focusable.jsx';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function ContentButton({item, handleSelect, focused}) {

    function handleClick() {
        // @TODO:
        handleSelect(item.id);
    }

    return (
        <Link to={`/player/${item.id}`}>
            <div
                id={item.id}
                onClick={handleClick}
                className={decorateClassName('content-button', focused)}
            >
                {item.title}
            </div>
        </Link>
    );
}

export default focusable(ContentButton);