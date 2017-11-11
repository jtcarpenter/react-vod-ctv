import React from 'react';
import focusable from 'hocs/focusable.jsx';

const rootClassName = 'content-button';
const titleClassName = `${rootClassName}__title`;
const imgClassName = `${rootClassName}__thumb`;

const mixinFocusClassName = (className, focused) => {
    const focusClassName = focused
    ? `${className}--focused`
    : '';
    return `${className} ${focusClassName}`
}

const mixinHeroClassName = (className, isHero) => {
    const heroClassName = isHero
        ? `${className}--hero`
        : '';
    return `${className} ${heroClassName}`
}

export function ContentButton({item, focused}) {

    return (
        <div
            id={`content-button-${item.id}`}
            className={[
                mixinHeroClassName(
                    rootClassName,
                    item.category === 'hero'
                ),
                mixinFocusClassName(
                    rootClassName,
                    focused
                )
            ].join(' ')}
        >
            <h2
                className={mixinHeroClassName(
                    titleClassName,
                    item.category === 'hero'
                )}
            >
                {item.title}
            </h2>
            <img
                className={mixinHeroClassName(
                    imgClassName,
                    item.category === 'hero'
                )}
                src={item.thumb}
            />
        </div>
    );
}

export default focusable(ContentButton);