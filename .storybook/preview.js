import {GlobalStyle} from "../src/components/Global.styled";

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
];





