import React from 'react';
import {Link} from 'react-router-dom';
import focusable from 'hocs/focusable.jsx';

const decorateClassName = (className, isHero, focused) => {
    const heroClassName = isHero
        ? `${className}--hero`
        : '';
    const focusClassName = focused
        ? `${className}--focused`
        : '';
    return `${className} ${heroClassName} ${focusClassName}`;
}

export function ContentButton({item, focused}) {

    return (
        <Link to={`/player/${item.id}`}>
            <div
                id={item.id}
                className={decorateClassName(
                    'content-button',
                    item.category === 'hero',
                    focused
                )}
            >
                {item.title}
            </div>
        </Link>
    );
}

export default focusable(ContentButton);