import React from 'react';
import ContentButton from 'components/contentButton/ContentButton.jsx';
import styled from 'styled-components';
import * as dimensions from 'constants/dimensions';

const StyledDiv = styled.div`
    height: ${(props) => {
        return props.category === 'hero'
            ? dimensions.CONTENT_BTN_HEIGHT +
                (dimensions.CONTENT_BTN_MARGIN * 2)
            : dimensions.HERO_CONTENT_BTN_HEIGHT +
                (dimensions.HERO_CONTENT_BTN_MARGIN * 2);
    }}px;
    width: ${(props) => {
        return (props.itemWidth + (props.itemMargin * 2)) * props.numItems
    }}px;
    margin-top: ${(props) => props.theme.LANE_MARGIN}px;
    margin-right: ${(props) => props.theme.LANE_MARGIN}px;
    margin-bottom: ${(props) => props.theme.LANE_MARGIN}px;
    margin-left: ${(props) => {
        return props.focusedIndex > -1
            ? -((props.focusedIndex * (
                props.itemWidth +
                (props.itemMargin * 2))
            ) - props.offset)
            : 0;
    }}px;
`;

export function Lane({data, handleSelect, currentFocus, initialFocusKey}) {

    const focusedIndex = data.items.findIndex(
        (item) => item.nav.focusKey === currentFocus
    );
    const itemWidth = data.category === 'hero'
        ? parseInt(dimensions.HERO_CONTENT_BTN_WIDTH, 10)
        : parseInt(dimensions.CONTENT_BTN_WIDTH, 10);
    const itemMargin = data.category === 'hero'
        ? parseInt(dimensions.HERO_CONTENT_BTN_MARGIN, 10)
        : parseInt(dimensions.CONTENT_BTN_MARGIN, 10);
    const offset = (focusedIndex && focusedIndex > 0)
        ? itemWidth / 2
        : 0;
    const numItems = data.items.length;

    return (
        <StyledDiv
            category={data.category}
            itemWidth={itemWidth}
            itemMargin={itemMargin}
            focusedIndex={focusedIndex}
            offset={offset}
            numItems={numItems}
        >
            {data.items.map((item, index) =>
                <ContentButton
                    key={index}
                    index={index}
                    item={item}
                    itemMargin={itemMargin}
                    handleSelect={handleSelect}
                    initialFocus={item.nav.focusKey === initialFocusKey}
                >
                </ContentButton>
            )}
        </StyledDiv>
    )
}

export default Lane;