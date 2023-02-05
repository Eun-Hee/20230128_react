import { ThemeProvider } from "styled-components";
import "./App.css"; // webpack이라는 도구가 css, 이미지 파일 등 정적파일 로딩을 할 수 있게 해준다.

import Button from "./component/Button";

function App() {
  return (
    <div>
      <Button text="로그인" bgColor="red" />
      <Button text="회원가입" bgColor="blue" big />
    </div>
  );
}

export default App;
