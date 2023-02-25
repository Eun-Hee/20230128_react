import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./components/common/pages/Home";
import Movie from "./components/common/pages/Movie";
import People from "./components/common/pages/People";
import TV from "./components/common/pages/TV";

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
