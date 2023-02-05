import styled from "styled-components";

function Button() {
  return <StyledButton>Button</StyledButton>;
}
const StyledButton = styled.div`
  width: 100px;
  padding: 5px 0;
  border-radius: 50%;
  background-color: red;
  color: #ffff;
  text-align: center;

  cursor: pointer;
  user-select: none;
`;

export default Button;
