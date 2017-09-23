import React from 'react';
import focusable from 'hocs/focusable.jsx';
import * as playerStates from 'constants/playerStates';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function PlayButton({
        videoState,
        focused
    }) {

    const className = videoState === playerStates.PLAYING
        ? 'icon-pause player-ctrl player-ctrl__play'
        : 'icon-play player-ctrl player-ctrl__play'

    return (
        <div
            className={decorateClassName(className, focused)}
        >
        </div>
    );
}

export default focusable(PlayButton);