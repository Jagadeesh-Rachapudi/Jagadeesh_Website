import React from "react";
import CTA from "./CTA";
import "./Hedder.css";
import HedderSocials from "./HedderSocials";
function Hedder() {
  return (
    <header>
      <div className="container hedder__container">
        <h5>Hello I'm</h5>
        <h1>Jagadeesh</h1>
        <h5 className="text-light">Frontend Devolper</h5>
        <CTA />
        <HedderSocials />
        <div className="me">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Fme.png?alt=media&token=1b24dd7a-ec8c-43a0-ad8b-208f1be90e71"
            alt="me"
          />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Hedder;
