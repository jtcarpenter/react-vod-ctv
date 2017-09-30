import React from 'react';
import ContentButton from 'components/contentButton/ContentButton.jsx';
import styles from 'index.scss';

export function Lane({data, handleSelect, currentFocus, initialFocusKey}) {

    const focusedIndex = data.items.findIndex(
        (item) => item.nav.focusKey === currentFocus
    );
    const className = data.category === 'hero'
        ? 'lane lane--hero'
        : 'lane';
    const itemWidth = data.category === 'hero'
        ? parseInt(styles.HERO_CONTENT_BTN_WIDTH, 10)
        : parseInt(styles.CONTENT_BTN_WIDTH, 10);
    const itemMargin = data.category === 'hero'
        ? parseInt(styles.HERO_CONTENT_BTN_MARGIN, 10)
        : parseInt(styles.CONTENT_BTN_MARGIN, 10);
    const offset = (focusedIndex && focusedIndex > 0)
        ? itemWidth / 2
        : 0;
    const marginLeft = focusedIndex > -1
        ? -((focusedIndex * (
            itemWidth +
            (itemMargin * 2))
        ) - offset)
        : 0;
    const width = (itemWidth + (itemMargin * 2)) * data.items.length;
    const style = {
        marginLeft,
        width
    }

    return (
        <div className={className} style={style}>
            {data.items.map((item, index) =>
                <ContentButton
                    key={index}
                    index={index}
                    item={item}
                    handleSelect={handleSelect}
                    initialFocus={item.nav.focusKey === initialFocusKey}
                >
                </ContentButton>
            )}
        </div>
    )
}

export default Lane;