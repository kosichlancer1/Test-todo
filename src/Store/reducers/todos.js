import { getRandomId } from '../../Utils'
import { ActionTypes } from '../actions/todos';

const initialState = [
    {
        id: getRandomId(),
        title: 'Test todo title',
        description: 'Test todo description',
        completed: false
    }
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD:
            return [
                ...state,
                {
                    id: getRandomId(),
                    title: action.payload.title,
                    description: action.payload.description,
                    completed: false
                }
            ]
        case ActionTypes.EDIT:
            return state.map(todo =>
                (todo.id === action.payload.id)
                    ? {...todo, description: action.payload.description, title: action.payload.title}
                    : todo
            )
        case ActionTypes.TOGGLE:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case ActionTypes.REMOVE:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default todos
