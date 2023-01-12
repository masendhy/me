import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        &copy; <small>Sendhy Boedhi Satriya </small>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
