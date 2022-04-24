import Card from "./Card";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import useStore from "./useStore";
import PropTypes from "prop-types";

export default function CardList() {
  const questions = useStore((state) => state.questions);

  const urlApi = "https://opentdb.com/api.php?amount=10&category=18";
  const fetchData = useStore((state) => state.fetchQuestions);

  useEffect(() => {
    fetchData(urlApi);
  }, [fetchData]);

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
CardList.propType = {
  questions: PropTypes.array,
};
