import Card from "./Card";
import { nanoid } from "nanoid";
import useStore from "./useStore";
import PropTypes from "prop-types";

export default function CardList() {
  const questions = useStore((state) => state.questions);

  return (
    <ul>
      {questions.map((question) => {
        const index = questions.findIndex(
          (question_) => question_.id === question.id
        );
        return <Card key={nanoid()} index={index} />;
      })}
    </ul>
  );
}
CardList.prototype = {
  questions: PropTypes.array,
};
