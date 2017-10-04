import React from 'react';

export function Error({errorMessage}) {

    return (
        <div className="error">
            {errorMessage}
        </div>
    );
}

export default Error;