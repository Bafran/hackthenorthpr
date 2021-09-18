import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Calendar from "./components/Calender";

const App = () => {
  return (
    <ChakraProvider>
      <Calendar />
    </ChakraProvider>
  );
};

export default App;
