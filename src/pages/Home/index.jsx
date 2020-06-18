import React, { useState, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Header from "../../components/Header";
import { QuestionsContext } from "../../contexts/Questions";
import { useHistory } from "react-router-dom";
import config from "../../config/config";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  home: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "100vh",
    backgroundColor: "#fdeec9",
    maxHeight: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("lg")]: {
      position: "relative",
    },
  },
  hOne: {
    textAlign: "center",
    margin: "7px 0",
    [theme.breakpoints.up("md")]: {
      fontSize: "3.0rem",
      margin: 16,
    },
  },
  p: {
    textAlign: "center",
    letterSpacing: 1.0,
    lineHeight: 1.2,
    [theme.breakpoints.up("md")]: {
      letterSpacing: 1.2,
      lineHeight: 1.5,
    },
  },
  btn: {
    color: "#fff",
    width: 170,
    height: 40,
    backgroundColor: "#f27253",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#f27250",
    },
  },
  spanError: {
    color: "red",
    fontSize: 14,
    textAlign: "left",
    marginBottom: 6,
    display: "block",
    width: "100%",
  },
  gridImg: {
    display: "none",
    backgroundColor: "rgba(255,255,255,0.01)",
    position: "absolute",
    zIndex: "-1",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      "& img": {
        right: "0",
        left: 220,
        position: "absolute",
        top: "-293px",
      },
    },
  },
  gridImgWoman: {
    position: "absolute",
    zIndex: "-1",
    right: "44px",
    left: "-152px",
    top: "-94px",
    backgroundColor: "rgba(255,255,255,0.01)",
    "& img": {
      width: "152%",
    },
    [theme.breakpoints.up("sm")]: {
      "& img": {
        position: "absolute",
        top: -10,
        right: 0,
        left: "-37%",
        width: "110%",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& img": {
        position: "absolute",
        top: -210,
        right: 0,
        left: "-76%",
        width: "160%",
      },
      [theme.breakpoints.up("lg")]: {
        "& img": {
          position: "absolute",
          top: -286,
          right: 0,
          left: "-8%",
          width: 999,
        },
      },
    },
  },
  gridContainer: {
    position: "relative",
    zIndex: 1,
  },
}));

const BootstrapInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #f27253",
    color: "#f27253",
    fontSize: 16,
    width: "100%",
    height: "30px",
    padding: "10px 12px",
    marginBottom: 2,
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&focused": {
      backgroundColor: "#fff",
      borderColor: "f27253",
    },
  },
}))(InputBase);

export default function Home() {
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [email, setEmailState] = useState("");

  const [messageError, setmessageError] = useState("");
  const classes = useStyles();
  const { addEmail, isEmail } = useContext(QuestionsContext);
  const history = useHistory();

  const setEmail = (e) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(e.target.value)) {
      setIsValid(true);
      setIsError(false);
      setEmailState(e.target.value);
    } else {
      setIsError(true);
      setIsValid(false);
      setmessageError("Digite um e-mail válido!");
    }
  };

  const goToQuestion = () => {
    console.log(config);
    const send = {
      Email: email,
      MachineCode: config.MACHINE_CODE_LEADLO,
      EmailSequenceCode: config.EMAIL_SEQUNCE_CODE_LEADLO,
      SequenceLevelCode: config.SEQUENCE_LEVEL_CODE_LEADLO,
    };
    if (isValid) {
      fetch(`${config.URL_API_LEADLO}token=${config.TOKEN_API_LEADLO}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: config.AUTHORIZATION,
        },
        body: JSON.stringify(send),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (result.StatusCode === 200) {
            addEmail(email);
            history.push("/perguntas");
          }
        })
        .catch((e) => {
          setmessageError("Ocorreu Algum problema com o servidor");
        });
    } else {
      setmessageError("Email vazio ou inválido!");
      setIsError(true);
    }
  };

  useEffect(() => {
    if (isEmail()) {
      history.push("/perguntas");
    }
  }, []);

  return (
    <Grid container className={classes.home}>
      <Header />
      <Grid container alignItems="center" direction="column">
        <Grid
          container
          alignItems="center"
          direction="column"
          item
          md={8}
          xs={12}
          lg={12}
          className={classes.gridContainer}
        >
          <Grid item lg={4} className={classes.gridImgWoman}>
            <img src="woman-home.svg" />
          </Grid>
          <Grid item lg={6} style={{ textAlign: "center" }}>
            <h1 className={classes.hOne}>Qual o seu estilo?</h1>
            <p className={classes.p}>
              Você tem ideia de qual é seu estilo feito por afroempreendedores?
              Identificamos dentre os fornecedores do Clube da Preta alguns
              diversos estilos de moda. E conseguimos identificar 5 que são os
              mais comuns entre eles: Basico, Clássico, Casual, Esporte e
              Fashion. Que tal participar do nosso quiz para saber qual mais
              combina com você? Vem, vamos descobrir juntos!
            </p>

            <BootstrapInput
              fullWidth
              label="Qual o seu Email?"
              onChange={setEmail}
            />
            {isError && (
              <span className={classes.spanError}>{messageError}</span>
            )}
            <br />
            <br />
            <Button
              variant="contained"
              className={classes.btn}
              onClick={goToQuestion}
            >
              Vamos descobrir?
            </Button>
          </Grid>
          <Grid item lg={2} className={classes.gridImg}>
            <img src="man.svg" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
