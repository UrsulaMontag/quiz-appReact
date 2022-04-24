import { StyledBookmark } from "./Bookmark.styled.js";
import { StyledCard } from "./Card.styled";
import Button from "./Button";
import { useState } from "react";
import useStore from "./useStore.js";

export default function Card() {
  const questions = useStore((state) => state.questions);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <StyledCard>
      <StyledBookmark />
      <h2>Question</h2>
      <p>{questions.question}</p>
      <form action="">
        <fieldset>
          <legend></legend>
        </fieldset>
      </form>
      <Button
        type="button"
        className="Button__answerButton"
        toggleCheck={toggleCheck}
        isChecked={isChecked}
      />
      {isChecked ? <p>{questions.correct_answer}</p> : null}{" "}
      <ul>
        <li>{questions.category}</li>
        <li>{questions.type}</li>
        <li>{questions.difficulty}</li>
      </ul>
    </StyledCard>
  );
}
