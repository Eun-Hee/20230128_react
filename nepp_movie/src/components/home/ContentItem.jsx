// src/components/home/contentItem.jsx

import styled from "styled-components";

function ContentItem({ item }) {
  const poster_url = "https://image.tmdb.org/t/p/w55" + item.poster_path;

  console.log(item);
  return (
    <Container>
      <Title>{item.title}</Title>
      <ReleaseDate>{item.release_date}</ReleaseDate>
    </Container>
  );
}

const Container = styled.li``;

const Title = styled.p`
  //  font-size: 1.2rem;
  font-weight: 700px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #bbb;
`;

export default ContentItem;
