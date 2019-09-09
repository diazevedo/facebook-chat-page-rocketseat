import React from "react";
import "./reset.css";
import "./app.css";
import Header from "./components/Header";
import SectionChats from "./components/SectionChats";

const App = () => {
  return (
    <>
      <Header />
      <SectionChats />
    </>
  );
};

export default App;
