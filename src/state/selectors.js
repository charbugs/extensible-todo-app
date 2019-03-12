
export const getTodoDates = (state) => {
  return Object.values(state.todos).map(todo => todo.date);
};
