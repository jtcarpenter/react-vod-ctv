import {getId} from './platform';
import * as platformIds from '../constants/platformIds';

const firetvUserAgent = `\
    Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; AFTB Build/JDQ39) \
    AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';`;
const desktopUserAgent = `\
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) \
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"`;

describe('platform', () => {
    it(`identifies ${platformIds.FIRETV_ID} from userAgent`, () => {
        expect(getId(firetvUserAgent)).toBe(platformIds.FIRETV_ID);
    });

    it(`identifies ${platformIds.DESKTOP_ID} from userAgent`, () => {
        expect(getId(desktopUserAgent)).toBe(platformIds.DESKTOP_ID);
    });
});