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
    "& #desktopxlg": {
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

    [theme.breakpoints.up("xl")]: {
      //width: "100%",
      "& #desktop": {
        display: "none",
      },
      "& #desktopxlg": {
        display: "flex",
      },
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
      "& #esquerdamobile": {},
      "& #esquerda": {},
      "& #esquerdabaixo": {
        bottom: 0,
      },
      "& #esquerdabaixomobile": {
        display: "none",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& #esquerdamobile": {},
      "& #esquerda": {},
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
    "& #diretaxlg": {
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
        display: "none",
      },
      "& #diretamobile": {},
    },
    [theme.breakpoints.up("md")]: {
      "& #direta": {
        display: "none",
      },
      "& #diretamobile": {
        display: "none",
      },
      "& #direitacima": {},
      "& #direitacimatablet": {
        display: "none",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& #direitacima": {
        display: "flex",
      },
      "& #direta": {
        display: "flex",
      },
    },
    [theme.breakpoints.up("xl")]: {
      "& #direitacimaxlg": {
        display: "flex",
      },
      "& img": {
        bottom: 0,
      },

      "& #diretaxlg": {
        display: "block",
      },

      "& #direta": {
        display: "none",
      },
    },
  },
}));

export default function TemplateDois() {
  const classes = useStyles();

  const rota = "/perguntas/dois/";

  return (
    <Fragment>
      <Grid container className={classes.containerImg}>
        <Grid container className={classes.gridImgCima}>
          <img alt="Acima" id="mobile" src={`${rota}cimamobile.svg`} />
          <img alt="Acima" id="desktop" src={`${rota}cima.svg`} />
          <img alt="Acima" id="tablet" src={`${rota}cimatablet.svg`} />
          <img alt="cimaxlg" id="desktopxlg" src={`${rota}cimaxlg.svg`} />
        </Grid>

        <Grid container className={classes.gridImgdireita}>
          <img alt="clube da preta" id="direta" src={`${rota}direta.svg`} />
          <img
            alt="clube da preta"
            id="diretamobile"
            src={`${rota}diretamobile.svg`}
          />
          <img
            alt="clube da preta"
            id="diretaxlg"
            src={`${rota}diretaxlg.svg`}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.gridImgdireita}>
        <img
          alt="clube da preta"
          id="direitacima"
          src={`${rota}linhadireita.svg`}
        />
        <img
          alt="clube da preta"
          id="direitacimamobile"
          src={`${rota}direitacimamobile.svg`}
        />
        <img
          alt="clube da preta"
          id="direitacimatablet"
          src={`${rota}direitacimatablet.svg`}
        />
        <img
          alt="clube da preta"
          id="direitacimaxlg"
          src={`${rota}direitacimaxlg.svg`}
        />
      </Grid>

      <Grid container className={classes.gridImgesquerda}>
        <img alt="clube da preta" id="esquerda" src={`${rota}esquerda.svg`} />
      </Grid>
      <Grid container className={classes.gridImgesquerda}>
        <img
          alt="clube da preta"
          id="esquerdabaixo"
          src={`${rota}esquerdabaixo.svg`}
        />
        <img
          alt="clube da preta"
          id="esquerdabaixomobile"
          src={`${rota}esquerdabaixomobile.svg`}
        />
      </Grid>
    </Fragment>
  );
}
