// 할일들을 나열해주는 역할

import React, { useMemo } from "react";
import { useTodoState, useTodoDispatch } from "../../context/todos";

function countUndoneTodo(todos) {
  return todos.filter((todo) => !todo.done).length;
}

function TodoList() {
  const todos = useTodoState();

  // 의존성 배열에 있는 값이 변했을 때에만 다시 연산한다.
  const undoneCount = useMemo(() => {
    return countUndoneTodo(todos);
  }, [todos]);

  console.log("rendering.....");

  return (
    <div>
      해야할일 : {undoneCount}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();

  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => dispatch({ type: "toggle", id: todo.id })}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
        삭제
      </button>
    </li>
  );
}

// React.memo : 컴포넌트가 받는 props가 변경 되었을때만 렌더링이 다시 일어난다.
export default React.memo(TodoList);
