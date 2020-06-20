import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HeaderResult from "../../components/Result/HeaderResult";
import { useHistory } from "react-router-dom";
import Title from "../../components/Result/Title";
import Info from "../../components/Result/Info";
import Description from "../../components/Result/Description";
import ImgResult from "../../components/Result/ImgResult";
import Shared from "../../components/Result/Shared";
import { QuestionsContext } from "../../contexts/Questions";
import Header from "../../components/Header";
import textsApp from "../../texts/texts.json";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  questions: {
    paddingLeft: 16,
    paddingRight: 16,
    color: "#646464",
    height: "160vh",
    maxHeight: "130%",
    margin: 0,
    position: "relative",
    overflow: "hidden",
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 24,
      paddingRight: 24,
      height: "100vh",
      maxHeight: "100%",
    },
  },
  gridContainer: {
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      maxWidth: 1280,
    },
  },
  gridDescription: {
    [theme.breakpoints.up("md")]: {
      marginBottom: 100,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridTitle: {
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
    },
  },
  gridDescriptionLg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  gridShared: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridHeader: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    bottom: 11,
    position: "fixed",
    zIndex: 1,
    boxSizing: "border-box",
    fontSize: "12px",
    width: "84%",

    "& strong:first-child": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
      bottom: 61,
      width: "70%",
      fontSize: "16px",
    },
  },
}));

function getHeaderByResult(result) {
  switch (result) {
    case textsApp.casual.id:
      return <HeaderResult img={textsApp.casual.imgHeader} />;
    case textsApp.classico.id:
      return <HeaderResult description={textsApp.classico.imgHeader} />;
    case textsApp.esporte.id:
      return <HeaderResult description={textsApp.esporte.imgHeader} />;
    case textsApp.fashion.id:
      return <HeaderResult description={textsApp.fashion.imgHeader} />;

    default:
      return <HeaderResult img={textsApp.basico.imgHeader} />;
  }
}

export default function Result() {
  const classes = useStyles();
  const theme = useTheme();

  const {
    getResult,
    cleanAllSession,
    isAnswerdAllQuestion,
    isEmail,
    getGenre,
  } = useContext(QuestionsContext);
  const history = useHistory();
  const result = getResult();
  const gotToStart = () => {
    cleanAllSession();
    history.push("/");
  };

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const getDescriptionByResult = (result) => {
    switch (result) {
      case textsApp.classico.id:
        return (
          <Description
            description={textsApp.classico.description}
            color={getColor()}
          />
        );
      case textsApp.esporte.id:
        return (
          <Description
            description={textsApp.esporte.description}
            color={getColor()}
          />
        );
      case textsApp.fashion.id:
        return (
          <Description
            description={textsApp.fashion.description}
            color={getColor()}
          />
        );

      default:
        return (
          <Description
            description={textsApp.basico.description}
            color={getColor()}
          />
        );
    }
  };
  function getStyleByResult(result) {
    switch (result) {
      case textsApp.casual.id:
        return <Info dados={textsApp.casual.style} color={getColor()} />;
      case textsApp.classico.id:
        return <Info dados={textsApp.classico.style} color={getColor()} />;
      case textsApp.esporte.id:
        return <Info dados={textsApp.esporte.style} color={getColor()} />;
      case textsApp.fashion.id:
        return <Info dados={textsApp.fashion.style} color={getColor()} />;
      default:
        return <Info dados={textsApp.basico.style} color={getColor()} />;
    }
  }

  const geTitleByResult = (result) => {
    switch (result) {
      case textsApp.casual.id:
        return <Title title={textsApp.casual.title} color={getColor()} />;
      case textsApp.classico.id:
        return <Title title={textsApp.classico.title} color={getColor()} />;
      case textsApp.esporte.id:
        return <Title title={textsApp.esporte.title} color={getColor()} />;
      case textsApp.fashion.id:
        return <Title title={textsApp.fashion.title} color={getColor()} />;

      default:
        return <Title title={textsApp.basico.title} color={getColor()} />;
    }
  };

  useEffect(() => {
    /*todas as questao foram respondidas? senao volte para tela inicial*/
    if (!isEmail()) {
      history.push("/");
    } else if (!isAnswerdAllQuestion()) {
      //nao respondeu todas as questoes?
      //onde parei ? volte para onde eu parei
      history.push("/perguntas");
    }
    // react-hooks/exhaustive-deps
  }, []);

  const getBackgroundColor = () => {
    switch (result) {
      case textsApp.casual.id:
        return textsApp.casual.backgroudColor;
      case textsApp.classico.id:
        return textsApp.classico.backgroudColor;
      case textsApp.esporte.id:
        return textsApp.esporte.backgroudColor;
      case textsApp.fashion.id:
        return textsApp.fashion.backgroudColor;
      default:
        return textsApp.basico.backgroudColor;
    }
  };
  const getColor = () => {
    switch (result) {
      case textsApp.casual.id:
        return textsApp.casual.color;
      case textsApp.classico.id:
        return textsApp.classico.color;
      case textsApp.esporte.id:
        return textsApp.esporte.color;
      case textsApp.fashion.id:
        return textsApp.fashion.color;
      default:
        return textsApp.basico.color;
    }
  };

  const getLogo = () => {
    switch (result) {
      case textsApp.casual.id:
        return textsApp.casual.imgHeader;
      case textsApp.classico.id:
        return textsApp.classico.imgHeader;
      case textsApp.esporte.id:
        return textsApp.esporte.imgHeader;
      case textsApp.fashion.id:
        return textsApp.fashion.imgHeader;
      default:
        return textsApp.basico.imgHeader;
    }
  };

  const getImgByResult = (result) => {
    const genre = getGenre();
    switch (result) {
      case textsApp.casual.id:
        return genre === 2 ? (
          <ImgResult img={textsApp.casual.img.man} />
        ) : (
          <ImgResult img={textsApp.casual.img.woman} />
        );
      case textsApp.classico.id:
        return genre === 2 ? (
          <ImgResult img={textsApp.classico.img.man} />
        ) : (
          <ImgResult img={textsApp.classico.img.woman} />
        );
      case textsApp.esporte.id:
        return genre === 2 ? (
          <ImgResult img={textsApp.esporte.img.man} />
        ) : (
          <ImgResult img={textsApp.esporte.img.woman} />
        );
      case textsApp.fashion.id:
        return genre === 2 ? (
          <ImgResult img={textsApp.fashion.img.man} />
        ) : (
          <ImgResult img={textsApp.fashion.img.woman} />
        );

      default:
        return genre === 2 ? (
          <ImgResult img={textsApp.basico.img.man} />
        ) : (
          <ImgResult img={textsApp.basico.img.woman} />
        );
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="start"
      className={classes.questions}
      style={{ backgroundColor: getBackgroundColor(), color: getColor() }}
    >
      <Container maxWidth="lg">
        <div className={classes.gridHeader}>
          <Header />
        </div>

        <Grid
          container
          direction="row"
          alignItems="flex-start"
          className={classes.gridContainer}
        >
          {!matches && getImgByResult(result)}

          <Grid item xs={12} sm={6} className={classes.gridTitle}>
            {geTitleByResult(result)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={4}
            className={classes.gridDescription}
          >
            {getDescriptionByResult(result, getColor())}
          </Grid>
          <Grid
            container
            item
            xs={10}
            md={12}
            className={classes.gridDescriptionLg}
          >
            <Grid item md={5} style={{ paddingRight: 20 }}>
              {getDescriptionByResult(result)}
            </Grid>
            <Grid item md={6} style={{ padding: "84px 0 0 40px" }}>
              <Shared />
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            direction="row"
            className={classes.gridStilo}
          >
            <Grid item md={3} xs={6}>
              <strong>Conheça outros estilos</strong>
              <br />
              {getStyleByResult(result)}
            </Grid>
            <Grid item xs={2} className={classes.gridShared}>
              <Shared />
            </Grid>
          </Grid>
          {matches && (
            <Grid item container xs={12} direction="row">
              {getImgByResult(result)}
            </Grid>
          )}
          <br />
          {matches && (
            <Grid item container xs={12} direction="row" justify="center">
              <img src={getLogo()} />
            </Grid>
          )}
          <br />
          {!matches && <img src={getLogo()} />}
        </Grid>
        <footer className={classes.footer}>
          <strong onClick={gotToStart}>refazer o teste</strong>
          <strong>ilustração by humaaans</strong>
        </footer>
      </Container>
    </Grid>
  );
}
