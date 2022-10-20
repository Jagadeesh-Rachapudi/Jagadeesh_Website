import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
function HedderSocials() {
  return (
    <div className="hedder__socials">
      <a href="www.facebook.com" target="_blank">
        <BsFacebook />
      </a>
      <a href="www.instagram.com" target="_blank">
        <BsInstagram />
      </a>
      <a href="www.github.com" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HedderSocials;
