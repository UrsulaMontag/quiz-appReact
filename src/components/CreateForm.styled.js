import styled from "styled-components";

export const StyledCreateForm = styled.form`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  _align-items: center;

  max-width: 80vw;
  padding: 3rem 0;

  label {
    min-width: 20%;

    font-size: 2rem;
    font-weight: bold;
  }

  input {
    min-width: 60%;
    min-height: 20vh;

    border: 1px solid var(--outline-dark);
    border-radius: 6px;
  }

  input[placeholder] {
    color: grey;
    padding-left: 2rem;
  }
`;
