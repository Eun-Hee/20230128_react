import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../redux/todos";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const { id, text, done } = todo;

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li>
      <span
        style={{ textDecoration: done && "line-through" }}
        onClick={handleToggle}
      >
        {text}
      </span>
      <button>삭제</button>
    </li>
  );
}

export default TodoList;