import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  description: {
    color: "#646464",
    fontSize: "16px",
    lineHeight: "19px",
  },
}));

export default function Description({ description }) {
  const classes = useStyles();

  return <p className={classes.description}>{description}</p>;
}
