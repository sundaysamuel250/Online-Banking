import React from "react";
import HomeImage from "../image/phone1.png";

const Home = () => {
  return (
    <section className="home-parent-components">
      <div className="home-child-components">
        <div className="home-content">
        <h1>Brass internet Banking</h1>
        <br></br>
        <p>
          We are a software development company that a client reached out to to
          help build a single page bank web application that provides some basic
          features for their customers.
        </p>
        </div>
        <div className="mobile-img">
          <img src={HomeImage} alt="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
