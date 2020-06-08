import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    color: "#646464",
    fontSize: 28,
    marginBottom: 0,
  },
  destaque: {
    letterSpacing: 7,
    fontSize: 28,
    font: "Bold 68px/60px Chauncy Pro",
    paddingLeft: 76,
  },
}));

export default function Title({ title }) {
  const classes = useStyles();

  return (
    <p className={classes.title}>
      Seu estilo é<br />
      <span className={classes.destaque}>{title}</span>
    </p>
  );
}
