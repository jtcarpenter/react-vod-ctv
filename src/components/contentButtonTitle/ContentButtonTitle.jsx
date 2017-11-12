import React from 'react';
import styled from 'styled-components';

export const ContentButtonTitle = styled.h2`
    text-align: ${(props) => {
        return props.item && props.item.category === 'hero'
            ? 'left'
            : 'center';
    }};
    margin: 15px 25px;
    font-size: 22px;
    font-size: ${(props) => {
        return props.item && props.item.category === 'hero'
            ? 30
            : 22;
    }}px;
    color: grey;
`;

export default ContentButtonTitle;