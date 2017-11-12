import React from 'react';
import styled from 'styled-components';
import * as dimensions from 'constants/dimensions';

const StyledDiv = styled.div`
    color: ${(props) => props.theme.ERROR_COLOUR};
    width: ${dimensions.APP_WIDTH / 2}px;
    margin: ${(dimensions.APP_HEIGHT / 2) - 15}px; auto 0 auto;
    text-align: center;
    font-size: 30px;
`;

export function Error({errorMessage}) {

    return (
        <StyledDiv>
            {errorMessage}
        </StyledDiv>
    );
}

export default Error;