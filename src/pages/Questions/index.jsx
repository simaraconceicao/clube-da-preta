import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import View from "../../components/Questions/View";
import { QuestionsContext } from "../../contexts/Questions";
import Container from "@material-ui/core/Container";
import QuestionsApp from "../../texts/texts.json";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";

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
    [theme.breakpoints.up("md")]: {
      background:
        "#f27253 url('background-questions-mobile.svg') no-repeat  20% 54%",
      backgroundSize: "202% 145%",
    },
    [theme.breakpoints.up("md")]: {
      background:
        "#f27253 url('background-questions-mobile.svg') no-repeat  35% 54%",
      backgroundSize: "202% 155%",
    },
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

  const {
    isEmail,
    cleanAllSession,
    getNowQuestion,
    addScoreBoard,
    getAnswerd,
  } = useContext(QuestionsContext);
  const history = useHistory();

  useEffect(() => {
    const nq = getNowQuestion();

    setQuestions(QuestionsApp.question);

    if (!isEmail()) {
      history.push("/");
    }

    if (QuestionsApp.question !== undefined) {
      // o objetivo aque é volta para questao que o usuario parou caso ele tenha apertado f5
      if (nq !== null) {
        setNowQuestion(parseInt(nq));
        if (
          nq > QuestionsApp.question.length &&
          QuestionsApp.question.length !== 0
        ) {
          history.push("/resultado");
        }
      } else {
        sessionStorage.setItem("nowQuestion", nowQuestion);
      }
    }
  }, []);

  const getRealQuestion = (question) => {
    addScoreBoard(question);
    //pega as poerguntas na session
    const cacheAnswerd = getAnswerd();
    cacheAnswerd.push(question);
    console.log(question, cacheAnswerd);

    setAnswerds(cacheAnswerd);
  };

  useEffect(() => {
    console.log(0);
    if (amountQuestion !== 0) {
      setNowQuestion(nowQuestion + 1);
      sessionStorage.setItem("nowQuestion", nowQuestion + 1);
      sessionStorage.setItem("answerds", JSON.stringify(answerds));
      if (nowQuestion + 1 > amountQuestion) {
        sessionStorage.setItem("finish", true);
        history.push("/resultado");
      }
    }
    setAmountQuestion(QuestionsApp.question.length);
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
            key={question.id}
            question={question}
            show={question.id == nowQuestion}
            onRealQuestion={(e) => getRealQuestion(e)}
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
            <Facebook />
          </a>
          <a>
            <Instagram />
          </a>
        </Grid>
      </Container>
    </Grid>
  );
}
