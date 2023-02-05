import { ThemeProvider } from "styled-components";
import "./App.css"; // webpack이라는 도구가 css, 이미지 파일 등 정적파일 로딩을 할 수 있게 해준다.

import Button from "./component/Button";

function App() {
  return (
    <div>
      <Button text="로그인" bgColor="red" />
      {/* bgColor="blue"를 지우면 컬러가 다른 컬러로 적용됨 */}
      <Button text="회원가입" big />
    </div>
  );
}

export default App;
