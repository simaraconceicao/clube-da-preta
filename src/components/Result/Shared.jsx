import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  shared: {
    color: "#646464",
    fontSize: 12,
    borderRadius: "50%",
    width: 160,
    height: 160,
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 26,
  },

  imgShared: {},
}));

export default function Shared({ title }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.shared}
    >
      <p>COMPARTILHE SEU RESULTADO</p>
      <Grid container className={classes.imgShared}>
        <img src="" />
        <img src="" />
      </Grid>
    </Grid>
  );
}
