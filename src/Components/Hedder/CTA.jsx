/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function CTA() {
  return (
    <div className="cta">
      <a
        href="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Fcv.pdf?alt=media&token=44320022-4e67-43ce-b07b-a8bfddf72376"
        download
        className="btn"
        target="_blank"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
