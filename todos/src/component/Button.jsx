import styled, { css } from "styled-components";

function Button({ text, bgColor, big }) {
  return (
    <StyledButton bgColor={bgColor} big={big}>
      {text}
    </StyledButton>
  );
}
const StyledButton = styled.div`
  width: 100px;
  padding: 5px 0;
  border-radius: 10%;
  //background-color: ${(props) => props.bgColor};
  /* bgcolor Prop이 전달되면 적용하고, 전달 안되면 메인컬러 적용 */
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.main}; // 비구조할당
  color: "#fff";
  text-align: center;

  cursor: pointer;
  user-select: none;

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      font-size: 1.2rem;
      padding: 10px;
    `}

  &:hover {
    // div 태그가 됨
    background-color: black;
  }

  /* 첫번째 요소 빼고 적용할 때 */
  & + & {
    margin-top: 10px;
  }
  //margin-bottom: 10px;
`;

export default Button;
