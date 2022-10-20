import React from "react";
import CV from "../../Asserts/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href="../../Asserts/cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
