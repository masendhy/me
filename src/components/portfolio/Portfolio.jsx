import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/skill.png";
import IMG2 from "../../assets/tableu.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "skill",
    github: "https://github.com/masendhy",
    demo: "https://masendhy.gitbook.io/flutter-learning-path/",
  },
  {
    id: 2,
    image: IMG2,
    title: "tableu",
    github: "https://github.com/masendhy",
    demo: "https://masendhy.gitbook.io/flutter-learning-path/",
  },
  {
    id: 3,
    image: IMG1,
    title: "exel",
    github: "https://github.com/masendhy",
    demo: "https://masendhy.gitbook.io/flutter-learning-path/",
  },
  {
    id: 4,
    image: IMG2,
    title: "python",
    github: "https://github.com/masendhy",
    demo: "https://masendhy.gitbook.io/flutter-learning-path/",
  },
  {
    id: 5,
    image: IMG1,
    title: "english",
    github: "https://github.com/masendhy",
    demo: "https://masendhy.gitbook.io/flutter-learning-path/",
  },
  {
    id: 5,
    image: IMG2,
    title: "power bi",
    github: "https://github.com/masendhy",
    demo: "https://masendhy.gitbook.io/flutter-learning-path/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portofolio">
        <h2>Portfolio</h2>
        <span>My Recent Work</span>
      </div>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn "
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
