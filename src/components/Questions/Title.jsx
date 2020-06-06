import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    fontSize: 24,
    letterSpacing: 4,
  },
}));

export default function Title({ title }) {
  const classes = useStyles();

  return <span className={classes.title}>{title}</span>;
}
