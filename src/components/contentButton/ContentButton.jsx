import React from 'react';
import {Link} from 'react-router-dom';
import focusable from '../../hocs/focusable.jsx';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function ContentButton({item, focused}) {

    return (
        <Link to={`/player/${item.id}`}>
            <div
                id={item.id}
                className={decorateClassName('content-button', focused)}
            >
                {item.title}
            </div>
        </Link>
    );
}

export default focusable(ContentButton);