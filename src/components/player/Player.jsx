import React from
    'react';
import PlayButton from
    '../../containers/playButtonContainer/PlayButtonContainer.jsx';
import BackButton from
    '../../containers/backButtonContainer/BackButtonContainer.jsx';
import Video from
    '../../containers/videoContainer/VideoContainer.jsx';

export function Player({data, videoState, navItems}) {

    return (
        <div>
            <Video
                data={data}
                videoState={videoState}
            />
            <div className="player-controls">
                <div className="player-title">
                    {data.title}
                </div>
                <BackButton
                    item={navItems[0]}
                />
                <PlayButton
                    item={navItems[1]}
                    initialFocus="true"
                />
            </div>
        </div>
    )
}

export default Player;