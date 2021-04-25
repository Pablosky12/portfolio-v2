import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function ProjectShowcase({
  title,
  img,
  shortDesc,
  description,
  techStack,
  link,
  collaborators,
  duration,
}) {
  return (
    <MainContainer>
      <h1>{title}</h1>
      <img src={img.src} alt={img.alt} />
      <InfoContainer>
        <section>
          <h2>{shortDesc}</h2>
          <div className="info">
            <p>
              {collaborators
                .reduce((a, c) => a + ", " + c, "")
                .replace(", ", "")}
            </p>
            <p>{duration}</p>
          </div>
          <div className="description">
            {description.map((d) => (
              <p>{d}</p>
            ))}
          </div>
        </section>
        <section className="techStack">
          <h3>Tech Stack</h3>
          <ul>
            {techStack.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </section>
      </InfoContainer>
    </MainContainer>
  );
}

ProjectShowcase.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  link: PropTypes.string,
  shortDesc: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
  }

  ul {
    list-style: none;
    margin: 0;
  }
  .info {
    color: ${({ theme }) => theme.textSecondary};
    padding-bottom: 1em;
  }
  .description {
    padding-right: 1em;
    p {
      margin-bottom: 1em;
    }
  }
  .techStack {
    max-width: 20%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .techStack {
      max-width: 100%;
    }
  }
`;

const MainContainer = styled.main`
  color: ${({ theme }) => theme.text};
  p,li {
    margin: 0;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.text};
    padding: 0.5em 0;
    margin: 0;
  }
  img {
    width: 100%;
    object-fit: cover;
    max-height: 40vh;
    min-height: 300px;
    height: 100%;
    margin: 0;
  }
`;

export default ProjectShowcase;
