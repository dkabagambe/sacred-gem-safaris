import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import video from "../assets/img/4133023-hd_1280_720_30fps.mp4";
import map from "../assets/img/RME EA 3_033809.png";

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
              src="https://images.pexels.com/photos/5416742/pexels-photo-5416742.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Untamed Moment"
            />
          )}
        </div>
      </section>

      {/* New section with additional content */}
      <section className="new-content">
        <div className="image-grid">
          <img
            src="https://images.pexels.com/photos/5416742/pexels-photo-5416742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Cultural Experience"
            className="experience-image"
          />
          <img
            src="https://images.pexels.com/photos/5416742/pexels-photo-5416742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Night Sky"
            className="experience-image"
          />
        </div>
        <div className="text-content">
          <h3>Redefining East African Tourism</h3>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time alone. It gives them an opportunity to discover.
          </p>
        </div>
      </section>

      <section className="iconic-destination">
        <h2>Discover East Africa</h2>
        <p>
          Explore the unique wildlife and landscapes of East Africa, spanning
          Uganda, Rwanda, Kenya, and Tanzania.
        </p>
        <div className="map-container">
          <img src={map} alt="Map of East Africa" />
        </div>
      </section>
    </>
  );
};

export default Home;
