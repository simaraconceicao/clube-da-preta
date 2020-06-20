import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridHeader: {
    color: "#646464",
    position: "absolute",
    "& img": {
      width: "100%",
      right: "-100px",
      top: "-147px",
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        width: "50%",
        right: "-60px",
        top: "-620px",
      },
    },
  },
}));

export default function HeaderResult({ img }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.gridHeader}>
      <img alt="logo resultado quizz" src={img} />
    </Grid>
  );
}
