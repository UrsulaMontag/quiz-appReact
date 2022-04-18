import styled from "styled-components";

export const StyledProfile = styled.div`
  gap: 8rem;
  justify-content: center;
  align-items: center;

  padding: 10rem 0;

  article {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    justify-content: center;
    align-items: center;
    min-width: 80vw;
    min-height: 100%;

    font-family: "Architects Daughter", sans-serif;
  }

  figure {
    display: flex;
    align-items: center;
    gap: 5rem;
    min-height: 20vh;
  }

  img {
    border-radius: 50%;
    max-width: 35vw;
    max-height: 35vw;
  }

  figcaption {
    max-width: 35vw;
    font-size: 1.8rem;
  }

  aside h2 {
    color: black;
    text-align: center;
    margin-bottom: 3rem;
  }

  ul {
    display: flex;
    gap: 2rem;
  }

  li {
    list-style: none;

    padding-left: 2rem;
  }

  li:not(:first-child) {
    list-style: "|";
  }
`;
