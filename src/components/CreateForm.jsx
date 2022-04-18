import { useState } from "react";
import { StyledCreateForm } from "./CreateForm.styled";

export default function CreateForm({ createQuestion }) {
  const [questionInputValue, setQuestionInputValue] = useState("");
  const [answerInputValue, setAnswerInputValue] = useState("");
  const [tagInputValue, setTagInputValue] = useState("");
  const [choiceInputValue, setChoiceInputValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    createQuestion(
      questionInputValue,
      answerInputValue,
      tagInputValue
      //   choiceInputValue
      //     .split(",")
      //     .map((tag) => tag.trim())
      //     .filter((tag) => tag.length)
    );

    event.target.reset();
  }
  return (
    <StyledCreateForm aria-labelledby="question" onSubmit={handleSubmit}>
      <h2 id="question">Create your own Quiz-Question-Card</h2>
      <label htmlFor="question">Question: </label>
      <input
        id="question"
        type="text"
        placeholder="Enter any question"
        onChange={(event) => setQuestionInputValue(event.target.value)}
      />
      <label htmlFor="answer">Answer: </label>
      <input
        id="answer"
        type="text"
        placeholder="Please enter the correct answer for your question"
        onChange={(event) => setAnswerInputValue(event.target.value)}
      />
      <label htmlFor="tags">Tags: </label>
      <input
        id="tags"
        type="text"
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
      <label htmlFor="choice">Optional Multiple Choice Tags: </label>
      <input
        id="choice"
        type="text"
        placeholder="Please enter upto 3 incorrect answers to create multiple choice. Separatet by comma"
        onChange={(event) =>
          setChoiceInputValue(
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
