import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";

function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <h3>로그인</h3>
      <form>
        <InputWrapper>
          <Input type="text" name="email" placeholder="이메일을 입력해주세요" />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </InputWrapper>
        <BtnWrapper>
          <Button>로그인</Button>
          <Button bgColor="black" onClick={() => navigate("/auth/signup")}>
            회원가입
          </Button>
        </BtnWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
`;

const InputWrapper = styled.div`
  margin: 30px 0 20px;
  input + input {
    margin-top: 4px;
  }
`;
const BtnWrapper = styled.div`
  text-align: center;
  button + button {
    margin-top: 4px;
  }
`;

export default Login;
