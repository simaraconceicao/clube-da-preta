/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Title from "../../components/Questions/Title";
import BtnAnswer from "../../components/Questions/BtnAnswer";

const useStyles = makeStyles((theme) => ({
  gridTitle: {
    textAlign: "center",
    padding: "16px 0",
  },
  gridContainer: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      //paddingTop: "22%",
    },
    [theme.breakpoints.up("LG")]: {
      //paddingTop: "19%",
    },
  },
  gridBtn: {
    textAlign: "center",
    height: 110,
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
    "& a": {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      "& a": {
        width: "50%",
      },
    },
  },
}));

export default function View({ question, show, onRealQuestion }) {
  const classes = useStyles();

  useEffect(() => {}, [show]);

  const setAnswerd = (answerd) => {
    onRealQuestion({ id: question.id, answerd: answerd });
  };

  return (
    <Grid
      container
      className={classes.gridContainer}
      style={{ display: !show ? "none" : "" }}
      direction="row"
      justify="center"
    >
      {question !== "undefined" && (
        <Fragment>
          <Grid item xs={12} md={12} lg={12} className={classes.gridTitle}>
            <Title title={question.title} />
          </Grid>
          <Grid
            item
            container
            justify="space-between"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.gridBtn}
          >
            {question.answerds.map((answerd) => (
              <a onClick={() => setAnswerd(answerd.answerd)}>
                <BtnAnswer title={answerd.title} />
              </a>
            ))}
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
}
