/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2Fme-about.jpg?alt=media&token=3839010f-900f-4f52-9096-ae44a3970160"
              alt="Abouut Image"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small>3+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut iste
            at, magnam cupiditate vero aliquam, sunt modi atque quibusdam et hic
            deleniti ratione autem sit aspernatur perferendis, cumque nisi
            sapiente.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
