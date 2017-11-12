import React from 'react';
import focusable from 'hocs/focusable.jsx';
import PlayerCtrl from 'components/playerCtrl/PlayerCtrl.jsx';
import * as copy from 'constants/copy';

export function BackButton({focused}) {
    return (
        <PlayerCtrl
            className="icon"
            focused={focused}
            icon={copy.ICON_BACK}
            borderRadius="10px"
        >
        </PlayerCtrl>
    );
}

export default focusable(BackButton);