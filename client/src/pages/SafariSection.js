import React from "react";
import Slider from "react-slick";
import "../styles/SafariSection.css";

const SafariSection = () => {
  const settings = {
    // dots: true,
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
    centerPadding: "4%", // Adds padding to left and right, showing part of the next slide
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
          <h3>Our </h3>
          <h3> perfected</h3>
          <h3>safaris</h3>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br /> I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
            <br />
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br />I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br /> I think it's good for a
            person to spend time alone. It gives them an opportunity to
            discover.
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
          <h3>Our exclusive </h3>
          <h3>offers</h3>
          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br /> I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
            <br />
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br />I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br /> I think it's good for a
            person to spend time alone. It gives them an opportunity to
            discover.
          </p>
        </div>

        {/* Gorilla Trekking Section */}
        <div className="section-content">
          <img
            src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvcmlsbGF8ZW58MHx8MHx8fDA%3D"
            alt="Gorilla Trekking"
            className="gorilla-image"
          />
          <h3>Gorilla </h3>
          <h3>trekking on us</h3>

          <p>
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br /> I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
            <br />
            I think it's good for a person to spend time alone. It gives them an
            opportunity to discover. <br />I think it's good for a person to
            spend time alone. It gives them an opportunity to discover.
            <br />I think it's good for a person to spend time alone. It gives
            them an opportunity to discover. <br /> I think it's good for a
            person to spend time alone. It gives them an opportunity to
            discover.
          </p>
          <button className="view-button">VIEW OFFER</button>
          {/* <button style={{ color: "#0e0e0e" }} className="view-button">
            VIEW ALL SAFARIS
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SafariSection;
