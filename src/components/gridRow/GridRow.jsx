import React from 'react';
import ContentButton from '../contentButton/ContentButton.jsx';

export function GridRow({row, handleSelect}) {

    return (
        <div className="grid-row">
            {row.map((item, index) =>
                <ContentButton
                    key={index}
                    index={index}
                    item={item}
                    handleSelect={handleSelect}
                >
                </ContentButton>
            )}
        </div>
    )
}

export default GridRow;