import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-brain about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>
      <div className="about__box">
        <i class="bx bxs-group about__icon"></i>
        <h3 className="about__title">Clients</h3>
        <span className="about__subtitle">100+ Worldwide</span>
      </div>
      <div className="about__box">
        <i class="bx bx-star about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">48+ Completed</span>
      </div>
    </div>
  );
};

export default Info;
