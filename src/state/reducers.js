import { setIn, updateIn, merge, removeIn } from 'immutable';
import { combineReducers } from 'redux';

const defaultTodoState = {
  'todo-1': {
    id: 'todo-1',
    user: 'Rigby',
    text: 'Play video games',
    date: (new Date()).toLocaleTimeString(),
  },
  'todo-2': {
    id: 'todo-2',
    user: 'Mordecai',
    text: 'Meet with Margarete',
    date: (new Date()).toLocaleTimeString(),
  }
}

function todoReducer(state = defaultTodoState , action) {
  switch (action.type) {
    case 'CREATE_TODO':
      return setIn(state, [action.id], action.payload)
    case 'UPDATE_TODO':
      return updateIn(state, [action.id], orig => merge(orig, action.payload))
    case 'DELETE_TODO':
      return removeIn(state, [action.id])
    default:
      return state
  }
}

const defaultTodoFilterState = [ 'todo-1', 'todo-2' ];

function todoFilterReducer(state = defaultTodoFilterState, action) {
  switch (action.type) {
    case 'UPDATE_TODO_FILTER':
      return action.payload
    default:
      return state
  }
}

export default function creatRootReducer(pluginReducers) {
  return combineReducers({
    todos: todoReducer,
    todoFilter: todoFilterReducer,
    ...pluginReducers
  });
}
