import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridheader: {
    height: 50,
    fontFamily: "Intro Bold, Regular",
    color: "#F27253",
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
  console.log(color);
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
      <Grid item className={classes.logo}>
        <img
          alt="logo"
          src="/logocp.svg"
          style={{ display: color === "#f27253" ? "none" : "block" }}
        />
        <img
          alt="logo"
          src="/logoEsporteFino.svg"
          width="120px"
          height="50px"
          style={{ display: color === "#f27253" ? "block" : "none" }}
        />
      </Grid>
    </Grid>
  );
}
