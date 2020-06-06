import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import Title from "../../components/Questions/Title";
import BtnAnswer from "../../components/Questions/BtnAnswer";

const useStyles = makeStyles((theme) => ({
  questions: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "100vh",
    background: "#f27253 url('questions.svg') no-repeat  70% 105%",
    backgroundSize: "187% 128%",
  },
}));

export default function QuestionTwo() {
  const classes = useStyles();
  const history = useHistory();

  const setAnswerd = () => {
    history.push("/pergunta-2");
  };
  return (
    <Grid container className={classes.questions}>
      <Header />
      <Grid item>
        <Title title="Primeira Pergunta?" />
        <BtnAnswer title="Resposta1" answerd={() => setAnswerd} />
        <BtnAnswer title="Resposta2" />
      </Grid>
    </Grid>
  );
}
