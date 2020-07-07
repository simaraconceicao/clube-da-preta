/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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

export default function TemplateUm() {
  const classes = useStyles();

  return (
    <Fragment>
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
        <img alt="clube da preta" id="esquerda" src="/perguntas/esquerda.svg" />
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
    </Fragment>
  );
}
