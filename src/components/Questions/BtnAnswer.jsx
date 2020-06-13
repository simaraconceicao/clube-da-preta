import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    backgroundColor: "#f27253",
    border: "#fff 1px solid",
    boxShadow: 0,
    minWidth: 200,
    height: 40,

    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#f27200",
    },
    [theme.breakpoints.up("sm")]: {},
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
