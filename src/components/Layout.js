import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import BaseTheme from "../utils/Base.theme";

function Layout({ children }) {
  console.log(children);
  return (
    // TODO: allow theming
    <ThemeProvider theme={BaseTheme}>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
        />
        <title>Pablo M | Web Developer</title>
        <meta name="description" content="Pablo Marcano, software developer." />
        <meta
          name="keyword"
          content="portfolio, javascript, developer, html, css, programming, .NET, web, mobile"
        />
        <meta property="og:title" content="Pablo Marcano | Web Developer" />
        <meta
          property="og:description"
          content="Web developer focused on UI development."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <All>
        <Header>
          <Link to="/" className="home">
            <img src="https://picsum.photos/30/30" />
            <h1>Pablo M.</h1>
          </Link>
          <nav>
            <NavigationOptions />
          </nav>
        </Header>
        {children}
      </All>
    </ThemeProvider>
  );
}

function NavigationOptions() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.maxHeight = "initial";
    }
  }, [isOpen]);
  return (
    <>
      <Trigger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        ==
      </Trigger>
      <NavList isOpen={isOpen}>
        <li>
          <Link to="/Showcase">Showcase</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/About">About Me</Link>
        </li>
      </NavList>
    </>
  );
}

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin: 0;
    padding-left: 1em;
  }
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    justify-content: center;
    align-items: center;
    height: 80vh;
    background-color: black;
    width: 100vw;
    left: 0;
    top: 0;
    li {
      border: 1px solid black;
      font-size: 3em;
      padding: 1em;
    }
    flex-direction: column;
  }
`;

const Trigger = styled.button`
  display: none;
  color: ${({ theme }) => theme.text};
  z-index: 10;
  position: absolute;
  top: 1.3em;
  right: 2em;
  justify-self: flex-end;
  @media (max-width: 768px) {
    position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
    display: block;
    background-color: blue;
  }
`;

const All = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 200vh;
  padding: 1em;
  color: ${({ theme }) => theme.text};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.5em;
  border-bottom: 2px solid ${({ theme }) => theme.text};

  .home {
    flex: 1;
  }

  a {
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.text};

    &:active,
    &:visited {
      color: ${({ theme }) => theme.text};
    }
  }

  img {
    margin: 0;
  }

  h1 {
    color: ${({ theme }) => theme.text};
    padding: 0 0.5em;
    margin: 0;
  }

  @media (max-width: 768px) {
    justify-content: center;
    .home {
      flex: none;
    }
  }
`;

export default Layout;
