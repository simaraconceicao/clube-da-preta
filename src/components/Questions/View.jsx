import React, { useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Title from "../../components/Questions/Title";
import BtnAnswer from "../../components/Questions/BtnAnswer";

const useStyles = makeStyles((theme) => ({
  gridTitle: {
    textAlign: "center",
    height: 150,
    marginTop: 16,
  },
  gridContainer: {
    paddingTop: 80,
    position: "relative",
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      paddingTop: "22%",
    },
  },
  gridBtn: {
    textAlign: "center",
    height: 110,
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
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
            sm={8}
            md={8}
            lg={5}
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
