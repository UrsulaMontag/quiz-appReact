import { nanoid } from "nanoid";
import Header from "./components/Header";
import Card from "./components/Card";

import { useEffect, useState } from "react";
//import styled from "styled-components";
import fetchData from "./lib/fetchData";

export default function App() {
  const urlApi = "https://opentdb.com/api.php?amount=100&category=18";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData(urlApi, (data) => {
      setQuestions(data.results);
    });
  }, []);
  console.log(questions);
  return (
    <div className="App">
      <Header />
      <section className="main">
        {questions.map((question) => {
          //console.log(question)
          return (
            <Card
              key={nanoid()}
              category={question.category}
              type={question.type}
              difficulty={question.difficulty}
              question={question.question}
              answer={question.correct_answer}
              incorrAnswers={question.incorrect_answers}
            />
          );
        })}
      </section>
    </div>
  );
}
