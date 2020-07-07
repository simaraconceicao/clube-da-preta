import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 4,
    fontWeight: 900,
    [theme.breakpoints.up("md")]: {
      fontSize: 34,
      letterSpacing: 4,
    },
  },
}));

export default function Title({ title }) {
  const classes = useStyles();

  return <span className={classes.title}>{title}</span>;
}
