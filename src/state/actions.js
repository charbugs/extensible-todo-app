import uuid from 'uuid/v4';
import * as events from '../events';

/***************************************
Basic Actions
***************************************/

export function createTodo(payload) {
  const id = `todo-${uuid()}`;
  return {
    id,
    type: 'CREATE_TODO',
    payload: { ...payload, id  }
  };
}

export function updateTodo(id, payload) {
  return { type: 'UPDATE_TODO', id, payload };
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', id };
}

export function updateTodoFilter(payload) {
  return { type: 'UPDATE_TODO_FILTER', payload };
}

/***************************************
Higher Actions
***************************************/

export const addTodoItem = (user, text, date) => (dispatch, getState) => {
  const todoId = dispatch(createTodo({ user, text, date: date.toLocaleTimeString() })).id;
  dispatch(updateTodoFilter([ ...getState().todoFilter, todoId ]));
}

export const filterTodosByRegex = (field, regex) => (dispatch, getState) => {
  const ids = Object.values(getState().todos)
    .filter(todo => todo[field].search(regex) > -1)
    .map(todo => todo.id);
  dispatch(updateTodoFilter(ids));
}

export const trashTodo = (todoId) => (dispatch, getState) => {
  const todo = getState().todos[todoId];
  dispatch(deleteTodo(todoId));
  dispatch(updateTodoFilter(getState().todoFilter.filter(id => id !== todoId)));
  dispatch(events.todoDeleted(todo));
}
