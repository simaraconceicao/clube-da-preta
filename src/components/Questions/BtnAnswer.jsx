import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  btn: {
    color: "#fff",
    backgroundColor: "#f27253",
    border: "#fff 1px solid",
    boxShadow: 0,
    maxWidth: 200,
    height: 40,
    margin: 4,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#f27200",
    },
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
