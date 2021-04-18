import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import headBw from "../images/me-bw.jpg";
import comingSoon from "../images/comingsoon.svg";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Header>
          I'm a<em> Web developer </em> who loves to build <em>quality</em>{" "}
          products with cool tech.
        </Header>
        <PresentationCard>
          <Headshot src={headBw} alt="Pablo Marcano headshot" />
          <div>
            <p className="name">Pablo Marcano</p>
            <p className="desc">Montevideo, Uruguay + Remote</p>
            <p className="desc">Available for Contract Work</p>
          </div>
        </PresentationCard>
      </Main>
      <Divider>
        <a href="#work">See work ▼ </a>
      </Divider>
      <Section href="#work">
        <h3>Showcase</h3>
        <Projects source={projects}/>
      </Section>
      <Section>
        <h3>Latest Articles</h3>
        <Projects source={articles}/>
      </Section>
    </Layout>
  );
};

const projects = [
  {
    name: "This Site!",
    image: "https://source.unsplash.com/random/800",
  },
  {
    isComingSoon: true,
  },
  {
    isComingSoon: true,
  },
  {
    isComingSoon: true,
  },
  {
    name: "another one!",
    image: "https://source.unsplash.com/random/800",
  },
  {
    name: "DJ-KHALED!",
    image: "https://source.unsplash.com/random/800",
  },
];

const articles = [
  {
    isComingSoon: true,
  },
  {
    isComingSoon: true,
  },
  {
    isComingSoon: true,
  },
  {
    name: "another one!",
    image: "https://source.unsplash.com/random/800",
  },
  {
    name: "DJ-KHALED!",
    image: "https://source.unsplash.com/random/800",
  },
];

function Projects({source}) {
  return (
    <ProjectsContainer>
      {source.map((p, i) => {
        if (p.isComingSoon) {
          return (
            <ComingSoon i={i} img={comingSoon}>
              <img src={comingSoon}  alt="Coming Soon text"/>
              Coming Soon
            </ComingSoon>
          );
        }
        return (
          <ProjectCard i={i}>
            <h4>{p.name}</h4>
            <img src={p.image} alt={`Screenshot of project ${p.name}`} />
          </ProjectCard>
        );
      })}
    </ProjectsContainer>
  );
}

const ComingSoon = styled.li`
  min-width: 30vh;
  min-height: 30vh;
  border-radius: 1000px;
  position: relative;
  left: ${({ i }) => `-${i * 60}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textContrast};
  font-size: 1.5em;
  img {
    width: 30vh;
    height: 30vh;
    position: absolute;
  }
`;

const ProjectsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  position: relative;
  padding-bottom: 10%;
  overflow: hidden;
  li {
    &:nth-child(even) {
      top: 6vh;
    }
    &:nth-child(3n + 1) {
      background-color: ${({ theme }) => theme.contrast1};
    }
    &:nth-child(3n + 2) {
      background-color: ${({ theme }) => theme.contrast2};
    }
    &:nth-child(3n + 3) {
      background-color: ${({ theme }) => theme.contrast3};
    }
  }
`;
const ProjectCard = styled.li`
  min-width: 30vh;
  min-height: 30vh;
  padding: 1em;
  color: ${({ theme }) => theme.textContrast};
  position: relative;
  left: ${({ i }) => `-${i * 60}px`};
  img {
    width: 70%;
    height: 70%;
    margin: 0;
    object-fit: cover;
    object-position: 30% 50%;
    border-radius: 800px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Section = styled.section`
  padding-bottom: 3em;
  h3 {
    padding-top: 2em;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const Header = styled.h2`
  font-size: 3em;
  line-height: 1.3em;
  color: ${({ theme }) => theme.text};
  max-width: min(80%, 1080px);
  em {
    background-color: ${({ theme }) => theme.contrast1};
    color: ${({ theme }) => theme.background};
    font-style: normal;
    font-weight: bold;
  }
  @media (min-height: 748px) {
    padding: 25vh 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
  }
`;

const Headshot = styled.img`
  width: 130px;
  transform: translateY(0.5em);
  border-radius: 100px;
  padding: 1em;
`;
const PresentationCard = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  p {
    margin: 0;
  }
  .name {
    color: ${({ theme }) => theme.text};
  }
  .desc {
    color: ${({ theme }) => theme.textSecondary};
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    max-width: max(30%, 500px);
  }
`;

const Main = styled.main`
  margin-top: 1em;
`;

export default IndexPage;
