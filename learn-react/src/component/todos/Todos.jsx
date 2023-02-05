import {
  useEffect,
  useReducer,
  useRef,
  useCallback,
  createContext,
} from "react";
import TodoCreat from "./TodoCreat";
import TodoList from "./TodoList";

// reducer함수의 return값이 상태로 업데이트 된다.
function reducer(state, action) {
  //console.log(state, action);
  //return 0;
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
  //return [...state, { id: 4, text: "테스트", done: false }];
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useRecucer 배우기", done: false },
  { id: 3, text: "useCallback, useMemo 배우기", done: false },
];

// stat값(TodoStatContext) 전달
export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

function Todos() {
  // useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        <div>
          <TodoCreat />

          <TodoList />
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default Todos;
