import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Calendar from "./components/Calender";
import NewCal from "./components/newCal";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/id/:id">
          <ChakraProvider>
            <Calendar />
          </ChakraProvider>
        </Route>
        <Route path="/new">
          <ChakraProvider>
            <NewCal />
          </ChakraProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
