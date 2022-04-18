import styled from "styled-components";

export const StyledFooter = styled.article`
  position: fixed;
  bottom: 0;
  z-index: 10;
  min-width: 100vw;

  background-color: var(--header-footer-color);
  nav {
    display: flex;
    justify-content: space-evenly;

    min-width: 100vw;
  }

  img {
    transform: scale(2, 2);
    min-width: 20vw;
    align-self: center;
  }
`;
