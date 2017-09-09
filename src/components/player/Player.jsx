import React from 'react';
import {Link} from 'react-router-dom';
import PlayButton from
    '../../containers/playButtonContainer/PlayButtonContainer.jsx';
import ProgressBar from '../../components/progressBar/ProgressBar.jsx';
import Video from '../../containers/videoContainer/VideoContainer.jsx';

export function Player({data, videoState, navItems}) {

    return (
        <div>
            <span>[playing asset with id: {data.id}]</span>
            <Link to={'/'}>[&#9668; BACK]</Link>
            <Video
                data={data}
                videoState={videoState}
            />
            <div className="player-controls">
                <PlayButton
                    item={navItems[0]}
                />
                <ProgressBar
                    item={navItems[1]}
                />
            </div>
        </div>
    )
}

export default Player;