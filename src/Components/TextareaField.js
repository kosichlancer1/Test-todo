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

const Textarea = styled.textarea`
    outline: none;
    width: 100%;
    border: 1px solid #bdbdbd;
    padding: 0.5rem 1rem;
    font-family: 'Roboto', sans-serif;
    resize: none;
    
    &:focus {
       border-color: ${({ theme }) => theme.accentColor};
    }
`;

const TextareaField = ({ label, value, ...props }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Textarea defaultValue={value} rows='6' {...props} />
        </Container>
    )
};

export default TextareaField;