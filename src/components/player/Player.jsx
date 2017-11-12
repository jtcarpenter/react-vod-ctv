import React from 'react';
import styled from 'styled-components';
import PlayButton from
    'containers/playButtonContainer/PlayButtonContainer.jsx';
import BackButton from
    'containers/backButtonContainer/BackButtonContainer.jsx';
import Video from
    'containers/videoContainer/VideoContainer.jsx';
import * as dimensions from 'constants/dimensions';
import PlayerTitle from 'components/playerTitle/PlayerTitle.jsx';
import PlayerCtrls from 'components/playerCtrls/PlayerCtrls.jsx';

const StyledDiv = styled.div`
    border: 1px dashed grey;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0 15px 0;
    position: absolute;
    margin-left: 20px;
    margin-right: 20px;
    bottom: 25px;
    width: ${dimensions.APP_WIDTH - (10 * 2) - (5 * 2)}px;
    background-color: ${(props) => props.theme.PLAYER_CTRLS_BG_COLOUR};
`;

export function Player({data, videoState, navItems, handleBack}) {

    return ([
        <Video
            key="video"
            data={data}
            videoState={videoState}
        />,
        <StyledDiv key="player-ctrls">
            <PlayerTitle>
                {data.title}
            </PlayerTitle>
            <PlayerCtrls>
                <BackButton
                    item={navItems[0]}
                    handleBack={handleBack}
                />
                <PlayButton
                    item={navItems[1]}
                    initialFocus={true}
                />
            </PlayerCtrls>
        </StyledDiv>
    ])
}

export default Player;