import React from
    'react';
import PlayButton from
    'containers/playButtonContainer/PlayButtonContainer.jsx';
import BackButton from
    'containers/backButtonContainer/BackButtonContainer.jsx';
import Video from
    'containers/videoContainer/VideoContainer.jsx';

export function Player({data, videoState, navItems, handleBack}) {

    return (
        <div>
            <Video
                data={data}
                videoState={videoState}
            />
            <div className="player-ctrls">
                <div className="player-ctrls-title">
                    {data.title}
                </div>
                <div className="player-ctrls-btns">
                    <BackButton
                        item={navItems[0]}
                        handleBack={handleBack}
                    />
                    <PlayButton
                        item={navItems[1]}
                        initialFocus="true"
                    />
                </div>
            </div>
        </div>
    )
}

export default Player;