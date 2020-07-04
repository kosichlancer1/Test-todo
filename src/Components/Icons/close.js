import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
    cursor: pointer;

    &:hover {
       fill: ${({theme}) => theme.dangerColor};
    }
    
    &:focus {
        outline: none;
    }
`;

const CloseIcon = props => {
    return (
        <div {...props}>
            <StyledSvg viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" fill='#bdbdbd'>
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
            </StyledSvg>
        </div>
    )
};

export default CloseIcon;