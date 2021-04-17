import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import headBw from "../images/me-bw.jpg";
import theme from "../utils/Base.theme";
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
    </Layout>
  );
};

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
    padding: 30% 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  object-fit: cover;
  object-position: 30% 50%;
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
