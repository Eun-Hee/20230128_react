function TodoList() {
  return (
    <div>
      <ul>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </ul>
    </div>
  );
}

export default TodoItem;

function TodoItem() {
    return (
        <li>
            <span>해야할일</span>
            <button>삭제</button>
        </li>
    );
}

export default TodoItem