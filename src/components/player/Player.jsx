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
            <span>[playing asset with id: {data.id}]</span>
            <Video
                data={data}
                videoState={videoState}
            />
            <div className="player-controls">
                <BackButton
                    item={navItems[0]}
                />
                <PlayButton
                    item={navItems[1]}
                />
            </div>
        </div>
    )
}

export default Player;