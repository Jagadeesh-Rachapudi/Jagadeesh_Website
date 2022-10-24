/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2FP1.jpg?alt=media&token=1731f131-5ac0-4145-8ad0-c0c9060100e3",
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/19660926-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },

  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2FP2.jpg?alt=media&token=be85cbba-4352-4ee9-be9a-960c745f3053",
    title: "Orion UI kit for Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/19551559-Orion-UI-kit-for-Figma",
  },

  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2FP3.jpg?alt=media&token=e05b102e-a2d5-403f-b0dd-1c84809fdcbd",
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/19314442-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },

  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2FP4.jpg?alt=media&token=4ff9bf37-3403-4dda-aefe-4c27e3d941b8",
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/19301108-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2FP5.jpg?alt=media&token=c7b92915-a5a2-424c-ab47-e0c4374fc6dc",
    title: "Orion UI kit - Charts templates & infographics in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/19103850-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },

  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Jagaddesh%20Portfolio%2FP6.jpg?alt=media&token=ad3cb15c-19eb-4d12-86d3-2c53bd149f15",
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/18672453-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} />
              </div>
              <h3>This is portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  GitHub
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
