import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#646464",
    fontSize: 28,
    marginBottom: 0,
  },
  destaque: {
    letterSpacing: 7,
    fontSize: 28,
    fontFamily: "GothamHTF-BlackItalic",
    paddingLeft: 76,
    margin: 3,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 10,
      display: "inline",
      letterSpacing: 10,
    },
  },
}));

export default function Title({ title, color }) {
  const classes = useStyles();

  return (
    <p className={classes.title} style={{ whiteSpace: "wrap", color: color }}>
      Seu estilo é<p className={classes.destaque}>{title}</p>
    </p>
  );
}
