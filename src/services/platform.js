import * as platformIds from '../constants/platformIds';
import * as platformRegExp from '../constants/platformRegExp';

export const getId = (ua) => {
    const matches = [];
    let id = platformIds.DESKTOP_ID;
    if (ua.toLowerCase().match(new RegExp(platformRegExp.FIRETV_REGPEXP))) {
        matches.push(platformIds.FIRETV_ID);
    }
    if (matches.length > 1) {
        throw Error('matched more than one userAgent');
    }
    if (matches.length === 1) {
        [id] = matches;
    }
    return id;
};

const id = getId(window.navigator.userAgent);

export const platform = {
    id
}

export default platform;