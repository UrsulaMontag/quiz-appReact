//import { useState } from 'react'
import Header from "./components/Header"
import Card from "./components/Card"

import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchData from "./lib/fetchData";
import { StyledCard } from "./components/Card.styled";

function App() {
  const urlApi = 'https://opentdb.com/api.php?amount=50&category=18';
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData(
      // 1. Argument: die URL
      urlApi,
      // 2. Arugment: eine Callback-Funktion,
      // Bekommt die mit fetch geladenen Daten übergeben
      (data) => {
        setQuestions(data.results);
      }
    );
  }, []);

  return (
    <div className="App">
      <Header/>
      <StyledCard>
        {questions.map(({id, category, type, difficulty, question, correct_answer, incorrect_answers}) => {
          return <Card key={id} category={category} type={type} difficulty={difficulty} question={question} answer={correct_answer} incorrAnswers={incorrect_answers} />
        })}
      </StyledCard>
    </div>
  )
}

export default App
