import { StyledBookmark } from "./Bookmark.styled.js";
import { StyledCard } from "./Card.styled";
import Button from "./Button";
import { useState } from "react";
import useStore from "./useStore.js";
import PropTypes from "prop-types";

export default function Card({ index }) {
  const questions = useStore((state) => state.questions);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledCard>
      <StyledBookmark />
      <h2>Question</h2>
      <p>{questions[index].question}</p>
      <Button
        type="button"
        className="Button__answerButton"
        toggleCheck={toggleCheck}
        isChecked={isChecked}
      />
      {isChecked ? <p>{questions[index].correct_answer}</p> : null}{" "}
      <ul>
        <li>{questions[index].category}</li>
        <li>{questions[index].type}</li>
        <li>{questions[index].difficulty}</li>
      </ul>
    </StyledCard>
  );
}

Card.propTypes = {
  index: PropTypes.number,
};
