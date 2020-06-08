import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  description: {
    color: "#646464",
    fontSize: 16,
  },
}));

export default function Info({ dados }) {
  const classes = useStyles();

  return (
    <p
      className={classes.description}
      dangerouslySetInnerHTML={{ __html: dados.join("<br/>") }}
    ></p>
  );
}
