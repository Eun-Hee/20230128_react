import './App.css';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';
import styled, { createGlobalStyle } from "styled-components"
import TodoHeader from './component/TodoHeader';

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
        <TodoList/>
        <TodoCreate />
      </Container> 
    </div>
  );
  }

 const Container = styled.div`
  border: 2px solid;
`;  

export default App;
