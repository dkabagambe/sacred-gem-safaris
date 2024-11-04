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
      setIsMobile(window.innerWidth <= 778);
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
          <h2>EXPERIENCE EAST AFRICA WITH US</h2>
          <p className="hero-paragraph">
            At first, the workers didn't think it was Photo Grid important, but
            after it happened 20 times, they started to think Oscar knew.
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
        <div class="image-wrapper">
          <div class="top-image-container">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRMs0qNes6C74sfHBYyFLFYEH2AOD2QGRbRZuucCoaRWna3GQ5v"
              alt="Cultural Experience"
              class="experience-image top-image"
            />
          </div>

          <div class="bottom-image-container">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhEDua11dPbstMDSREJOqGHmULq2Jrr36K6MX0-1vejpYFFXtK"
              alt="Night Sky"
              class="experience-image bottom-image"
            />
          </div>
        </div>

        <div className="text-content">
          <h5>#WEAREUNTAMEDEXPERIENCES</h5>
          <h3>Redefining East African Tourism</h3>

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
        <h3>Discover East Africa</h3>
        <p>
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. I think it's good for a person to spend time
          alone. It gives them an opportunity to discover.
          <br />
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. <br />I think it's good for a person to spend
          time alone. It gives them an opportunity to discover.
          <br />I think it's good for a person to spend time alone. It gives
          them an opportunity to discover. I think it's good for a person to
          spend time alone. It gives them an opportunity to discover.
        </p>
        <div className="map-container">
          <img src={map} alt="Map of East Africa" />
          <h2>
            4 <span>countries</span>
          </h2>
        </div>
      </section>

      <SafariSection />
      <ExperienceSection />
      <WildlifeSection />
    </>
  );
};

export default Home;
