import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
//import Counter from "./component/Counter";
import Todos from "./component/Todos";
import { counterReducer } from "./redux/counter";
// import { todoReducer } from "./redux/todos";
//import { todoToolkitReducer, todoReducer } from "./redux/todos_toolkit";
import { todoToolkitReducer, todoReducer } from "./redux/todoSlice";

const store = configureStore({
  // 속성 이름이 상태값의 이름이 된다.
  reducer: {
    counter: counterReducer,
    //todos: todoReducer,
    //todos: todoToolkitReducer,
    todos: todoReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      {/* <Counter />; */}
      <Todos />
    </Provider>
  );
}

export default App;
