import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";

function Signup() {
  return (
    <Container>
      <h3>회원가입</h3>
      <InputWrapper>
        <Input type="text" placeholder="이름을 입력해주세요" />
        <Input type="text" placeholder="이메일을 입력해주세요" />
        <Input type="text" placeholder="비밀번호를 입력해주세요" />
      </InputWrapper>
      <BtnWrapper>
        <Button>회원가입</Button>
        <Button bgColor="red">취소</Button>
      </BtnWrapper>
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
export default Signup;
