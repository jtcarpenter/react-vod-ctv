import React from 'react';
import focusable from '../../hocs/focusable.jsx';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function BackButton({focused}) {

    return (
        <div
            className={decorateClassName('button button__back', focused)}
        >
            BACK
        </div>
    );
}

export default focusable(BackButton);