import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: "3em", maxWidth: "400px" }}>
          <Story />
        </div>
      );
    },
  ],
};

const props = {
  question: "Meine Frage",
  answer: "Meine Antwort",
  category,
  type: "boolean",
  difficulty,
  incorrAnswers: [one, two, three],
  state,
  stateFunc,
};

export const Default = () => <Card {...props} />;

export const IsBookmarked = () => <Card {...props} isBookmarked />;
