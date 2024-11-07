import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/ExperienceSection.css";

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "CANOEING",
      description: "Tranquility",
    },
    {
      src: "https://images.pexels.com/photos/5745291/pexels-photo-5745291.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "WILDLIFE",
      description: "Majesty",
    },
    {
      src: "https://images.pexels.com/photos/1681179/pexels-photo-1681179.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "BIRDING",
      description: "Diversity",
    },
    {
      src: "https://images.pexels.com/photos/29146714/pexels-photo-29146714/free-photo-of-majestic-giraffe-in-kenyan-savannah.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "Culture",
      description: "Adventure",
    },
    {
      src: "https://images.pexels.com/photos/6318160/pexels-photo-6318160.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "SAFARI",
      description: "Expedition",
    },
    {
      src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "sight seeing",
      description: "Summit",
    },
    {
      src: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "recreation",
      description: "Serenity",
    },
    {
      src: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600",
      label: "CITY TOURS",
      description: "Culture",
    },
  ];

  const visibleImages = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const displayedImages = images
    .slice(activeIndex, activeIndex + visibleImages)
    .concat(
      images.slice(0, Math.max(0, activeIndex + visibleImages - images.length))
    );

  return (
    <>
      <div className="experience-section">
        {/* Top section with image and title */}
        <div className="experience-banner">
          <img
            src="https://images.pexels.com/photos/29117959/pexels-photo-29117959/free-photo-of-scenic-tropical-beach-surrounded-by-lush-foliage.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Scenic East Africa"
            className="banner-image"
          />
          <div className="banner-text">
            <h3>Be Inspired</h3>
            <Link to="/gallery" className="gallery-link">
              plan your journey
            </Link>
            <div className="divider-container">
              <span className="diamond"></span>
              <hr className="divider" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="experience-content ">
          <h5>Experience east africa</h5>
          <h3>Experience raw, untamed nature</h3>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time alone. It gives them an opportunity to discover.
            <br />
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. I think it's good for a person to spend
            time alone. It gives them an opportunity to discover.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
          </p>
          <Link to="/all-experiences" className="view-experiences-link">
            View all experiences
          </Link>
        </div>

        {/* Birding section */}
        <div className="birding-section">
          <div className="birding-scroll">
            {displayedImages.map((image, index) => {
              const globalIndex = (activeIndex + index) % images.length;
              return (
                <div
                  key={globalIndex}
                  className={`birding-card ${
                    globalIndex === activeIndex ? "active" : ""
                  }`}
                >
                  <div className="card-overlay">
                    <div className="label">{image.label}</div>
                    <img
                      src={image.src}
                      alt={image.label}
                      className="birding-image"
                    />
                  </div>
                  {globalIndex === activeIndex && (
                    <p className="birding-description">{image.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Why travel with us section */}
      </div>
      <div className="why-travel-section ">
        <h5>why sacred gem safaris</h5>
        <h3>Why travel With Us?</h3>

        <p>
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. I think it's good for a person to spend time
          alone. It gives them an opportunity to discover.
          <br />
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. I think it's good for a person to spend time
          alone. It gives them an opportunity to discover.
          <br />I think it's good for a person to spend time alone. It gives
          them an opportunity to discover. I think it's good for a person to
          spend time alone. It gives them an opportunity to discover.
        </p>
      </div>
    </>
  );
};

export default ExperienceSection;
