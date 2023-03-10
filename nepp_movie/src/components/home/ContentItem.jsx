// src/components/home/contentItem.jsx

import { Link } from "react-router-dom";
import styled from "styled-components";

function ContentItem({ item }) {
  const {
    id,
    media_type,
    title,
    release_date,
    poster_path,
    name,
    first_air_date,
  } = item;

  const poster_url = "https://image.tmdb.org/t/p/w200" + poster_path;

  //const poster_url = "https://image.tmdb.org/t/p/w200" + item.poster_path;

  const type = title ? "movie" : "tv";

  console.log(item);
  return (
    <Container>
      {/*<Link to={`/movie/${id}`}> */}
      <Link to={`/${type}/${id}`}>
        <ImagBox>
          <img src={poster_url} alt="" />
        </ImagBox>
        <Title>{title || name}</Title>
        <ReleaseDate>{release_date || first_air_date}</ReleaseDate>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  img {
    width: 200px;
  }
`;

const ImagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  overflow: hidden;
  img {
    height: 100%;
  }
`;

const Title = styled.p`
  //  font-size: 1.2rem;
  font-weight: 700px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color: #bbb;
`;

export default ContentItem;
