import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Header>I'm a<em> Full stack developer </em> with lots of passion and dolorsitamet abasdbasd </Header>
        <div>I am pablo</div>
      </Main>
    </Layout>
  );
};


const Header = styled.h2`
  font-size: 3em;
  color: ${({theme}) => theme.text};
  em {
    background-color: ${({theme}) => theme.contrast1};
    color: ${({theme}) => theme.background};
    font-style: normal;
    font-weight: bold;
  }
`

const Main = styled.main`
  margin-top: 1em;
`;

export default IndexPage;
