import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ExperienceSection.css";

const ExperienceSection = () => {
  // State to manage the active accordion item
  const [activeAccordion, setActiveAccordion] = useState("wildlife");

  // Toggle the accordion based on the clicked item
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="experience-section">
      {/* Top section with image and title */}
      <div className="experience-banner">
        <img
          src="https://images.pexels.com/photos/5480716/pexels-photo-5480716.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Scenic East Africa"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>Be Inspired</h1>
          <hr className="divider" />
          <Link to="/gallery" className="gallery-link">
            Explore our gallery
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="experience-content text-center">
        <h2>Experience Raw, Untamed Nature</h2>
        <p>
          I think it’s good for a person to spend time alone. It gives them an
          opportunity to discover. I think it’s good for a person to spend time
          alone.
        </p>
        <Link to="/all-experiences" className="view-experiences-link">
          View all experiences
        </Link>
      </div>

      {/* Birding section */}
      <div className="birding-section d-flex justify-content-center">
        <div className="birding-card text-center">
          <img
            src="https://images.pexels.com/photos/22476019/pexels-photo-22476019/free-photo-of-close-up-of-a-wild-duck-in-flight.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Birding in East Africa"
            className="birding-image"
          />
          <div className="birding-text">
            <p>Uganda, Rwanda, Kenya</p>
            <h3>Birding</h3>
          </div>
        </div>
      </div>

      {/* Why travel with us section */}
      <div className="why-travel-section text-center">
        <h2>Why Travel With Us?</h2>
        <p>
          I think it’s good for a person to spend time alone. It gives them an
          opportunity to discover.
        </p>

        <div className="accordion-section">
          <div
            className={`accordion-item ${
              activeAccordion === "wildlife" ? "open" : ""
            }`}
            onClick={() => toggleAccordion("wildlife")}
          >
            <div className="accordion-header">Wildlife</div>
            {activeAccordion === "wildlife" && (
              <div className="accordion-body">
                <img
                  src="https://media.istockphoto.com/id/533297303/photo/lion-mother-with-cub.webp?a=1&b=1&s=612x612&w=0&k=20&c=3omtgRGxs8kPAft65NUWKu-RQjK8kT1_3R9pwOLPB_U="
                  alt="Wildlife"
                  className="accordion-image"
                />
                <p>Explore the diverse wildlife of East Africa...</p>
              </div>
            )}
          </div>

          <div
            className={`accordion-item ${
              activeAccordion === "birding" ? "open" : ""
            }`}
            onClick={() => toggleAccordion("birding")}
          >
            <div className="accordion-header">Birding</div>
            {activeAccordion === "birding" && (
              <div className="accordion-body">
                <img
                  src="https://images.unsplash.com/photo-1667924672592-57ac3901c0da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZGluZyUyMGluJTIwVWdhbmRhfGVufDB8fDB8fHww"
                  alt="Birding"
                  className="accordion-image"
                />
                <p>
                  Discover birding adventures in Uganda, Rwanda, and Kenya...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
