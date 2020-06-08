import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  gridHeader: {
    color: "#646464",
    position: "absolute",
    "& img": {
      width: "100%",
      right: "-161px",
      top: "-147px",
      position: "absolute",
    },
  },
}));

export default function HeaderResult({ title }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.gridHeader}>
      <img src="canto-resultado-laran-mobile.svg" />
    </Grid>
  );
}
