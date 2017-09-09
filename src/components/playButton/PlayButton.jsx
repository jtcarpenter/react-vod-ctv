import React from 'react';
import focusable from '../../hocs/focusable.jsx';
import * as playerStates from '../../constants/playerStates';

const PLAY_TXT = 'PLAY';
const PAUSE_TXT = 'PAUSE';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function PlayButton({
        videoState,
        focused
    }) {

    const playState = videoState === playerStates.PLAYING
        ? PAUSE_TXT
        : PLAY_TXT;

    return (
        <div
            className={decorateClassName('play-button', focused)}
        >
            {playState}
        </div>
    );
}

export default focusable(PlayButton);