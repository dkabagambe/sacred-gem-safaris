import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/WildlifeSection.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const WildlifeSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Wildlife",
      image:
        "https://media.istockphoto.com/id/533297303/photo/lion-mother-with-cub.webp?a=1&b=1&s=612x612&w=0&k=20&c=3omtgRGxs8kPAft65NUWKu-RQjK8kT1_3R9pwOLPB_U=", // Lion image URL
      content:
        "I think it's good for a person to spend time alone. It gives them an opportunity to discover unmatched biodiversity.",
    },
    {
      title: "Unrivaled Style",
      image:
        "https://images.unsplash.com/photo-1667924672592-57ac3901c0da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZGluZyUyMGluJTIwVWdhbmRhfGVufDB8fDB8fHww", // Style image URL
      content:
        "I think it's good for a person to spend time alone. This allows for personal discovery.",
    },
    {
      title: "Professionalism",
      image:
        "https://images.pexels.com/photos/29015790/pexels-photo-29015790/free-photo-of-toad-in-natural-habitat-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600", // Professionalism image URL
      content:
        "Professionalism is key to creating an unforgettable experience.",
    },
    {
      title: "Impact",
      image:
        "https://images.pexels.com/photos/28100862/pexels-photo-28100862/free-photo-of-boy-in-t-shirt-carrying-bag-on-dirt-road-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600", // Impact image URL
      content: "Our impact on the environment and community is paramount.",
    },
    {
      title: "Culture",
      image:
        "https://images.pexels.com/photos/19982407/pexels-photo-19982407/free-photo-of-tribal-huts-in-village.jpeg?auto=compress&cs=tinysrgb&w=600", // Culture image URL
      content:
        "Understanding and respecting local culture enriches our experience.",
    },
  ];

  return (
    <div className="wildlife-section">
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <span className="accordion-arrow">
                {activeAccordion === index ? (
                  <IoIosArrowUp className="open" />
                ) : (
                  <IoIosArrowDown className="closed" />
                )}
              </span>
            </div>
            {activeAccordion === index && (
              <div className="accordion-content">
                <img
                  src={item.image}
                  alt={item.title}
                  className="accordion-image"
                />
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <h5>travel with a purpose</h5>
      <h2 className="impact-title">Our impact</h2>
      <p className="impact-description">
        I think it's good for a person to spend time alone. It gives them an
        opportunity to discover. <br /> I think it's good for a person to spend
        time alone. It gives them an opportunity to discover.
        <br />
        I think it's good for a person to spend time alone. It gives them an
        opportunity to discover. <br />I think it's good for a person to spend
        time alone. It gives them an opportunity to discover.
        <br />I think it's good for a person to spend time alone. It gives them
        an opportunity to discover. <br /> I think it's good for a person to
        spend time alone. It gives them an opportunity to discover.
      </p>
      <Link to="/impact" className="read-more">
        READ ABOUT OUR IMPACT
      </Link>

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
      <div className="who-we-are">
        <h2 className="about-title">Who we are</h2>
        <p className="about-description">
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. <br /> I think it's good for a person to
          spend time alone. It gives them an opportunity to discover.
          <br />
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover. <br />I think it's good for a person to spend
          time alone. It gives them an opportunity to discover.
          <br />I think it's good for a person to spend time alone. It gives
          them an opportunity to discover. <br /> I think it's good for a person
          to spend time alone. It gives them an opportunity to discover.
        </p>
        <Link to="/about" className="read-more">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default WildlifeSection;
