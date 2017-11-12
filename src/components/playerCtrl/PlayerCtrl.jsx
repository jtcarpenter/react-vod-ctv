import React from 'react';
import styled from 'styled-components';

export const PlayerCtrl = styled.div`
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${(props) => props.theme.PLAYER_CTRL_HEIGHT}px;
    margin-right: ${(props) => props.theme.PLAYER_CTRL_GAP_WIDTH}px;
    float: left;
    width: ${(props) => props.theme.PLAYER_CTRL_WIDTH}px;
    height: ${(props) => props.theme.PLAYER_CTRL_HEIGHT}px;
    &:last-child {
        margin-right: 0;
    };
    color: ${(props) => {
        return props.focused
            ? props.theme.PLAYER_CTRL_FG_COLOUR_FOCUSED
            : props.theme.PLAYER_CTRL_FG_COLOUR;
    }};
    background-color: ${(props) => {
        return props.focused
            ? props.theme.PLAYER_CTRL_BG_COLOUR_FOCUSED
            : props.theme.PLAYER_CTRL_BG_COLOUR;
    }};
    border-color: ${(props) => {
        return props.focused
            ? props.theme.PLAYER_CTRL_BG_COLOUR_FOCUSED
            : 'initial';
    }};
    border-radius: ${(props) => {
        return props.borderRadius
            ? props.borderRadius
            : 0;
    }};
    &:before {
        content: "${(props) => props.icon}";
    };
`;

export default PlayerCtrl;