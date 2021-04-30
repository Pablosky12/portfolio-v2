import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import headBw from "../images/me-bw.jpg";
import personalSmall from "../images/personal-small.jpg";
import comingSoon from "../images/comingsoon.svg";
import { Header } from "../components/Header";
import usePosts from "../hooks/usePosts";
import { Link } from "gatsby";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Tween, Timeline } from "react-gsap";

// markup
const IndexPage = () => {
  const articles = usePosts();
  return (
    <Layout>
      <Main>
        <Timeline>
          <Header>
            I'm a<em> Web developer </em> who loves to build <em>quality</em>{" "}
            products with cool tech.
          </Header>
          <Tween
            from={{
              opacity: 0,
              visibility: "visible",
            }}
            to={{ opacity: 1 }}
            duration={0.7}
          >
            <PresentationCard>
              <Headshot src={headBw} alt="Pablo Marcano headshot" />
              <div>
                <p className="name">Pablo Marcano</p>
                <p className="desc">Montevideo, Uruguay + Remote</p>
                <p className="desc">Available for Contract Work</p>
              </div>
            </PresentationCard>
          </Tween>
        </Timeline>
      </Main>
      <Divider>
        <a href="#work">See work ▼ </a>
      </Divider>
      <Section id="work">
        <h3>Showcase</h3>
        <Projects source={projects} title="work" />
      </Section>
      <Section>
        <h3>Latest Articles</h3>
        <Projects source={articles} title="article" />
      </Section>
    </Layout>
  );
};

const projects = [
  {
    name: "Pablo Marcano Personal Site",
    image: personalSmall,
    url: "showcase/1",
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
];

function Projects({ source, title }) {
  const containerRef = useRef();
  const scrollContainerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(containerRef.current, {
      type: "x",
      bounds: scrollContainerRef.current,
      inertia: true,
    });
    gsap.to(
      `#projects-${title} .project-card, #projects-${title} .coming-soon`,
      {
        scrollTrigger: {
          trigger: `#projects-${title}`,
          start: "bottom bottom+=100",
        },
        visibility: "visible",
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <ScrollContainer ref={scrollContainerRef} className="project">
      <ProjectsContainer
        className={`projects-${title}`}
        ref={containerRef}
        id={`projects-${title}`}
      >
        {source.map((item, i) => {
          if (item.isComingSoon) {
            return (
              <ComingSoon i={i} className="coming-soon" img={comingSoon}>
                <img src={comingSoon} alt="Coming Soon text" />
                Coming Soon
              </ComingSoon>
            );
          }
          return (
            <ProjectCard className="project-card" i={i} key={item.id}>
              <h4>{item.name}</h4>
              <img
                src={item.image}
                alt={`Screenshot of project ${item.name}`}
              />
              {title == "work" ? (
                <Link to={item.url}> View {title} </Link>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  View {title}
                </a>
              )}
            </ProjectCard>
          );
        })}
      </ProjectsContainer>
      {<span className="drag">{">"}</span>}
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  .drag {
    position: absolute;
    // override gsap draggable z index
    z-index: 10000;
    right: 3em;
    top: 50%;
    font-size: 2em;
    color: ${({ theme }) => theme.text};
    animation: float 3s infinite ease-in-out;

    @keyframes float {
      from {
        top: 40%;
      }
      50% {
        top: 44%;
      }
      to {
        top: 40%;
      }
    }
  }
`;

const ComingSoon = styled.li`
  min-width: 20em;
  min-height: 20em;
  border-radius: 1000px;
  position: relative;
  left: ${({ i }) => `-${i * 60}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textContrast};
  img {
    width: 20em;
    height: 20em;
    position: absolute;
  }
`;

const ProjectsContainer = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-direction: row;
  position: relative;
  padding-bottom: 10%;
  li {
    visibility: hidden;
    opacity: 0;
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
  min-width: 20em;
  max-width: 20em;
  min-height: 20em;
  padding: 1em;
  color: ${({ theme }) => theme.textContrast};
  position: relative;
  left: ${({ i }) => `-${i * 60}px`};
  transition: transform 0.3s ease-in-out;

  &:hover {
    z-index: 10;
    transform: translatex(5px) !important;
  }
  h4 {
    font-size: 1.2em;
  }
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
  a {
    color: ${({ theme }) => theme.textContrast};
    text-decoration: underline;
    position: absolute;
    bottom: 0;
    left: 1em;
    bottom: 1em;
  }
`;

const Section = styled.section`
  padding-bottom: 3em;
  h3 {
    padding-top: 2em;
    color: ${({ theme }) => theme.textSecondary};
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
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Headshot = styled.img`
  width: 130px;
  height: 130px;
  transform: translateY(0.5em);
  border-radius: 100px;
  padding: 1em;
`;
const PresentationCard = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  visibility: hidden;
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
