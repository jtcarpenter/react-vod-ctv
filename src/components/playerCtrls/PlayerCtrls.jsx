import React from 'react';
import styled from 'styled-components';

export const PlayerCtrls = styled.div`
    text-align: center;
    width: ${(props) => {
        return (props.theme.PLAYER_CTRL_WIDTH * 2) +
            (props.theme.PLAYER_CTRL_BORDER_WIDTH * 4) +
            (Number(props.theme.PLAYER_CTRL_GAP_WIDTH) * 1)
    }}px;
    margin: 0 auto;
`;

export default PlayerCtrls;