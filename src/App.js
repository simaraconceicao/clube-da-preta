import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Result from "./pages/Result";

import { QuestionsProvider } from "./contexts/Questions";

function App() {
  return (
    <QuestionsProvider>
      <Container style={{ padding: 0, maxWidth: "100%" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/perguntas" component={Questions} />
          <Route path="/resultado" component={Result} />
        </Switch>
      </Container>
    </QuestionsProvider>
  );
}

export default App;
