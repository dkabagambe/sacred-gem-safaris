import React from "react";
import Slider from "react-slick";
import "../styles/SafariSection.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SafariSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    centerMode: true,
    centerPadding: "5%",
    nextArrow: <div />, // Hide default arrows
    prevArrow: <div />,
  };

  let sliderRef;
  return (
    <div className="safari-sections">
      <div className="safari-section">
        <Slider
          {...settings}
          ref={(slider) => (sliderRef = slider)}
          className="image-slider"
        >
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
        {/* Custom Navigation Buttons */}
        <div className="slider-navigation">
          <button className="nav-button" onClick={() => sliderRef.slickPrev()}>
            <IoIosArrowBack />
            {/* Left Arrow Icon */}
          </button>
          <button className="nav-button" onClick={() => sliderRef.slickNext()}>
            <IoIosArrowForward /> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>

      {/* Safari Section */}
      <div className="section-safari">
        <div className="section-content">
          <h5>JOURNEY WITH US</h5>
          <h3>Our perfected safaris</h3>
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
          <h3>Our exclusive offers</h3>
          <p>
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
        <div className="section-content2">
          <div className="section-content">
            <img
              src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvcmlsbGF8ZW58MHx8MHx8fDA%3D"
              alt="Gorilla Trekking"
              className="gorilla-image"
            />
            <h3>Gorilla trekking on us</h3>

            <p>
              I think it's good for a person to spend time alone. It gives them
              an opportunity to discover. <br />I think it's good for a person
              to spend time alone. It gives them an opportunity to discover.
              <br />I think it's good for a person to spend time alone. It gives
              them an opportunity to discover. <br /> I think it's good for a
              person to spend time alone. It gives them an opportunity to
              discover.
            </p>
            <button className="view-button">VIEW OFFER</button>
          </div>
          <div className="section-content">
            <img
              src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvcmlsbGF8ZW58MHx8MHx8fDA%3D"
              alt="Gorilla Trekking"
              className="gorilla-image"
            />
            <h3>Gorilla trekking on us</h3>

            <p>
              I think it's good for a person to spend time alone. It gives them
              an opportunity to discover. <br />I think it's good for a person
              to spend time alone. It gives them an opportunity to discover.
              <br />I think it's good for a person to spend time alone. It gives
              them an opportunity to discover. <br /> I think it's good for a
              person to spend time alone. It gives them an opportunity to
              discover.
            </p>
            <button className="view-button">VIEW OFFER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariSection;
