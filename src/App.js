import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import { FacebookProvider } from "react-facebook";
import { QuestionsProvider } from "./contexts/Questions";
import config from "./config/config";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <FacebookProvider appId={`${config.ID_FACEBOOK_APP}`}>
      <QuestionsProvider>
        <Container style={{ padding: 0, maxWidth: "100%" }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/perguntas" component={Questions} />
              <Route path="/resultado" component={Result} />
            </Switch>
          </Router>
        </Container>
      </QuestionsProvider>
    </FacebookProvider>
  );
}

export default App;
