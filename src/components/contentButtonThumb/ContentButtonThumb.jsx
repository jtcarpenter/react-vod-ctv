import React from 'react';
import styled from 'styled-components';

export const ContentButtonThumb = styled.img`
    display: block;
    position: absolute;
    bottom: 25px;
    left: ${(props) => {
        return props.item && props.item.category === 'hero'
            ? 0
            : 50;
    }}%;
    margin-left: ${(props) => {
        return props.item && props.item.category === 'hero'
            ? 25
            : -100;
    }}px;
`;

export default ContentButtonThumb;