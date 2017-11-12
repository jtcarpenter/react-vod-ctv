import React from 'react';
import styled from 'styled-components';
import focusable from 'hocs/focusable.jsx';
import * as dimensions from 'constants/dimensions';
import ContentButtonTitle from
    'components/contentButtonTitle/ContentButtonTitle.jsx';
import ContentButtonThumb from
    'components/contentButtonThumb/ContentButtonThumb.jsx';

const StyledDiv = styled.div`
    width: ${(props) => {
        return props.item.category === 'hero'
            ? dimensions.HERO_CONTENT_BTN_WIDTH
            : dimensions.CONTENT_BTN_WIDTH;
    }}px;
    height: ${(props) => {
        return props.item.category === 'hero'
            ? dimensions.HERO_CONTENT_BTN_HEIGHT
            : dimensions.CONTENT_BTN_HEIGHT
    }}px;
    margin: ${(props) => {
        return props.item.category === 'hero'
            ? dimensions.HERO_CONTENT_BTN_MARGIN
            : dimensions.CONTENT_BTN_MARGIN
    }}px;
    border-style: solid;
    border-color: #666666;
    border-width: ${(props) => {
        return props.focused
            ? 7
            : 1
    }}px;
    border-radius: 5px;
    box-sizing: border-box;
    float: left;
    position: relative;
`;

export function ContentButton({item, focused}) {

    return (
        <StyledDiv
            item={item}
            focused={focused}
        >
            <ContentButtonTitle item={item}>
                {item.title}
            </ContentButtonTitle>
            <ContentButtonThumb item={item} src={item.thumb}/>
        </StyledDiv>
    );
}

export default focusable(ContentButton);