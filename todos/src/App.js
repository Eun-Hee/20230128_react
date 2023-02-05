import "./App.css"; // webpack이라는 도구가 css, 이미지 파일 등 정적파일 로딩을 할 수 있게 해준다.
import TodoHeader from "./component/TodoHeader";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";
import styled, { createGlobalStyle } from "styled-components";
import Flex from "./component/Flex";

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding : 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: non;
        color : inherit;
    }

    li {
        list-style: none;
    }
`;

function App() {
  return (
    <div>
      <Container>
        <GlobalStyle />
        <TodoHeader />
        <TodoList />
        <TodoCreate />

        {/* <Flex></Flex> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default App;
