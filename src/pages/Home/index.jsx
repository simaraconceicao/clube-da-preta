import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Header from "../../components/Header";
import { QuestionsContext } from "../../contexts/Questions";
import { useHistory } from "react-router-dom";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  home: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "100vh",
    background: "#fdeec9 url('woman.svg') no-repeat -80px -92%",
    backgroundSize: "560px 753px",
  },
  hOne: {
    textAlign: "center",
  },
  p: {
    textAlign: "center",
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
  const [messageError, setmessageError] = useState("");
  const classes = useStyles();
  const { addEmail } = useContext(QuestionsContext);
  const history = useHistory();

  const setEmail = (e) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regex.test(e.target.value));
    if (regex.test(e.target.value)) {
      addEmail(e.target.value);
      setIsValid(true);
      setIsError(false);
    } else {
      setIsError(true);
      setIsValid(false);
      setmessageError("Digite um e-mail válido!");
    }
  };

  const goToQuestion = () => {
    if (isValid) {
      history.push("/pergunta-1");
    } else {
      setmessageError("Email vazio ou inválido!");
      setIsError(true);
    }
  };

  return (
    <Grid container className={classes.home}>
      <Header />
      <Grid item>
        <h1 className={classes.hOne}>Qual o seu estilo?</h1>
        <p className={classes.p}>
          Você tem ideia de qual é seu estilo feito por afroempreendedores?
          Identificamos dentre os fornecedores do Clube da Preta alguns diversos
          estilos de moda. E conseguimos identificar 5 que são os mais comuns
          entre eles: Basico, Clássico, Casual, Esporte e Fashion. Que tal
          participar do nosso quiz para saber qual mais combina com você? Vem,
          vamos descobrir juntos!
        </p>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <BootstrapInput
          fullWidth
          label="Qual o seu Email?"
          onChange={setEmail}
        />
        {isError && <span className={classes.spanError}>{messageError}</span>}
        <Button
          variant="contained"
          className={classes.btn}
          onClick={goToQuestion}
        >
          Vamos descobrir?
        </Button>
      </Grid>
    </Grid>
  );
}
