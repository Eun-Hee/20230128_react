import TodoCreat from "./TodoCreat";
import TodoList from "./TodoList";

function Todos() {
  // useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수 반환

  return (
    <div>
      <TodoCreat />
      <TodoList />
    </div>
  );
}

export default Todos;
