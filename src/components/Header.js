import React from 'react';
import { Tween } from "react-gsap";
import styled from "styled-components";

export const Header = ({children}) => {
  return (
    <Tween
      from={{
        x: "-100%",
        transformOrigin: "top left",
        visibility: "visible",
      }}
      to={{ x: 0 }}
      duration={0.7}
    >
      <StyledHeader>{children}</StyledHeader>
    </Tween>
  );
};
const StyledHeader = styled.h2`
  font-size: 3em;
  line-height: 1.3em;
  color: ${({ theme }) => theme.text};
  max-width: min(80%, 1080px);
  visibility: hidden;
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
