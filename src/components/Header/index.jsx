import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridheader: {
    height: 100,
    fontFamily: "Intro Bold, Regular",
    color: "#F27253",
    [theme.breakpoints.down("md")]: {
      //display: "none",
    },
  },
}));

export default function Header({ color }) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.gridheader}
      justify="space-between"
      alignItems="center"
      style={{ color: color }}
    >
      <Grid item>
        <span>Quiz: Qual seu estilo?</span>
      </Grid>
      <Grid item>
        <img src="logocp.svg" />
      </Grid>
    </Grid>
  );
}
