import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import Title from "../../components/Questions/Title";
import BtnAnswer from "../../components/Questions/BtnAnswer";
import { QuestionsContext } from "../../contexts/Questions";

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
  gridTitle: {
    textAlign: "center",
    height: 32,
  },
  gridContainer: {
    height: "26vh",
  },
}));

export default function QuestionOne() {
  const classes = useStyles();
  const { addAnswerdOne, isEmail, isAnswerdOne } = useContext(QuestionsContext);
  const history = useHistory();
  const setAnswerd = (e) => {
    addAnswerdOne(e);
    history.push("/pergunta-2");
  };
  useEffect(() => {
    if (!isEmail()) {
      history.push("/");
    } else if (isAnswerdOne()) {
      history.push("/pergunta-2");
    }
  }, []);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.questions}
    >
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} className={classes.gridTitle}>
          <Title title="Primeira Pergunta?" />
        </Grid>
        <Grid container justify="center" item xs={12}>
          <a onClick={() => setAnswerd("Resposta1")}>
            <BtnAnswer title="Resposta1" />
          </a>
          <a onClick={() => setAnswerd("Resposta2")}>
            <BtnAnswer title="Resposta2" />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
