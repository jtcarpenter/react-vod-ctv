import React from 'react';
import focusable from '../../hocs/focusable.jsx';
import * as playerStates from '../../constants/playerStates';

const decorateClassName = (className, focused) => {
    return focused
        ? `${className} ${className}--focused`
        : className;
}

export function PlayButton({
        item = {nav: {}},
        handlePlay,
        handlePause,
        videoState,
        focused
    }) {

    function handleClick() {
        if (videoState === playerStates.PLAYING) {
            handlePause();
        } else {
            handlePlay();
        }
    }

    const playState = videoState === playerStates.PLAYING
        ? 'PAUSE'
        : 'PLAY';

    return (
        <div
            onClick={handleClick}
            className={decorateClassName('play-button', focused)}
        >
            {playState}
        </div>
    );
}

export default focusable(PlayButton);