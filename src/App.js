import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonies from "./pages/Testimonies";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/testimonies" component={Testimonies} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/" component={Home} exact />
        </Switch>
      </Container>
    </>
  );
};

export default App;
