import Header from "./components/Header";
import CardList from "./components/CardList";
import CreateForm from "./components/CreateForm";
import Profile from "./components/Profile";
import { StyledFooter } from "./components/Footer.styled";
import { useEffect, useState } from "react";
//import styled from "styled-components";
import fetchData from "./lib/fetchData";

export default function App() {
  const urlApi = "https://opentdb.com/api.php?amount=10&category=18";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchData(urlApi, (data) => {
      setQuestions(data.results);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <section className="main" id="home">
        <CardList questions={questions} />
      </section>
      <section className="main" id="myBookmarks"></section>
      <section className="main" id="createForm">
        <CreateForm />
      </section>
      <section className="main" id="profile">
        <Profile />
      </section>
      <StyledFooter />
    </div>
  );
}
