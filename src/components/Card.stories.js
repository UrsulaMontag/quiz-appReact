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
  correct_answer: "Meine Antwort",
  category: "Meine Kategorie",
  type: "boolean",
  difficulty: "easy",
  incorrAnswers: ["one", "two", "three"],
  state: true,
};

export const Default = () => <Card {...props} />;

export const IsBookmarked = () => <Card {...props} isBookmarked />;
