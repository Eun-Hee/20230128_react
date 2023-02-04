//import { useState } from "react";
import "./App.css";
//import Inputs from "./component/Inputs";
//import Effect from "./component/todos/Effect";
import Todos from "./component/todos/Todos";
//import Counter from "./component/Counter";
//import InputText from "./component/InputText";
//import TodoList from "./component/TodoList";
import { createContext, useContext, useState } from "react";

// 전역에 공유하고 싶은 값을 전달하는 컨텍스트 생성
//  => 기본값은 Provider 밖에서 useContext했을 때 반환되는 값
export const CountContext = createContext(0);

function App() {
  const [count, setCount] = useState(10);

  const value = useContext(CountContext);
  console.log(value);
  return (
    <CountContext.Provider value={count}>
      <Todos />
    </CountContext.Provider>
  );
}

export default App;
