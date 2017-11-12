import React from 'react';
import styled from 'styled-components';

export const PlayerTitle = styled.div`
    margin-left: 0;
    float: none;
    display: block;
    font-size: 30px;
    color: ${(props) => props.theme.PLAYER_CTRL_BG_COLOUR_FOCUSED};
    margin-bottom: 10px;
    height: auto;
    width: 100%;
    text-align: center;
`;

export default PlayerTitle;