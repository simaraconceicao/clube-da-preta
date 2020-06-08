import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import Result from "./pages/Result";

import { QuestionsProvider } from "./contexts/Questions";

function App() {
  return (
    <QuestionsProvider>
      <Container style={{ padding: 0 }} maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pergunta-1" component={QuestionOne} />
          <Route path="/pergunta-2" component={QuestionTwo} />
          <Route path="/resultado" component={Result} />
        </Switch>
      </Container>
    </QuestionsProvider>
  );
}

export default App;
