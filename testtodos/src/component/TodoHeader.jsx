import styled from "styled-components";

function TodoHeader() {
  return (
    <div>
      <DateText>2023년 2월 21일</DateText>
      <CountText>해야할 일 : 1/3</CountText>
    </div>
  );
}

const Container = styled.div`
  border-bottom: 2px solid;
  padding: 10px;
`;

const DateText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const CountText = styled.span`
  font-size: 0.8rem;
  color: "#888";
`;

export default TodoHeader;