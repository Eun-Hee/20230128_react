import { createSlice, nanoid } from "@reduxjs/toolkit";

// src/redux/todoslice.js
const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "redux배우기", done: false }],
  reducers: {
    //createTodo(state, payload) {
    //state.push(payload);
    createTodo: {
      reducer: (state, actions) => {
        state.push(actions.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            done: false,
            createAt: new Date().toDateString(),
          },
        };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.done = !todo.done;
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
  //  },
});

export const { createTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
