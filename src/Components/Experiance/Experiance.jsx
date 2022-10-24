import React from "react";
import "./Experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experiance() {
  return (
    <section id="experiance">
      <h5>The Skills That I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Forntend Devlopement</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>NextJs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Backend Devlopement</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experianced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;
