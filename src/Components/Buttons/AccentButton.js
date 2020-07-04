import React from 'react';
import styled from 'styled-components';

const AccentButton = styled.button`
    color: #fff;
    background: ${({ theme }) => theme.accentColor};
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    
    &:disabled {
        background: #bdbdbd;
    }
    
    &:focus {
        outline: none;
    }
    
    &:hover {
       opacity: 0.8;
    }
`;

export default AccentButton;