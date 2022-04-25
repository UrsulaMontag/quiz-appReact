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
  index: 1,
  question: "Meine Frage",
  correct_answer: "Meine Antwort",
  category: "Meine Kategorie",
  type: "boolean",
  difficulty: "easy",
};

export const Default = () => <Card {...props} />;

export const IsBookmarked = () => <Card {...props} isBookmarked />;
