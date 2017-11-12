import React from 'react';
import focusable from 'hocs/focusable.jsx';
import * as playerStates from 'constants/playerStates';
import PlayerCtrl from 'components/playerCtrl/PlayerCtrl.jsx';
import * as copy from 'constants/copy';

export function PlayButton({videoState, focused}) {
    const icon = videoState === playerStates.PLAYING
        ? copy.ICON_PAUSE
        : copy.ICON_PLAY
    return (
        <PlayerCtrl
            className="icon"
            focused={focused}
            borderRadius="50%"
            icon={icon}
            videoState={videoState}
        >
        </PlayerCtrl>
    );
}

export default focusable(PlayButton);