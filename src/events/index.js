
export const todoDeleted = todo => {
  return { type: 'EVENT_TODO_DELETED', todo };
}

export const todoAdded = todoId => {
  return { type: 'EVENT_TODO_ADDED', todoId };
}
