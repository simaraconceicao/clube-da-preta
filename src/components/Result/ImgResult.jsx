import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridImg: {
    color: "#646464",
    position: "absolute",
    zIndex: "-1",
    "& img": {
      width: "150%",
      right: "-61%",
      top: "89px",
      position: "absolute",
      [theme.breakpoints.up("md")]: {
        top: "-93px",
        right: "-19%",
        width: "77%",
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
