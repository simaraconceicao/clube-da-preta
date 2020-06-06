import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home";
import QuestionOne from "./pages/QuestionOne";

function App() {
  return (
    <Container style={{ padding: 0 }} maxWidth="sm">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/question-1" component={QuestionOne} />
      </Switch>
    </Container>
  );
}

export default App;
