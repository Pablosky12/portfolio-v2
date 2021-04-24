import React from "react";
import styled from "styled-components";

function ProjectShowcase({ title, img, children }) {
  return (
    <MainContainer>
      <h1>{title}</h1>
      <img src={img.src} alt={img.alt} />
    </MainContainer>
  );
}

const MainContainer = styled.main`
  h1 {
    color: ${({ theme }) => theme.text};
    padding: 1em 0;
    margin: 0;
  }
  img {
    width: 100%;
    object-fit: cover;
    max-height: 40vh;
    min-height: 300px;
    height: 100%;
  }
`;

export default ProjectShowcase;
