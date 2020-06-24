import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  description: {
    color: "#646464",
    fontSize: 16,
    lineHeight: "20px",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  descriptionLg: {
    display: "flex",
    lineHeight: "20px",
    justifyContent: "space-beetween",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Info({ dados, color }) {
  const classes = useStyles();
  return (
    <Grid>
      <p
        className={classes.description}
        style={{ color: color }}
        dangerouslySetInnerHTML={{ __html: dados.join("<br/>") }}
      ></p>
      <span className={classes.descriptionLg} style={{ color: color }}>
        <span
          style={{ padding: "20px 46px 0 2px" }}
          dangerouslySetInnerHTML={{ __html: dados.slice(0, 2).join("<br/>") }}
        ></span>
        <br />
        <br />
        <span
          style={{ padding: "20px 46px 0 2px" }}
          dangerouslySetInnerHTML={{ __html: dados.slice(2, 4).join("<br/>") }}
        ></span>
      </span>
    </Grid>
  );
}
