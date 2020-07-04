import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.4rem;
`;

const Input = styled.input`
    outline: none;
    border: 1px solid #bdbdbd;
    width: 100%;
    padding: 0.5rem 1rem;
    
    &:focus {
       border-color: ${({ theme }) => theme.accentColor};
    }
`;

const InputField = ({ label, ...props }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Input {...props}></Input>
        </Container>
    )
};

export default InputField;