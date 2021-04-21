import styled from "styled-components";

export const Header = styled.h2`
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
