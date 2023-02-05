//import TodoList from "./TodoList";

import React, { useContext, useRef, useState } from "react";
//import { TodoDispatchContext } from "./Todos";
import { TodoDispatchContext } from "./Todos";

// 입력창...
function TodoCreat({ onSubmit }) {
  const [text, setText] = useState("");
  const dispatch = useContext(TodoDispatchContext);
  const nextId = useRef(4);

  const handleText = (e) => setText(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "creat", id: nextId.current++, text });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoCreat);
