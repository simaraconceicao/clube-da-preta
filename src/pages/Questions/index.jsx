/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import View from "../../components/Questions/View";
import BtnSocialGroup from "../../components/BtnSocialGroup";
import { QuestionsContext } from "../../contexts/Questions";
import Helmet from "react-helmet";
import QuestionsApp from "../../texts/texts.json";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  questions: {
    color: "#646464",
    position: "relative",
    zIndex: 3,
    height: "80%",
  },
  footer: {
    bottom: 20,
    color: "#fff",
    "& strong:first-child": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {},
  },

  imgheaderIlust: {
    position: "absolute",
    top: -146,
    left: 0,

    [theme.breakpoints.up("sm")]: {
      top: -48,
      left: 0,
    },

    [theme.breakpoints.up("md")]: {
      top: -14,
    },

    [theme.breakpoints.up("lg")]: {
      top: -82,
      left: "auto",
    },
  },

  containerImg: {
    position: "absolute",
  },

  gridImgCima: {
    position: "absolute",
    justifyContent: "center",
    "& img": {
      position: "absolute",
    },
    "& #desktop": {
      display: "none",
    },
    "& #tablet": {
      display: "none",
    },

    [theme.breakpoints.up("sm")]: {
      "& #mobile": {
        display: "none",
      },
      "& #desktop": {
        display: "none",
      },
      "& #tablet": {
        display: "block",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& #tablet": {
        display: "none",
      },
      "& #desktop": {
        display: "block",
      },
    },

    [theme.breakpoints.up("lg")]: {
      //width: "100%",
    },
  },
  gridImgesquerda: {
    position: "absolute",
    justifyContent: "flex-start",
    height: "100%",
    "& #esquerda": {
      display: "none",
    },
    "& #esquerdabaixo": {
      display: "none",
    },
    "& #esquerdabaixomobile": {
      bottom: 0,
    },

    "& img": {
      position: "absolute",
    },

    [theme.breakpoints.up("sm")]: {
      "& #esquerdamobile": {
        display: "none",
      },
      "& #esquerda": {
        display: "block",
        top: 10,
      },
      "& #esquerdabaixo": {
        display: "block",
        bottom: 0,
      },
      "& #esquerdabaixomobile": {
        display: "none",
      },
    },
  },
  gridImgdireita: {
    position: "absolute",
    height: "100vh",
    justifyContent: "flex-end",
    "& #direitacima": {
      display: "none",
    },

    "& #direitacimatablet": {
      display: "none",
    },
    "& #direitacimaxlg": {
      display: "none",
    },

    "& #direta": {
      display: "none",
      bottom: 0,
    },
    "& #diretamobile": {
      bottom: 0,
    },
    "& img": {
      position: "absolute",
    },

    [theme.breakpoints.up("sm")]: {
      "& #direitacima": {
        display: "none",
      },
      "& #direitacimamobile": {
        display: "none",
      },
      "& #direta": {
        display: "block",
      },

      "& #direitacimatablet": {
        display: "block",
      },
      "& #diretamobile": {
        display: "none",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& #direta": {
        display: "block",
      },
      "& #diretamobile": {
        display: "none",
      },
      "& #direitacima": {
        display: "block",
      },
      "& #direitacimatablet": {
        display: "none",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& #direitacima": {
        display: "block",
      },
    },
    [theme.breakpoints.up("xl")]: {
      "& #diretacima": {
        display: "none !importante",
        top: "-897px",
      },
      "& #direitacimaxlg": {
        display: "block",
      },
    },
  },
}));

export default function Question() {
  const classes = useStyles();
  let colorHeader = "#f27253";
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  if (matches) {
    colorHeader = "#fff";
  }

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
    setAnswerds(cacheAnswerd);
  };

  useEffect(() => {
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
    <Fragment>
      <Grid
        container
        style={{ overflow: "hidden", maxWidth: "100%", position: "relative" }}
      >
        <Grid container className={classes.containerImg}>
          <Grid container className={classes.gridImgCima}>
            <img alt="Acima" id="mobile" src="/perguntas/cimamobile.svg" />
            <img alt="Acima" id="desktop" src="/perguntas/cima.svg" />
            <img alt="Acima" id="tablet" src="/perguntas/cimatablet.svg" />
          </Grid>

          <Grid container className={classes.gridImgdireita}>
            <img alt="clube da preta" id="direta" src="/perguntas/direta.svg" />
            <img
              alt="clube da preta"
              id="diretamobile"
              src="/perguntas/diretamobile.svg"
            />
          </Grid>
        </Grid>
        <Grid container className={classes.gridImgdireita}>
          <img
            alt="clube da preta"
            id="direitacima"
            src="/perguntas/linhadireita.svg"
          />
          <img
            alt="clube da preta"
            id="direitacimamobile"
            src="/perguntas/direitacimamobile.svg"
          />
          <img
            alt="clube da preta"
            id="direitacimatablet"
            src="/perguntas/direitacimatablet.svg"
          />
          <img
            alt="clube da preta"
            id="direitacimaxlg"
            src="/perguntas/direitacimaxlg.svg"
          />
        </Grid>

        <Grid container className={classes.gridImgesquerda}>
          <img
            alt="clube da preta"
            id="esquerda"
            src="/perguntas/esquerda.svg"
          />
        </Grid>
        <Grid container className={classes.gridImgesquerda}>
          <img
            alt="clube da preta"
            id="esquerdabaixo"
            src="/perguntas/esquerdabaixo.svg"
          />
          <img
            alt="clube da preta"
            id="esquerdabaixomobile"
            src="/perguntas/esquerdabaixomobile.svg"
          />
        </Grid>
        <Container
          maxWidth="lg"
          style={{ position: "relative", height: "100vh" }}
        >
          <Helmet>
            <title>Responda as perguntas - Club da Preta</title>
            <meta name="description" content="Quiz: Qual seu estilo?" />
            <style>{"body { background-color: #f27253; }"}</style>
          </Helmet>

          <Grid
            container
            direction="row"
            justify="center"
            className={classes.questions}
          >
            <Grid item xs={12} md={12} lg={12} style={{ position: "relative" }}>
              <Header color={colorHeader} />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{ position: "relative", zIndex: 2 }}
            >
              {questions.map((question) => (
                <View
                  key={question.id}
                  question={question}
                  show={question.id == nowQuestion}
                  onRealQuestion={(e) => getRealQuestion(e)}
                />
              ))}
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              className={classes.footer}
              lg={12}
              xs={12}
            >
              <strong onClick={gotToStart}>voltar ao início</strong>
              <Grid item xs={4} lg={2} container justify="flex-end">
                <BtnSocialGroup />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Fragment>
  );
}
