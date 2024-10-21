import React from "react";
import Slider from "react-slick";
import "../styles/SafariSection.css";

const SafariSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides fully on desktop
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between transitions
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 1 slide on smaller screens
        },
      },
    ],
    centerMode: true, // Center the active slide
    centerPadding: "7%", // Adds padding to left and right, showing part of the next slide
  };

  return (
    <div className="safari-sections">
      <div className="safari-section">
        {/* Image Slider Section */}

        <Slider {...settings} className="image-slider">
          <div className="slider-image kenya">
            <h3 className="slider-caption">KENYA</h3>
          </div>
          <div className="slider-image uganda">
            <h3 className="slider-caption">UGANDA</h3>
          </div>
          <div className="slider-image tanzania">
            <h3 className="slider-caption">TANZANIA</h3>
          </div>
          <div className="slider-image rwanda">
            <h3 className="slider-caption">RWANDA</h3>
          </div>
        </Slider>
      </div>
      {/* Safari Section */}
      <div className="section-safari">
        <div className="section-content">
          <h5>JOURNEY WITH US</h5>
          <h2>Our perfected safaris</h2>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
          </p>

          <button className="view-button">VIEW ALL SAFARIS</button>
        </div>

        {/* Exclusive Offers Section */}
        <div className="section-content">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZiaQM5Dw6pVSSZvLJLCHs1Ht3AMRHLUJurMqGMmTj9oKPE_q-"
            alt="Exclusive Offer"
            className="exclusive-image"
          />
          <h2>Our exclusive offers</h2>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover.
            <br /> Take advantage of our limited-time offers and embark on the
            adventure of a lifetime.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
          </p>

          <button className="view-button">VIEW ALL SAFARIS</button>
        </div>

        {/* Gorilla Trekking Section */}
        <div className="section-content">
          <img
            src="https://images.pexels.com/photos/1238272/pexels-photo-1238272.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Gorilla Trekking"
            className="gorilla-image"
          />
          <h2>Gorilla trekking on us</h2>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover.
            <br /> Take advantage of our limited-time offers and embark on the
            adventure of a lifetime.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br />
            Each safari allows you the chance to explore the wild and connect
            with nature.
          </p>
          <button className="view-button">VIEW OFFER</button>
        </div>
      </div>
    </div>
  );
};

export default SafariSection;
