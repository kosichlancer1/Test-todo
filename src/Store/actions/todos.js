export const ActionTypes = {
    ADD: 'ADD_TODO',
    REMOVE: 'REMOVE_TODO',
    EDIT: 'EDIT_TODO',
    TOGGLE: 'TOGGLE_TODO'
};

export const addTodo = payload => ({
    type: ActionTypes.ADD,
    payload
});

export const editTodo = payload => ({
    type: ActionTypes.EDIT,
    payload
});

export const toggleTodo = id => ({
    type: ActionTypes.TOGGLE,
    id
});

export const removeTodo = id => ({
    type: ActionTypes.REMOVE,
    id
});

export default {
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo
}