import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridImg: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      zIndex: "-1",
    },
    "& img": {
      width: "110%",
      [theme.breakpoints.up("md")]: {
        top: "-93px",
        right: "-19%",
        width: "77%",
        position: "absolute",
      },
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
