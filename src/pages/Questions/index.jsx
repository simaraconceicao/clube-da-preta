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
    backgroundColor: "#f27253",
    position: "relative",
    zIndex: 3,
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
  ldIlustAbsolute: {
    position: "absolute",
    width: "100%",
    marginTop: 12,
  },
  ldIlust: {
    width: "50%",
    right: 0,
    position: "absolute",
    bottom: -331,
    [theme.breakpoints.up("sm")]: {
      bottom: -592,
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      bottom: -652,
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      top: -43,
      left: "auto",
      width: "30%",
      right: 128,
    },
  },

  leIlust: {
    width: "50%",
    bottom: 0,
    left: -44,
    position: "absolute",
    bottom: -331,
    [theme.breakpoints.up("sm")]: {
      bottom: -652,
      width: "60%",
      left: -104,
    },
    [theme.breakpoints.up("md")]: {
      bottom: -652,
      width: "60%",
      left: -104,
    },
    [theme.breakpoints.up("lg")]: {
      left: -278,
      width: "30%",
      bottom: -552,
    },
  },
}));

export default function Question() {
  const classes = useStyles();
  const color = "#f27253";
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
      <Container maxWidth="lg">
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
        <Grid container justify="center" className={classes.imgheaderIlust}>
          <img src="imagemheader.png" alt="Imagem de cima" />
        </Grid>
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

      <Grid className={classes.ldIlustAbsolute}>
        <img
          className={classes.ldIlust}
          src="im-lado-direito.png"
          alt="Imagem de Lado"
        />
        <img
          className={classes.leIlust}
          src="img-lado-esquerdo.png"
          alt="Imagem de Lado"
        />
      </Grid>
    </Fragment>
  );
}
