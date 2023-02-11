import axios from "axios";
import { useEffect, useState } from "react";

// src/component/preactice/Todo.jsx
function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({
    isLoading: true,
    data: null,
    isError: false,
  });

  const { data, isLoading, isError } = todos; // 비구조할당

  const fetchData = async () => {
    // await : Promise가 resolve되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos"); // fech()는 기본적으로 get 요청을 한다.
    const data = await res.json();

    setTodos({
      isLoading: false,
      data,
      isError: false,
    });

    //console.log(data);
  };

  const handleSubmit = async () => {
    try {
      /*
        const res = await fetch("http://localhost:5000/todos", {
            method: "POST",
            body: JSON.stringify({
              text,
              done: false,
            }),
            Headers: {
              "Content-Type": "application/json",
            },
          });
          */
      //await res.json();

      // 등록버튼 누르면 loading 중으로 바꾸기
      setTodos({
        ...Todos,
        isLoading: true,
      });

      const res = await axios.post("http://localhost:5000/todos", {
        text,
        done: false,
      });

      await fetchData(); // 서버에 반영된 데이터를 가지고 옴
      //setTodos([...todos, data]); // 서버에 반영된 데이터와 다르므로 실시간 데이터를 사용해야 하는 경우는 부적합
      //console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemove = async (id) => {
    const res = await axios.delete("http://localhost:5000/todos/" + id);

    //console.log(res);
    await fetchData();
  };

  const handleToggle = async (id, done) => {
    try {
      await axios.patch("http://localhost:5000/todos/" + id, {
        done,
      });
      await fetchData();
    } catch (e) {
      setTodos({
        isLoading: false,
        data: todos.data,
        isError: true,
      });
    }
  };

  //useEffect(() => { fetch("http://localhost:5000/todos").then((res) => res.json()).then((data) => console.log(data)); }, []);
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div>로딩중....</div>;
  // if (isLoading) return <div>로딩중....</div>; 비구조할당시 이렇게 수정

  if (todos.isError) return <div>에러 발생!</div>;
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.data.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && "line-through" }}
              onClick={() => handleToggle(todo.id, !todo.done)}
            >
              {todo.text}
            </span>

            {""}
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
