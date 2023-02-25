import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/common/Header";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import People from "./components/pages/People";
import TV from "./components/pages/TV";

function App() {
  return (
    <div>
      <Header />
      <MainSection>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </MainSection>
    </div>
  );
}

const MainSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default App;
