import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { todos as TodosActions } from '../Store/actions';
import { TodoItem, TodoForm } from '../Components';
import { AddIcon } from '../Components/Icons';

const TodosContainer = styled.section` 
   max-width: 768px;
   margin: 0 auto;
   padding: 2rem 0;
   display: grid;
   grid-gap: 1.5rem;
`;

const TodosNotFound = styled.p`
    font-size: 2rem;
    padding-top: 4rem;
    text-align: center;
`;

const AddTodoButton = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    width: 5rem;
`;


const TodosList = () => {
    const dispatch = useDispatch();
    const [showTodoForm, setShowTodoForm] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const todos = useSelector(state => state.todos);

    const handleCloseForm = () => {
        setShowTodoForm(false);
        setSelectedTodo(null);
    };

    const handleOpenForm = () => setShowTodoForm(true);

    const handleSelectTodo = useCallback((id) => {
        const todoById = todos.find(item => item.id === id);
        setSelectedTodo(todoById);
        todoById && handleOpenForm()
    }, [todos, setSelectedTodo, setShowTodoForm]);

    const handleSubmit = useCallback((todo) => {
        const action = selectedTodo ? TodosActions.editTodo : TodosActions.addTodo;
        dispatch(action(todo));

        handleCloseForm()
    }, [selectedTodo]);

    const handleStatusChange = useCallback((id) => {
        dispatch(TodosActions.toggleTodo(id));
    }, [todos]);

    const handleRemoveTodo = useCallback( (id) => dispatch(TodosActions.removeTodo(id)), [])

    return (
        <TodosContainer>
            {showTodoForm && (
                <TodoForm
                    todo={selectedTodo}
                    onSubmit={handleSubmit}
                    onCloseForm={handleCloseForm}
                />
             )
            }
            <>
                {
                    todos.length ? (
                        todos.map(todo => (
                                <TodoItem
                                    key={todo.id}
                                    onStatusChange={handleStatusChange}
                                    onSelectTodo={handleSelectTodo}
                                    onRemove={handleRemoveTodo}
                                    {...todo}
                                />
                            )
                        )
                    ) : (
                        <TodosNotFound>
                            No tasks found.
                            Create a new task to display
                        </TodosNotFound>
                    )
                }
            </>
            <AddTodoButton onClick={handleOpenForm}>
                <AddIcon />
            </AddTodoButton>
        </TodosContainer>
    )
};

export default TodosList;