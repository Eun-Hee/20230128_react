// 할일들을 나열해주는 역할

import React, { useContext, useMemo } from "react";
import { CountContext } from "../../App";

function countUndoneTodo(todos) {
  console.log("안 한일 세는중...");
  return todos.filter((todo) => !todo.done).length;
}

// {todos : [], avtive : false}
function TodoList({ todos, onRemove, onToggle }) {
  // 의존성 배열에 있는 값이 변했을 때에만 다시 연산한다.
  const undoneCount = useMemo(() => {
    return countUndoneTodo(todos);
  }, [todos]);

  console.log("rendering.....");
  console.log(undoneCount);
  console.log(todos);
  return (
    <div>
      해야할일 : {undoneCount}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onRemove, onToggle }) {
  const count = useContext(CountContext);

  console.log(count);
  //{
  /*const hanleRemove = (id) => {
    if (window.confirm("삭제하시겠습니까?")) dispatch({ type: "remove", id });
  };
*/
  // }
  console.log(todo);
  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  );
}

// React.memo : 컴포넌트가 받는 props가 변경 되었을때만 렌더링이 다시 일어난다.
export default React.memo(TodoList);
