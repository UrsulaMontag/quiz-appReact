import { StyledBookmark } from "./Bookmark.styled.js";
import { StyledCard } from "./Card.styled";
import Button from "./Button";
import { useState } from "react";
import useStore from "./useStore.js";

export default function Card() {
  const [isBookmarked, setIsBookmarked] = useState("false");
  const checked = useStore((state) => state.checked);
  const questions = useStore((state) => state.questions);

  return (
    <StyledCard>
      <StyledBookmark
        onClick={() => {
          setIsBookmarked(!isBookmarked);
        }}
      />
      <h2>Question</h2>
      <p>{questions.question}</p>
      <form action="">
        <fieldset>
          <legend></legend>
        </fieldset>
      </form>
      <Button type="button" className="Button__answerButton" />
      {checked ? <p>{questions.correct_answer}</p> : null}{" "}
      <ul>
        <li>{questions.category}</li>
        <li>{questions.type}</li>
        <li>{questions.difficulty}</li>
      </ul>
    </StyledCard>
  );
}
