import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: ${({ theme }) => theme.accentColor};
`;

const HeaderLogo = styled.div`
    font-size: 2rem;
    color: #fff;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>TEST ToDo</HeaderLogo>
        </HeaderContainer>
    )
};

export default Header;
