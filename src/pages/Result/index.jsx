/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
import { useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import config from "../../config/config";

const useStyles = makeStyles((theme) => ({
  questions: {
    margin: 0,
    position: "relative",
    fontSize: 16,
  },
  gridContainer: {
    position: "relative",
    zIndex: 1,
  },
  gridDescription: {},
  gridTitle: {},
  gridDescriptionLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: 460,
    },
  },
  gridShared: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridHeader: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  footer: {
    zIndex: 1,
    fontSize: "12px",
    paddingTop: 16,
    paddingBottom: 16,

    "& strong:first-child": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
      marginTop: 85,
    },
  },
  sharedLg: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      height: "100%",
      display: "-webkit-flex",
      "-webkit-align-items": "center",
    },
  },
}));

export default function Result() {
  const classes = useStyles();
  const theme = useTheme();
  const [result, setResult] = useState(0);
  const [imgShared, setImgShared] = useState(
    `/${config.URL_BTN_SHARED}/logo.svg`
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [facebookID, setFacebookID] = useState(config.ID_FACEBOOK_APP);
  const [type, setType] = useState("article");
  const [urlShared, setUrlShared] = useState();
  const [stilo, setStilo] = useState(0);

  const queryString = new URLSearchParams(useLocation().search);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    getResult,
    cleanAllSession,
    isAnswerdAllQuestion,
    isEmail,
    getGenre,
    addColor,
  } = useContext(QuestionsContext);
  const history = useHistory();
  const gotToStart = () => {
    cleanAllSession();
    history.push("/");
  };

  const getDescriptionResult = (result) => {
    switch (result) {
      case textsApp.casual.id:
        setDescription(textsApp.casual.description);
        break;
      case textsApp.classico.id:
        setDescription(textsApp.classico.description);
        break;
      case textsApp.esporte.id:
        setDescription(textsApp.esporte.description);
        break;
      case textsApp.fashion.id:
        setDescription(textsApp.fashion.description);
        break;

      default:
        setDescription(textsApp.basico.description);
        break;
    }
  };

  const getDescriptionByResult = (result) => {
    switch (result) {
      case textsApp.casual.id:
        return (
          <Description
            description={textsApp.casual.description}
            color={getColor()}
          />
        );
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

  const getTitleResult = (result) => {
    switch (result) {
      case textsApp.casual.id:
        setTitle(textsApp.casual.title);
        break;
      case textsApp.classico.id:
        setTitle(textsApp.classico.title);
        break;
      case textsApp.esporte.id:
        setTitle(textsApp.esporte.title);
        break;
      case textsApp.fashion.id:
        setTitle(textsApp.fashion.title);
        break;
      default:
        setTitle(textsApp.basico.title);
        break;
    }
  };

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
    let resultado = queryString.get("resultado");
    let finish = queryString.get("finish");
    let nowQuestion = queryString.get("nowQuestion");
    //const answerds = queryString.get("answerds");
    let genre = queryString.get("genre");
    let email = queryString.get("email");
    let stilo = queryString.get("stilo");
    let uri = `stilo=${stilo}g${genre}`;
    if (resultado === "ok") {
      sessionStorage.setItem("finish", finish);
      sessionStorage.setItem("nowQuestion", nowQuestion);
      sessionStorage.setItem("genre", genre);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("stilo", stilo);
      setResult(parseInt(stilo));
      setStilo(parseInt(stilo));
    } else {
      setResult(getResult());
      finish = sessionStorage.getItem("finish", finish);
      nowQuestion = sessionStorage.getItem("nowQuestion", nowQuestion);
      genre = sessionStorage.getItem("genre", genre);
      email = sessionStorage.getItem("email", email);
      stilo = getResult();
      uri = `stilo=${stilo}g${genre}`;
      sessionStorage.setItem("stilo", stilo);
      setStilo(stilo);
    }
    addColor(getColor());
    getDescriptionResult(stilo);
    getImgResult(stilo);
    getTitleResult(stilo);

    if (!isEmail()) {
      history.push("/");
    } else if (!isAnswerdAllQuestion()) {
      history.push("/perguntas");
    }

    setUrlShared(
      `https://www.facebook.com/sharer/sharer.php?u=${config.URL_BTN_SHARED}?${uri}`
    );
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

  const getImgResult = (result) => {
    const genre = getGenre();
    switch (result) {
      case textsApp.casual.id:
        setImgShared(textsApp.casual.img.woman);
        if (genre === 2) {
          setImgShared(textsApp.casual.img.man);
        }

        break;
      case textsApp.classico.id:
        setImgShared(textsApp.classico.img.woman);
        if (genre === 2) {
          setImgShared(textsApp.classico.img.man);
        }
        break;
      case textsApp.esporte.id:
        setImgShared(textsApp.esporte.img.woman);
        if (genre === 2) {
          setImgShared(textsApp.esporte.img.man);
        }
        break;
      case textsApp.fashion.id:
        setImgShared(textsApp.fashion.img.woman);
        if (genre === 2) {
          setImgShared(textsApp.fashion.img.man);
        }
        break;

      default:
        setImgShared(textsApp.basico.img.woman);
        if (genre === 2) {
          setImgShared(textsApp.basico.img.man);
        }
        break;
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
    <Fragment>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* OpenGraph tags */}
        <meta name="og:url" content={urlShared} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={imgShared} />
        <meta name="og:type" content={type} />
        <meta name="fb:app_id" content={facebookID} />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgShared} />
        <meta name="twitter:card" content="summary" />
        <style>{`body { background-color: ${getBackgroundColor()} }`}</style>
      </Helmet>

      <Grid
        container
        direction="column"
        alignItems="start"
        className={classes.questions}
        style={{ backgroundColor: getBackgroundColor(), color: getColor() }}
      >
        <Grid item className={classes.gridHeader}>
          <Header />
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="flex-start"
          className={classes.gridContainer}
        >
          <Grid container>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.gridDescription}
            >
              <Grid item xs={12} sm={12}>
                <Grid item xs={12} sm={12} className={classes.gridTitle}>
                  {geTitleByResult(result)}
                </Grid>
                {getDescriptionByResult(result, getColor())}
              </Grid>
            </Grid>
            <Grid
              container
              item
              sm={6}
              md={8}
              lg={8}
              className={classes.gridDescriptionLg}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignContent="center"
                item
                md={4}
                xs={6}
                sm={12}
                lg={4}
                className={classes.sharedLg}
              >
                <Shared stilo={stilo} description={description} />
              </Grid>
              <Grid
                item
                md={8}
                xs={12}
                sm={6}
                lg={7}
                style={{ textAlign: "center" }}
                className={classes.gridImglg}
              >
                {!matches && getImgByResult(result)}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            direction="row"
            className={classes.gridStilo}
          >
            <strong>Conheça outros estilos</strong>
            <Grid container>
              <Grid item xs={6} sm={6}>
                {getStyleByResult(result)}
              </Grid>
              <Grid item xs={6} sm={6} container className={classes.gridShared}>
                <Shared stilo={stilo} description={description} />
              </Grid>
            </Grid>
          </Grid>
          {matches && (
            <Grid
              item
              container
              xs={12}
              direction="column"
              justify="center"
              alignContent="center"
            >
              {getImgByResult(result)}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-between"
        className={classes.footer}
        style={{ color: getColor() }}
      >
        <strong onClick={gotToStart}>refazer o teste</strong>
        <strong>ilustração by humaaans</strong>
      </Grid>
    </Fragment>
  );
}
