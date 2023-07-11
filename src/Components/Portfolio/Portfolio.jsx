/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/proj1.jpg?alt=media&token=84d8bab8-bd43-4c55-850f-5808395b74a8",
    title: "Landing Page of Gauge website",
    github: "https://github.com/Jagadeesh-Rachapudi/Gauge",
    demo: "https://gauge-one.vercel.app/",
  },

  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/proj2.jpg?alt=media&token=c901827e-5125-40e7-82c4-0380d79396ed",
    title: "TO-DO App",
    github: "https://github.com/Jagadeesh-Rachapudi/To-Do",
    demo: "https://to-do-e1wc.vercel.app/",
  },

  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/proj%203.jpg?alt=media&token=1527f7ab-fe31-4b1c-bd98-8e7a23af67d8",
    title: "Tesla Landing Page",
    github: "https://github.com/Jagadeesh-Rachapudi/Tesla-Lanading-Page",
    demo: "https://tesla-lanading-page.vercel.app/",
  },

  {
    id: 4,
    image:
      "https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/proj%204.jpg?alt=media&token=81ac604f-a268-480e-8992-79d986c08cdf",
    title: "CartMax a ecommerce website",
    github: "https://github.com/Jagadeesh-Rachapudi/CartMaxTS",
    demo: "https://cart-max-ts-9cyg.vercel.app/",
  },

  {
    id: 5,
    image:
      "https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/proj5.jpg?alt=media&token=fdb023a7-75c6-4b28-ad7b-f0034f868f92",
    title: "My own Portfolio website",
    github: "https://github.com/Jagadeesh-Rachapudi/Jagadeesh_Website",
    demo: "https://jagadeesh-portfolio.vercel.app/",
  },

  {
    id: 6,
    image:
      "https://firebasestorage.googleapis.com/v0/b/peronal-stuff-61ac6.appspot.com/o/proj6.jpg?alt=media&token=0942eea4-5b15-4661-9697-ee09889786b1",
    title: "A portfolio website from a figma desin ",
    github: "https://github.com/Jagadeesh-Rachapudi/portfolio",
    demo: "https://portfolio-znit.vercel.app/",
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
              <h3> {title} </h3>
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
