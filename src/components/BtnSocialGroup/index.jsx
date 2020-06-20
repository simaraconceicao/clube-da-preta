import React, { Fragment } from "react";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";

export default function BtnSocialGroup() {
  return (
    <Fragment>
      <a
        href="https://www.facebook.com/clubedapreta/"
        target="_blank"
        alt="Facebook Club da Preta"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        href="https://www.instagram.com/clubedapreta/"
        target="_blank"
        alt="Instagram Club da Preta"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
    </Fragment>
  );
}
