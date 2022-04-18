import { StyledBookmark } from "./Bookmark.styled";
import { StyledCard } from "./Card.styled";
import Button from "./Button";

export default function Card({
  category,
  type,
  difficulty,
  question,
  answer,
  incorrAnswers,
  state,
  stateFunc,
}) {
  return (
    <StyledCard>
      <StyledBookmark />
      <h2>Question</h2>
      <p>{question}</p>
      <form action="">
        <fieldset>
          <legend></legend>
        </fieldset>
      </form>
      <Button
        type="button"
        className="Button__answerButton"
        state={state}
        stateFunc={stateFunc}
      />
      {state ? <p>{answer}</p> : null}{" "}
      <ul>
        <li>{category.split(":")[1]}</li>
        <li>{type}</li>
        <li>{difficulty}</li>
      </ul>
    </StyledCard>
  );
}
