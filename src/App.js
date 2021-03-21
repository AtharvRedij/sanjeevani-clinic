import React from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} exact />
      </Container>
    </>
  );
};

export default App;
