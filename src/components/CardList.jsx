import Card from "./Card";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import useStore from "./useStore";
import PropTypes from "prop-types";

export default function CardList() {
  const questions = useStore((state) => state.questions);
  const fetchData = useStore((state) => state.fetchQuestions);
  const urlApi = "https://opentdb.com/api.php?amount=10&category=18";

  useEffect(() => {
    fetchData(urlApi);
  }, [fetchData]);

  return (
    <ul>
      {questions.map((question, index) => {
        !question.id && (question.id = nanoid());
        //const index = questions.filter(({ id }) => id === question.id);
        return (
          <li key={question.id}>
            <Card index={index} />
          </li>
        );
      })}
    </ul>
  );
}
CardList.propTypes = {
  questions: PropTypes.array,
};
