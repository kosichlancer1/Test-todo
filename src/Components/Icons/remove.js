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

const RemoveIcon = props => {
    return (
        <div {...props}>
            <StyledSvg viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" fill='#bdbdbd'>
                <path
                    d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2,-0.9,2,-2v-12h-12v12zm13,-15h-3.5l-1,-1h-5l-1,1h-3.5v2h14v-2z"
                >
                </path>
            </StyledSvg>
        </div>
    )
};

export default RemoveIcon;