import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import View from "../../components/Questions/View";
import BtnSocialGroup from "../../components/BtnSocialGroup";
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
    backgroundColor: "#f27253",
    overflow: "hidden",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    bottom: 20,
    position: "absolute",
    zIndex: 2,
    "& strong:first-child": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
      bottom: 10,
    },
  },

  imgheaderIlust: {
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    display: "flex",
    zIndex: "1",
    top: -6,
    left: 0,
    justifyContent: "center",
    "& img": {
      width: "147%",
    },
    [theme.breakpoints.up("sm")]: {
      top: -68,
      left: 0,
    },
    [theme.breakpoints.up("md")]: {
      "& img": {
        width: "290%",
      },
    },

    [theme.breakpoints.up("lg")]: {
      top: -174,
      left: 40,
      "& img": {
        width: "90%",
      },
    },
  },
  ldIlust: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
    right: -122,
    bottom: -12,
    width: "100%",
    "& img": {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      right: -246,
    },

    [theme.breakpoints.up("md")]: {
      right: -519,
      bottom: 0,
      "& img": {
        width: "50%",
      },
    },
    [theme.breakpoints.up("lg")]: {
      left: 859,
      bottom: 0,
      "& img": {
        width: "auto%",
      },
    },
  },

  leIlust: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
    bottom: 0,
    top: 80,
    width: "100%",
    left: -80,
    "& img": {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      top: 23,
      left: -104,
      "& img": {
        width: "70%",
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& img": {
        width: "auto",
      },
    },
    [theme.breakpoints.up("lg")]: {
      top: 50,
      left: -274,
      "& img": {
        width: "auto",
      },
    },
  },
}));

export default function Question() {
  const classes = useStyles();
  const color = "#f27253";
  const colorHeader = "#fff";
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
      <div className={classes.imgheaderIlust}>
        <img src="imagemheader.png" alt="Imagem de cima" />
      </div>
      <Container maxWidth="lg" style={{ position: "relative", zIndex: 1 }}>
        <Grid item xs={12}>
          <Header color={colorHeader} />
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
          style={{ color: colorHeader }}
        >
          <strong onClick={gotToStart}>voltar ao início</strong>
          <Grid item xs={4} lg={2}>
            <BtnSocialGroup />
          </Grid>
        </Grid>
        <div className={classes.ldIlust}>
          <img src="im-lado-direito.png" alt="Imagem de Lado" />
        </div>
        <div className={classes.leIlust}>
          <img src="img-lado-esquerdo.png" alt="Imagem de Lado" />
        </div>
      </Container>
    </Grid>
  );
}
