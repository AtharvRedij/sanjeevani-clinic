import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "./components/Banner";
import Services from "./pages/Services";

const App = () => {
  return (
    <Container>
      <Banner />
      <Services />
    </Container>
  );
};

export default App;
