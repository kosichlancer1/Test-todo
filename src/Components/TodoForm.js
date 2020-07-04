import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputField, TextareaField, Card } from './index';
import { AccentButton } from './Buttons';
import { CloseIcon } from './Icons';

const Form = styled.form`
    position: relative;
`;

const StyledCard = styled(Card)`
    padding-top: 2rem;
    position: relative;
    
    svg {
       width: 30px;
       height: 30px;
    }
`;

const CloseForm = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2;
`;

const FormTitle = styled.h2`
   margin-top: 0;
`;

const TodoForm = ({ todo, onSubmit, onCloseForm }) => {
    const [ currentTodo, setCurrentTodo ] = useState(null);

    useEffect(() => {
        setCurrentTodo(todo);
    }, [ todo ]);

    const handleChange = useCallback((e) => {
        setCurrentTodo({ ...currentTodo, [e.target.name] : e.target.value })
    }, [currentTodo]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit(currentTodo);
    }, [currentTodo]);

    return (
        <StyledCard>
            <CloseForm onClick={onCloseForm}>
                <CloseIcon />
            </CloseForm>
            <FormTitle>
                {todo ? `Edit todo - "${currentTodo?.id}"` : 'Create new todo'}
            </FormTitle>
            <Form onSubmit={handleSubmit}>
                <InputField
                    name='title'
                    label='Title'
                    type='input'
                    value={currentTodo?.title}
                    onChange={handleChange}
                    required
                />
                <TextareaField
                    name='description'
                    label='Description'
                    value={currentTodo?.description}
                    onChange={handleChange}
                    required
                />
                <AccentButton type='submit'>{todo ? 'Edit' : 'Create'}</AccentButton>
            </Form>
        </StyledCard>
    )
};

export default TodoForm;