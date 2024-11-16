import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "../styles/SafariSection.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionSlider from "./Swipersafari";

const SafariSection = () => {
  const sliderRef = useRef(null); // Use useRef for the slider reference

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    nextArrow: <div />,
    prevArrow: <div />,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Ensure slider starts from the first slide on load
    }
  }, []);

  return (
    <div className="safari-sections">
      <div className="safari-section">
        <Slider {...settings} ref={sliderRef} className="image-slider">
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
          <button
            className="nav-button"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack /> {/* Left Arrow Icon */}
          </button>
          <button
            className="nav-button"
            onClick={() => sliderRef.current.slickNext()}
          >
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
        </div>
        <SectionSlider />
      </div>
    </div>
  );
};

export default SafariSection;
