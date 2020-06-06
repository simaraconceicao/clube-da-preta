import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    backgroundColor: "#646464",
  },
}));

export default function BtnAnswer({ title }) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.btn}>
      {title}
    </Button>
  );
}
