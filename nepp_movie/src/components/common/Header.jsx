import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>NeppMovie</Logo>
        <Gnb>
          <ul>
            <li>Movie</li>
            <li>TV</li>
            <li>People</li>
          </ul>
        </Gnb>
        <input type="text" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  flex: 1;
  margin: 0 auto;
`;

const Logo = styled.h1``;

const Gnb = styled.nav`
  ul {
    display: flex;
  }
`;

export default Header;
