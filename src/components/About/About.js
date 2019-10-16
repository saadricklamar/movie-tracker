import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <a href="https://github.com/B-Coyle" target="_blank">
        <img src={require("../../images/BCoyle.png")} />
      </a>
      <a href="https://github.com/saadricklamar" target="_blank">
        <img src={require("../../images/sb.png")} />
      </a>
      <article>
        <p className="about">
          {" "}
          We're Bridgett Coyle and Saad Baradan, two stars at the Turing School
          of Software & Design. Thank you for checking out our project.
          Movie-Tracker was our first project built using React, Redux, and
          Router. We utilized the{" "}
          <a
            className="movie-db"
            href="https://www.themoviedb.org/?language=en-US"
            target="_blank"
          >
            MovieDB API
          </a>{" "}
          for our fetches. Clicking either of our images will take you to our
          GitHub profiles. We hope you enjoy your stay and forgive us for any
          short comings.
        </p>
      </article>
      <Link className="return-home" to="/MovieContainer">
        Return Home
      </Link>
    </div>
  );
};

export default About;
