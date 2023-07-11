/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function CTA() {
  return (
    <div className="cta">
      <a
        href="https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/FrontEnd_Resume%20Original.pdf.pdf?alt=media&token=64530bf2-e6fc-4cc5-98cd-1fab38b3b695"
        download
        className="btn"
        target="_blank"
      >
        View Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
