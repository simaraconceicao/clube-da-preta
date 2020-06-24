import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridheader: {
    height: 50,
    fontFamily: "Intro Bold, Regular",
    color: "#F27253",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
  },
  titulo: {
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.up("md")]: {
      height: 100,
      fontSize: 16,
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
        <span className={classes.titulo}>Quiz: Qual seu estilo?</span>
      </Grid>
      <Grid item>
        <img src="logocp.svg" />
      </Grid>
    </Grid>
  );
}
