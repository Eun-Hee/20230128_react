import { useEffect, useReducer, useState, useRef, useCallback } from "react";
//import { act } from "react-dom/test-utils";
//import Counter from "./Counter";
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

function Todos() {
  // useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const handleText = (e) => setText(e.target.value);

  const nextId = useRef(4);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // dispatch({ type: "create", id : nextId.current++, text : text });
      dispatch({ type: "create", id: nextId.current++, text });
      console.log(todos);
      setText(() => "");
    },
    [text]
  );

  const hanleRemove = useCallback((id) => {
    if (window.confirm("삭제하시겠습니까?")) dispatch({ type: "remove", id });
  }, []);

  const handleToggle = useCallback(
    (id) => dispatch({ type: "toggle", id }),
    []
  );
  useEffect(() => {}, []);

  //const handleCreate = () => {};

  return (
    <div>
      <TodoCreat onChange={handleText} onSubmit={handleSubmit} text={text} />
      {/*<TodoCreat dispatch={dispatch} /> */}
      <TodoList todos={todos} onRemove={hanleRemove} onToggle={handleToggle} />

      {/* <Counter /> */}
    </div>
  );
}

export default Todos;
