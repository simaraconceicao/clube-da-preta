import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    color: "#646464",
    fontSize: 16,
    lineHeight: "20px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  descriptionLg: {
    display: "flex",
    justifyContent: "space-beetween",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function Info({ dados }) {
  const classes = useStyles();

  return (
    <p>
      <p
        className={classes.description}
        dangerouslySetInnerHTML={{ __html: dados.join("<br/>") }}
      ></p>
      <span className={classes.descriptionLg}>
        <span
          style={{ paddingRight: 46 }}
          dangerouslySetInnerHTML={{ __html: dados.slice(0, 2).join("<br/>") }}
        ></span>
        <span
          dangerouslySetInnerHTML={{ __html: dados.slice(2, 4).join("<br/>") }}
        ></span>
      </span>
    </p>
  );
}
