import React, {useCallback} from 'react';
import styled from 'styled-components';
import Card from './Card';
import Checkbox from './Checkbox';
import { RemoveIcon, EditIcon }  from './Icons'

const TodoHeader = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 60px;
    align-items: center;
    margin: 0 0 1rem;
`;

const TodoTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 0;
`;

const TodoDescription = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
`;

const TodoActions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.8rem;
    
    svg {
        width: 25px;
        height: 25px;
    }
`;

const TodoId = styled.span`
    display: block;
    font-weight: 300;
    font-size: 0.7rem;
`;

const TodoItem = ({ id, title, description, completed, onStatusChange, onRemove, onSelectTodo }) => {
    const handleRemove = useCallback(() => onRemove(id), [onRemove]);
    const handleSelect = useCallback(() => onSelectTodo(id), [onSelectTodo]);
    const handleChangeStatus = useCallback(() => onStatusChange(id), [onStatusChange]);

    return (
        <Card>
            <TodoHeader>
                <Checkbox
                    checked={completed}
                    onChange={handleChangeStatus}
                />
                <TodoTitle>
                    {title}
                    <TodoId>ID: {id}</TodoId>
                </TodoTitle>

                <TodoActions>
                    <EditIcon onClick={handleSelect} />
                    <RemoveIcon onClick={handleRemove} />
                </TodoActions>
            </TodoHeader>
            <TodoDescription>{description}</TodoDescription>
        </Card>
    )
};

export default TodoItem;