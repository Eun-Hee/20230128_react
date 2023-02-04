import { useEffect, useReducer } from "react";
import Counter from "./Counter";
//import TodoCreat from "./TodoCreat";
//import TodoList from "./TodoList";

// reducer함수의 return값이 상태로 업데이트 된다.
function reducer(state, action) {
  //console.log(state, action);
  //return 0;
  return [...state, { id: 4, text: "테스트", done: false }];
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useRecucer 배우기", done: false },
  { id: 3, text: "useCallback, useMemo 배우기", done: false },
];

function Todos() {
  // useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);

  console.log(todos);

  useEffect(() => {
    dispatch({ test: "test" });
  }, []);

  const handleCreate = () => {};

  return (
    <div>
      {/* <TodoCreat />
      <TodoList todos={todos} /> */}

      <Counter />
    </div>
  );
}

export default Todos;
