import styled from "styled-components";

function Flex() {
  return (
    <Container>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
      <Item>ITEM</Item>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 3px solid red;
`;

const Item = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  color: #fff;
`;

export default Flex;
