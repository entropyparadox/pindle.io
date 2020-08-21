import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./page/Home";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
