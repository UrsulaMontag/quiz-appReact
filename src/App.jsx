import Header from "./components/Header";
import CardList from "./components/CardList";
import CreateForm from "./components/CreateForm";
import Profile from "./components/Profile";
import { StyledFooter } from "./components/Footer.styled";
//import styled from "styled-components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <section className="main" id="home">
        <CardList />
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
