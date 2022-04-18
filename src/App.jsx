import { nanoid } from "nanoid";
import Header from "./components/Header";
import Card from "./components/Card";
import CreateForm from "./components/CreateForm";
import { useEffect, useState } from "react";
//import styled from "styled-components";
import fetchData from "./lib/fetchData";

export default function App() {
  const urlApi = "https://opentdb.com/api.php?amount=10&category=18";
  const [questions, setQuestions] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetchData(urlApi, (data) => {
      setQuestions(data.results);
    });
  }, []);

  const createQuestion = ({
    questionInputValue,
    answerInputValue,
    tagInputValue,
    choiceInputValue,
  }) => {
    setQuestions(
      questions.map((question) => {
        return [
          ...questions,
          {
            question: questionInputValue,
            answer: answerInputValue,
            category: tagInputValue[0],
            type: tagInputValue[1],
            difficulty: tagInputValue[2],
            incorrect_answers: choiceInputValue,
          },
        ];
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <section className="main" id="home">
        {questions.map((question) => {
          return (
            <Card
              key={nanoid()}
              category={question.category}
              type={question.type}
              difficulty={question.difficulty}
              question={question.question}
              answer={question.correct_answer}
              incorrAnswers={question.incorrect_answers}
              state={checked}
              stateFunc={setChecked}
            />
          );
        })}
      </section>
      <section className="main" id="myBookmarks"></section>
      <section className="main" id="createForm">
        <CreateForm createQuestion={createQuestion} />
      </section>
      <section className="main" id="profile"></section>
      <footer></footer>
    </div>
  );
}
