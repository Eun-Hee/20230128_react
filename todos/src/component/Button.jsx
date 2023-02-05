import { darken, lighten } from "polished";
import styled, { css, keyframes } from "styled-components";
//import { theme } from "../styles";

function Button({ text, bgColor, big }) {
  return (
    <StyledButton bgColor={bgColor} big={big}>
      {text}
    </StyledButton>
  );
}

const slideUp = keyframes`
    from {
        transform: translateY(20px);
    }
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 5px 0;
  border-radius: 10%;
  //background-color: ${(props) => props.bgColor};
  /* bgcolor Prop이 전달되면 적용하고, 전달 안되면 메인컬러 적용 */
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.main}; // 비구조할당
  color: "#fff";
  text-align: center;
  outline: none;
  border: none;

  cursor: pointer;
  user-select: none;

  animation: ${slideUp} 1s;

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      font-size: 1.2rem;
      padding: 10px;
    `}

  &:hover {
    // div 태그가 됨
    background-color: ${({ bgColor, theme }) => {
      //return bgColor ? lighten(0.1, bgColor) : lighten(0.1, theme.colors.main);
      return bgColor ? lighten(0.1, bgColor) : lighten(0.1, theme.colors.main); // 클릭하고 있는 동안은 어둡게 표현됨
    }};
  }

  &:active {
    // div 태그가 됨
    background-color: ${({ bgColor, theme }) => {
      //return bgColor ? lighten(0.1, bgColor) : lighten(0.1, theme.colors.main);
      return bgColor ? darken(0.1, bgColor) : darken(0.1, theme.colors.main); // 클릭하고 있는 동안은 어둡게 표현됨
    }};
  }

  /* 첫번째 요소 빼고 적용할 때 */
  & + & {
    margin-top: 10px;
  }
  //margin-bottom: 10px;
`;

export const BigButton = styled(StyledButton)`
  width: 200px;
  padding: 20px;
`;
export default Button;
