import styled from "styled-components";
import Button from "./Button";

function TodoCreate() {
  return (
    <Container>
      <Input type="text" />
      <Button text="등록" />
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default TodoCreate;
