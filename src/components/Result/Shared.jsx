import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import config from "../../config/config";
import { Share } from "react-facebook";

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
  },
}));

export default function Shared({ title }) {
  const classes = useStyles();

  const TwitterShared = {
    URL: config.URL_BTN_SHARED,
    content: "Clube da Preta",
    via: "ClubedaPreta",
  };
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: `${config.ID_FACEBOOK_APP}`,
      xfbml: true,
      autoLogAppEvents: true,
      version: "v7.0",
    });
  };

  const sharedTwitter = () => {
    let url = `https://twitter.com/intent/tweet?url${TwitterShared.URL}&text=${TwitterShared.content}&via=${TwitterShared.via}`;
    window.open(url, "TWITTER", "width=800,height=600");
    return false;
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.shared}
    >
      <p>COMPARTILHE SEU RESULTADO</p>
      <Grid item container justify="center" className={classes.imgShared}>
        <Share href={config.URL_BTN_SHARED}>
          {({ handleClick, loading }) => (
            <a
              className={classes.aLink}
              disable={loading}
              onClick={handleClick}
            >
              <Facebook />
            </a>
          )}
        </Share>

        <Link className={classes.aLink} onClick={sharedTwitter}>
          <Twitter />
        </Link>
      </Grid>
    </Grid>
  );
}
