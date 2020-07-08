/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import { QuestionsContext } from "../../contexts/Questions";
import config from "../../config/config";
import Helmet from "react-helmet";

const useStyles = makeStyles(() => ({
  shared: {
    color: "#646464",
    fontSize: 12,
    borderRadius: "50%",
    width: 160,
    height: 160,
    backgroundColor: "#fff",
    padding: 26,
    textAlign: "center",
    display: "inline-flex",
  },

  aLink: {
    cursor: "pointer",
    color: "#646464",
  },
}));

export default function Shared({ stilo, description, title }) {
  const classes = useStyles();
  const [uri, setUri] = useState("");
  const { getUriToShared } = useContext(QuestionsContext);

  window.fbAsyncInit = function () {
    window.FB.init({
      appId: `${config.ID_FACEBOOK_APP}`,
      xfbml: true,
      autoLogAppEvents: true,
      version: "v7.0",
    });
  };

  const sharedTwitter = () => {
    let url = `http://twitter.com/share?url=${config.URL_BTN_SHARED}`;
    window.open(url, "TWITTER", "width=600,height=400");
    return false;
  };

  const sharedFacebook = () => {
    let url = `https://www.facebook.com/sharer/sharer.php?u=${
      config.URL_BTN_SHARED
    }/${encodeURIComponent(uri)}`;

    window.open(
      url,
      "Facebook - Club da Preta",
      "width=600,height=400,scrollbars=no"
    );

    return false;
  };

  useEffect(() => {
    // react-hooks/exhaustive-deps
    setUri(getUriToShared());
  }, [stilo]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.shared}
    >
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* OpenGraph tags */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content={"website"} />
        {/* Twitter Card tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <p>COMPARTILHE SEU RESULTADO</p>
      <Grid item container justify="center" className={classes.imgShared}>
        <Link className={classes.aLink} onClick={sharedFacebook}>
          <Facebook />
        </Link>
        <Link className={classes.aLink} onClick={sharedTwitter}>
          <Twitter />
        </Link>
      </Grid>
    </Grid>
  );
}
