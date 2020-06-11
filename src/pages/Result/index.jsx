import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HeaderResult from "../../components/Result/HeaderResult";
import { useHistory } from "react-router-dom";
import Title from "../../components/Result/Title";
import Info from "../../components/Result/Info";
import Description from "../../components/Result/Description";
import ImgResult from "../../components/Result/ImgResult";
import Shared from "../../components/Result/Shared";
import { QuestionsContext } from "../../contexts/Questions";
import Header from "../../components/Header";

import textsApp from "../../texts/texts.json";

const useStyles = makeStyles((theme) => ({
  questions: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "100vh",
    maxHeight: "100vh",
    backgroundColor: "#F7F0F1",
    margin: 0,
    position: "relative",
    overflow: "hidden",
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  gridContainer: {
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      maxWidth: 1280,
    },
  },
  gridDescription: {
    [theme.breakpoints.up("md")]: {
      marginBottom: 100,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridTitle: {
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
    },
  },
  gridDescriptionLg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  gridShared: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  footer: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    bottom: 61,
    position: "fixed",
    zIndex: 1,
    "& strong:first-child": {
      cursor: "pointer",
    },
  },
}));

function geTitleByResult(result) {
  switch (result) {
    case textsApp.basic.id:
      return <Title title={textsApp.basic.title} />;
    case textsApp.casual.id:
      return <Title title={textsApp.casual.title} />;
    case textsApp.classico.id:
      return <Title title={textsApp.classico.title} />;
    case textsApp.esporte.id:
      return <Title title={textsApp.esporte.title} />;
    case textsApp.fashion.id:
      return <Title title={textsApp.fashion.title} />;

    default:
      return <Title title={textsApp.basic.title} />;
  }
}

function getDescriptionByResult(result) {
  switch (result) {
    case textsApp.basic.id:
      return <Description description={textsApp.basic.description} />;
    case textsApp.casual.id:
      return <Description description={textsApp.casual.description} />;
    case textsApp.classico.id:
      return <Description description={textsApp.classico.description} />;
    case textsApp.esporte.id:
      return <Description description={textsApp.esporte.description} />;
    case textsApp.fashion.id:
      return <Description description={textsApp.fashion.description} />;

    default:
      return <Description description={textsApp.basic.description} />;
  }
}

function getHeaderByResult(result) {
  switch (result) {
    case textsApp.basic.id:
      return <HeaderResult img={textsApp.basic.imgHeader} />;
    case textsApp.casual.id:
      return <HeaderResult img={textsApp.casual.imgHeader} />;
    case textsApp.classico.id:
      return <HeaderResult description={textsApp.classico.imgHeader} />;
    case textsApp.esporte.id:
      return <HeaderResult description={textsApp.esporte.imgHeader} />;
    case textsApp.fashion.id:
      return <HeaderResult description={textsApp.fashion.imgHeader} />;

    default:
      return <HeaderResult img={textsApp.basic.imgHeader} />;
  }
}

function getImgByResult(result) {
  switch (result) {
    case 1:
      return <ImgResult img={textsApp.basic.img} />;
    case 2:
      return <ImgResult img={textsApp.casual.img} />;

    default:
      return <ImgResult img={textsApp.basic.img} />;
  }
}

function getStyleByResult(result) {
  switch (result) {
    case 1:
      return <Info dados={textsApp.basic.style} />;
    case 2:
      return <Info dados={textsApp.casual.style} />;

    default:
      return <Info dados={textsApp.basic.style} />;
  }
}

export default function Result() {
  const classes = useStyles();
  const { getResult, cleanAllSession } = useContext(QuestionsContext);
  const history = useHistory();

  const gotToStart = () => {
    cleanAllSession();
    history.push("/");
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
      <Container maxWidth="lg">
        <Header />
        {getHeaderByResult(getResult())}
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          className={classes.gridContainer}
        >
          {getImgByResult(getResult())}

          <Grid item xs={12} className={classes.gridTitle}>
            {geTitleByResult(getResult())}
          </Grid>
          <Grid
            container
            item
            xs={10}
            lg={4}
            className={classes.gridDescription}
          >
            {getDescriptionByResult(getResult())}
          </Grid>
          <Grid
            container
            item
            xs={10}
            md={12}
            className={classes.gridDescriptionLg}
          >
            <Grid item md={5} style={{ paddingRight: 20 }}>
              {getDescriptionByResult(getResult())}
            </Grid>
            <Grid item md={6} style={{ padding: "84px 0 0 40px" }}>
              <Shared />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            direction="row"
            className={classes.gridStilo}
          >
            <Grid item md={3} xs={6}>
              <strong>Conheça outros estilos</strong>
              <br />
              {getStyleByResult(getResult())}
            </Grid>
            <Grid item xs={2} className={classes.gridShared}>
              <Shared />
            </Grid>
          </Grid>

          <img src="logocp.svg" />
        </Grid>
        <footer className={classes.footer}>
          <strong onClick={gotToStart}>refazer o teste</strong>
          <strong>ilustração by humaaans</strong>
        </footer>
      </Container>
    </Grid>
  );
}
