import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--header-footer-color);
  min-width: 100vw;
  min-height: 10vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  text-align: center;

  h1 {
    color: var(--text-color-dark);
    font-size: 4rem;
  }
`;
