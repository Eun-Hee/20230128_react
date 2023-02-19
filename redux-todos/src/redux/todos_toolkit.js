import { createAction } from "@reduxjs/toolkit";
import produce from "immer";

// src/redus/todos_toolkit.js
export const createTodo = createAction("todos/create");

export function todoToolkitReducer(state = [], action) {
  switch (action.type) {
    case createTodo.type:
      // immer에서 제공하는 producd함수를 사용하면 불변성을 신경쓰지 않아도 된다.
      return produce(state, (draft) => {
        draft.push({ id: action.id, text: action.text, done: false });
      });
    case "asd":
      return produce(state, (draft) => {
        //  불변성을 신경쓰지 않아도 돼서 찾아서 done값을 직접 변경
        const todo = draft.find((todo) => todo.id === action.id);
        todo.done = !todo.done;
      });
    case "sss":
      // 객체 하나만 지우는 경우 원본을 변경하는 방식보다 filter가 간단하다.
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
