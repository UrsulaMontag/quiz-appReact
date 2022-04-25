import { useState } from "react";
import { StyledCreateForm } from "./CreateForm.styled";
import useStore from "./useStore";

export default function CreateForm() {
  const [questionInputValue, setQuestionInputValue] = useState("");
  const [answerInputValue, setAnswerInputValue] = useState("");
  const [tagInputValue, setTagInputValue] = useState([]);

  const createQuestion = useStore((state) => state.addQuestion);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(questionInputValue, answerInputValue, tagInputValue);
    createQuestion(questionInputValue, answerInputValue, tagInputValue);
    event.target.reset();
  }
  return (
    <StyledCreateForm aria-labelledby="question" onSubmit={handleSubmit}>
      <h2 id="question">Create your own Quiz-Question-Card</h2>
      <label htmlFor="question">Question: </label>
      <input
        id="question"
        type="text"
        value={questionInputValue}
        placeholder="Enter any question"
        onChange={(event) => setQuestionInputValue(event.target.value)}
      />
      <label htmlFor="answer">Answer: </label>
      <input
        id="answer"
        type="text"
        value={answerInputValue}
        placeholder="Please enter the correct answer for your question"
        onChange={(event) => setAnswerInputValue(event.target.value)}
      />
      <label htmlFor="tags">Tags: </label>
      <input
        id="tags"
        type="text"
        value={tagInputValue}
        placeholder="Please enter category, type, difficulty separated by comma"
        onChange={(event) =>
          setTagInputValue(
            event.target.value
              .split(",")
              .map((tag) => tag.trim())
              .filter((tag) => tag.length)
          )
        }
      />

      <button>Submit</button>
    </StyledCreateForm>
  );
}
