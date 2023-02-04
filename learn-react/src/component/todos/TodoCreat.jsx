//import TodoList from "./TodoList";

//import { useRef, useState } from "react";

// 입력창...
function TodoCreat({ onChange, onSubmit, text }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreat;
