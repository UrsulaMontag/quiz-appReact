import styled from "styled-components";

export const StyledCard = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  position: relative;

  background-color: var(--main-bg-color);
  border-radius: 0.6rem;
  box-shadow: 4px -3px var(--outline-shadow);

  padding: 5%;

  h2,
  p,
  form,
  Button,
  ul {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;

    max-width: 100%;
    padding: 0.5rem;
  }
  li {
    background-color: var(--items-bg-color);
    border: 0.5px solid var(--main-bg-color);
    border-radius: 6px;

    padding: 1rem;
    list-style: none;
    font-size: 1.8rem;
  }
`;
