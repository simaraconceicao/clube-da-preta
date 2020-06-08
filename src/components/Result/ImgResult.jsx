import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  gridImg: {
    color: "#646464",
    position: "absolute",
    zIndex: "-1",
    "& img": {
      width: "150%",
      right: "-61%",
      top: "89px",
      position: "absolute",
    },
  },
}));

export default function ImgResult({ img }) {
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.gridImg}>
      <img src={img} />
    </Grid>
  );
}
