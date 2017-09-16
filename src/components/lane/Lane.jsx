import React from 'react';
import ContentButton from '../contentButton/ContentButton.jsx';

export function Lane({data, handleSelect, currentFocus, initialFocusKey}) {

    const focusedIndex = data.items.findIndex(
        (item) => item.nav.focusKey === currentFocus
    );
    const style = {
        marginLeft: focusedIndex > -1
            ? -(focusedIndex * 110)
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