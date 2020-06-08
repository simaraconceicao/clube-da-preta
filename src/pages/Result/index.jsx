import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HeaderResult from "../../components/Result/HeaderResult";
import { useHistory } from "react-router-dom";
import Title from "../../components/Result/Title";
import Info from "../../components/Result/Info";
import Description from "../../components/Result/Description";
import ImgResult from "../../components/Result/ImgResult";
import { QuestionsContext } from "../../contexts/Questions";

const useStyles = makeStyles(() => ({
  questions: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "100vh",
    maxHeight: "100%",
    backgroundColor: "#F7F0F1",
    margin: 0,
    position: "relative",
  },
  gridTitle: {},
  gridStilo: {},
  gridDescription: {},
  gridContainer: {
    position: "relative",
    zIndex: 1,
  },
}));

export default function Result() {
  const classes = useStyles();
  const { getResult, getBackgroudByResult } = useContext(QuestionsContext);
  const history = useHistory();
  const dados = ["Esporte", "Esporte Fino", "Clássico", "Fashion"];
  const imgResult = "man.svg";
  const setAnswerd = (e) => {
    //addAnswerdOne(e);
    //history.push("/pergunta-2");
  };
  useEffect(() => {
    /*todas as questao foram respondidas? senao volte para tela inicial*/
    /*if (!isEmail()) {
      history.push("/");
    } else if (isAnswerdOne()) {
      history.push("/pergunta-2");
    }*/
  }, []);
  return (
    <Grid
      container
      direction="column"
      alignItems="start"
      className={classes.questions}
    >
      <HeaderResult img={"man.svg"} />
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        className={classes.gridContainer}
      >
        <ImgResult img={imgResult} />
        <Grid item xs={12} className={classes.gridTitle}>
          <Title title="Básico" />
        </Grid>
        <Grid container item xs={9} className={classes.gridDescription}>
          <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula metus, interdum quis blandit sit amet, fermentum et nulla. Cras erat risus, auctor et nisi non, imperdiet pretium magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </Grid>
        <Grid item xs={9} className={classes.gridStilo}>
          <Info dados={dados} />
        </Grid>
        <img src="logocp.svg" />
      </Grid>
    </Grid>
  );
}
