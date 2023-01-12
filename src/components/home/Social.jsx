import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://medium.com/@masendhy"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/masendhy/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01badfc5da8ac5f754"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-upwork"></i>
      </a>
      <a
        href="https://github.com/masendhy"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
