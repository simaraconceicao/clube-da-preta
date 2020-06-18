import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  description: {
    color: "#646464",
    fontSize: "14px",
    lineHeight: "19px",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
      lineHeight: "29px",
    },
  },
}));
export default function Description({ description, color }) {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  let text = description;
  console.log(color);
  if (matches) {
    text = description.substr(
      0,
      description.indexOf(".", description.indexOf(".") + 1)
    );
    const text2 = description.substr(
      description.indexOf(".", description.indexOf(".") + 1) + 1
    );

    text = text + ".<br/></br>" + text2;
  }

  return (
    <p
      className={classes.description}
      dangerouslySetInnerHTML={{ __html: text }}
      style={{ color: color }}
    ></p>
  );
}
