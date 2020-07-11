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
    display: "none",
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
        display: "none",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& #tablet": {
        display: "none",
      },
      "& #desktop": {
        display: "none",
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

    [theme.breakpoints.up("lg")]: {
      "& #esquerdamobile": {
        display: "none",
      },
      "& #esquerda": {
        display: "block",
      },
      "& #esquerdabaixo": {
        display: "none",
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
    "& #diretaxlg": {
      display: "none",
    },
    "& img": {
      position: "absolute",
    },

    [theme.breakpoints.up("sm")]: {
      "& #direitacima": {
        display: "none",
      },

      "& #diretamobile": {
        display: "flex",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& #direta": {
        display: "block",
      },
      "& #diretamobile": {
        display: "none",
      },

      "& #direitacimatablet": {
        display: "none",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& #direitacima": {
        display: "block",
      },

      "& #direitacimamobile": {
        display: "none",
      },
      "& #diretamobile": {
        display: "none",
      },
    },
    [theme.breakpoints.up("xl")]: {
      "& #diretacima": {
        display: "none !importante",
      },
      "& #direitacimaxlg": {
        display: "none",
      },
      "& #direta": {
        display: "none",
      },
      "& #diretaxlg": {
        display: "flex",
        bottom: 0,
      },
    },
  },
}));

export default function TemplateTres() {
  const classes = useStyles();

  const rota = "/perguntas/tres/";

  return (
    <Fragment>
      <Grid container className={classes.containerImg}>
        <Grid container className={classes.gridImgCima}>
          <img alt="Acima mobile" id="mobile" src={`${rota}cimamobile.svg`} />
          <img alt="Acima desktop" id="desktop" src={`${rota}cima.svg`} />
          <img alt="Acima tablet" id="tablet" src={`${rota}cimatablet.svg`} />
        </Grid>

        <Grid container className={classes.gridImgdireita}>
          <img alt="direita" id="direta" src={`${rota}direta.svg`} />
          <img
            alt="clube da preta"
            id="diretamobile"
            src={`${rota}diretamobile.svg`}
          />
          <img alt="direita" id="diretaxlg" src={`${rota}diretaxlg.svg`} />
        </Grid>
      </Grid>
      <Grid container className={classes.gridImgdireita}>
        <img
          alt="direitacima"
          id="direitacima"
          src={`${rota}linhadireita.svg`}
        />
        <img
          alt="direitacimamobile -clube da preta"
          id="direitacimamobile"
          src={`${rota}direitacimamobile.svg`}
        />
        <img
          alt="direitacimatablet-clube da preta"
          id="direitacimatablet"
          src={`${rota}direitacimatablet.svg`}
        />
        <img
          alt="direitacimalg"
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
