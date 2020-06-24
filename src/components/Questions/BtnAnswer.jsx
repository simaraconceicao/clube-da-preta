import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#f27253",
    backgroundColor: "#fdeec9",
    border: "#f27253 1px solid",
    boxShadow: "0px",
    minWidth: "100%",
    minHeight: 40,
    textTransform: "capitalize",
    fontWeight: 900,
    "&:hover": {
      backgroundColor: "#fdeec9",
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      minWidth: "80%",
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
