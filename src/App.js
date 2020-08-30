import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./page/About";
import { Partners } from "./page/Partners";
import { Ambassadors } from "./page/Ambassadors";
import { Contact } from "./page/Contact";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/partners" component={Partners} />
      <Route exact path="/ambassadors" component={Ambassadors} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
}

export default App;
