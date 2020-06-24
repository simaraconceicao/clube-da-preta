import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import { QuestionsContext } from "../../contexts/Questions";
import config from "../../config/config";

const useStyles = makeStyles(() => ({
  shared: {
    color: "#646464",
    fontSize: 12,
    borderRadius: "50%",
    width: 160,
    height: 160,
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 26,
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
    let url = `https://twitter.com/intent/tweet?url${
      config.URL_BTN_SHARED
    }&text=${description}&via=${"clubdapreta"}`;
    window.open(url, "TWITTER", "width=600,height=400");
    return false;
  };

  const sharedFacebook = () => {
    var dt = Math.random(1, 100);
    let url = `https://www.facebook.com/sharer/sharer.php?u=${
      config.URL_BTN_SHARED
    }/resultado?url=${dt}&${encodeURIComponent(uri)}`;

    console.log(url);
    window.open(
      url,
      "Facebook - Club da Preta",
      "width=600,height=400,scrollbars=no"
    );

    return false;
  };

  useEffect(() => {
    setUri(getUriToShared());
    // react-hooks/exhaustive-deps
  }, [stilo]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.shared}
    >
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
