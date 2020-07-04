import React from 'react';
import styled from 'styled-components';

const Container = styled.label`
    width: 20px;
    height: 20px;
    
    input {
        display: none;
    }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  width: 100%;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  border:  ${({ checked }) => (checked ? 'none' : '2px solid #bdbdbd')};
  background: ${({ checked, theme }) => (checked ? theme.accentColor : 'transparent')};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ checked, onChange }) => {
    return (
        <Container>
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <StyledCheckbox type="checkbox" checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </Container>
    )
};

export default Checkbox;