import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all', // all, done, not-done
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.description = description;
      }
    },
  },
});

export const { addTodo, toggleTodo, setFilter, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;