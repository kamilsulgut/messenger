import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Messenger from "./components/MessengerApp";

import Navbar from "./components/Navbar/Navbar";

import { Container, Text } from "./components/styles/Container.styles";
import { GlobalStyles } from "./components/styles/Global.styles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Container w="100vw" h="100vh" p="0" m="0" bgc="#3A0CA3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
