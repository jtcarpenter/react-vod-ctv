import React from 'react';
import focusable from '../../hocs/focusable.jsx';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function ProgressBar({item, focused}) {

    return (
        <div
            className={decorateClassName('progress-bar', focused)}
        >
            SCRUB
        </div>
    );
}

export default focusable(ProgressBar);