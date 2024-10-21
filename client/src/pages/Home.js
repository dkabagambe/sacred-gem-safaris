import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import video from "../assets/img/4133023-hd_1280_720_30fps.mp4";
import map from "../assets/img/RME EA 3_033809.png";
import WildlifeSection from "./WildlifeSection";
import ExperienceSection from "./ExperienceSection";
import SafariSection from "./SafariSection";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h4 className="hero-subheading">EXPERIENCE THE</h4>
          <h1 className="hero-heading">UNTAMED MOMENT</h1>
          <hr className="hero-line" />
          <p className="hero-paragraph">
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time. I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. I think it's good for a person to
            spend time.
          </p>
        </div>
        <div className="media-container">
          {!isMobile ? (
            <video className="hero-video" src={video} autoPlay muted loop />
          ) : (
            <img
              className="hero-image"
              src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Untamed Moment"
            />
          )}
        </div>
      </section>

      {/* New section with additional content */}
      <section className="new-content">
        <div className="image-wrapper">
          <div className="top-image-container">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMs0qNes6C74sfHBYyFLFYEH2AOD2QGRbRZuucCoaRWna3GQ5v"
              alt="Cultural Experience"
              className="experience-image top-image"
            />
          </div>

          <div className="bottom-image-container">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhEDua11dPbstMDSREJOqGHmULq2Jrr36K6MX0-1vejpYFFXtK"
              alt="Night Sky"
              className="experience-image bottom-image"
            />
          </div>
        </div>

        <div className="text-content">
          <h2>#WEAREUNTAMEDEXPERIENCES</h2>
          <h3>Redefining </h3>
          <h3>East African</h3>
          <h3>Tourism</h3>

          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time alone. It gives them an opportunity to discover.
          </p>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time alone. It gives them an opportunity to discover.
          </p>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time alone. It gives them an opportunity to discover.
          </p>
        </div>
      </section>

      <section className="iconic-destination">
        <h5>our iconic destinations</h5>
        <h2>Discover </h2>
        <h2>East Africa</h2>
        <p>
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. I think it's good for a person to spend time
          alone. It gives them an opportunity to discover. I think it's good for
          a person to spend time alone. It gives them an opportunity to
          discover. I think it's good for a person to spend time alone. It gives
          them an opportunity to discover. I think it's good for a person to
          spend time alone. It gives them an opportunity to discover. I think
          it's good for a person to spend time alone. It gives them an
          opportunity to discover.
        </p>
        <div className="map-container">
          <img src={map} alt="Map of East Africa" />
        </div>
      </section>
      <SafariSection />
      <ExperienceSection />
      <WildlifeSection />
    </>
  );
};

export default Home;
