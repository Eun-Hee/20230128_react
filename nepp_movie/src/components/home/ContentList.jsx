import axios from "axios";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { tmdbAxios } from "../../api/tmdb";

function ContentList({ title, initialState }) {
  const [filters, setFilter] = useState(initialState);
  const [items, setItems] = useState([]);

  const handleToggle = (id) => {
    setFilter(
      filters.map((filter) =>
        // 클릭한 대상은 무조건 active를 true, 나머지 무조건 false로
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  const fetchData = async () => {
    //const res = await tmdbAxios.get("/trending/movie/week");

    // const results = res.data.results;
    //const { results } = res.data;

    //console.log(results);

    const { data } = await tmdbAxios.get("/trending/movie/week");
    const { results } = data;
    setItems(results);
  };

  useEffect(() => {
    fetchData();
    //tmdbAxios.get("/trending/movie/week").then((res) => console.log(res));
    //   axios
    //     .get(
    //       "https://api.themoviedb.org/3/trending/movie/week?api_key=d57203ff00ea90c015eca21638f4116e"
    //     )
    //     .then((res) => console.log(res));
  }, []);

  return (
    <Container>
      <ContentHeader>
        <h3>{title}</h3>
        <FilterList>
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              active={filter.active}
              onClick={() => handleToggle(filter.id)}
            >
              {filter.text}
            </FilterItem>
          ))}
        </FilterList>
      </ContentHeader>
      <ul>
        {/* 실제 데이터 반영해서 제목만 출력하기 */}
        <li>제목</li>
        <li>제목</li>
        <li>제목</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const ContentHeader = styled.div`
  display: flex;
`;

const FilterList = styled.ul`
  display: flex;
  border: 1px solid black;
  margin-left: 20px;
`;

const FilterItem = styled.li`
  padding: 0 10px;
  cursor: pointer;
  user-select: none;
  ${({ active }) =>
    active &&
    css`
      background-color: black;
      color: #fff;
    `}
`;

export default ContentList;
