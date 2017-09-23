import React from 'react';
import focusable from 'hocs/focusable.jsx';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function BackButton({focused}) {

    return (
        <div
            className={decorateClassName(
                'icon-arrow-left player-ctrl player-ctrl__back',
                focused
            )}
        >
        </div>
    );
}

export default focusable(BackButton);