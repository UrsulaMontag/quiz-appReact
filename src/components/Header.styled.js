import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--header-footer-color);
  min-width: 100vw;
  min-height: 8vh;

  position: fixed;
  top: 0;
  z-index: 10;

  h1 {
    color: black;
    font-size: 3rem;
  }
`;
