import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import View from "../../components/Questions/View";
import { QuestionsContext } from "../../contexts/Questions";
import Container from "@material-ui/core/Container";
import QuestionsApp from "../../texts/texts.json";

const useStyles = makeStyles((theme) => ({
  questions: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "100vh",
    maxHeight: "100%",
    background:
      "#f27253 url('background-questions-mobile.svg') no-repeat  6% 50%",
    backgroundSize: "202% 400%",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    bottom: 20,
    position: "fixed",
    zIndex: 1,
    "& strong:first-child": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
      bottom: 61,
    },
  },
}));

export default function Question() {
  const classes = useStyles();
  const color = "#fff";
  const [questions, setQuestions] = useState([]);
  const [nowQuestion, setNowQuestion] = useState(1);
  const [amountQuestion, setAmountQuestion] = useState(0);
  const [answerds, setAnswerds] = useState([]);

  const { isEmail, cleanAllSession, getAnswerd } = useContext(QuestionsContext);
  const history = useHistory();
  const questionsAnswerd = getAnswerd();

  useEffect(() => {
    if (!isEmail()) {
      history.push("/");
    }
    setQuestions(QuestionsApp.question);
    setAmountQuestion(QuestionsApp.question.length);
  }, []);

  const getRealQuestion = (question) => {
    setAnswerds((answerds) => [...answerds, question]);
  };

  useEffect(() => {
    if (amountQuestion !== 0) {
      console.log(nowQuestion, amountQuestion);

      setNowQuestion(nowQuestion + 1);
      sessionStorage.setItem("answerds", JSON.stringify(answerds));
      if (nowQuestion >= amountQuestion) {
        history.push("/resultado");
      }
    }
  }, [answerds]);

  const gotToStart = () => {
    cleanAllSession();
    history.push("/");
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.questions}
    >
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <Header color={color} />
        </Grid>
        {questions.map((question) => (
          <View
            question={question}
            show={question.id === nowQuestion}
            onRealQuestion={getRealQuestion}
          />
        ))}
        <Grid
          item
          container
          direction="row"
          className={classes.footer}
          style={{ color: color }}
        >
          <strong onClick={gotToStart}>voltar ao início</strong>
          <a>
            <img />
          </a>
          <a>
            <img />
          </a>
        </Grid>
      </Container>
    </Grid>
  );
}
