//import TodoList from "./TodoList";

import React, { useState } from "react";

// 입력창...
function TodoCreat({ onSubmit }) {
  const [text, setText] = useState("");

  const handleText = (e) => setText(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
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
