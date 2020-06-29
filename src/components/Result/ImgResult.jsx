import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  gridImg: {
    "& img": {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-104px",
      "& img": {
        width: "150%",
        height: "150%",
      },
    },
  },
}));

export default function ImgResult({ img }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.gridImg}>
      <img alt="Imagem to shared" src={img} />
    </Grid>
  );
}
