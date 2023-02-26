import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineEdit,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo> Neppstagram </Logo>
        <Input />
        <Gnb>
          <ul>
            <li>
              <Link to="/">
                <AiOutlineHome size={24} />
              </Link>
            </li>
            <li>
              <Link tod="/serach">
                <AiOutlineSearch size={24} />
              </Link>
            </li>
            <li>
              <Link to="/edit">
                <AiOutlineEdit size={24} />
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <AiOutlineUser size={24} />
              </Link>
            </li>
          </ul>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  padding: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

const Input = styled.input``;

const Logo = styled.h1``;

const Gnb = styled.nav`
  flex: 1;
  ul {
    display: flex;
    flex: 1;
    gap: 20px; //양옆을 떨어뜨림
    margin-left: 30px;
  }
`;

export default Header;
