import React from 'react';
import ContentButton from '../contentButton/ContentButton.jsx';
import styles from '../../index.scss';

export function Lane({data, handleSelect, currentFocus, initialFocusKey}) {

    const focusedIndex = data.items.findIndex(
        (item) => item.nav.focusKey === currentFocus
    );
    const style = {
        marginLeft: focusedIndex > -1
            ? -(focusedIndex * (
                parseInt(styles.CONTENT_BTN_WIDTH, 10) +
                (parseInt(styles.CONTENT_BTN_MARGIN, 10) * 2))
            )
            : 0
    }

    return (
        <div className="lane" style={style}>
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