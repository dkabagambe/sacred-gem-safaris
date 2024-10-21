import "../styles/ExperienceSection.css";
import React from "react";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      {/* Be Inspired Section */}
      <div className="be-inspired">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGxhbmRzY2FwZXxlbnwwfHx8fDE2Mzk4NjAzMzg&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Inspiration"
          className="inspiration-image"
        />
        <h2 className="inspired-title">Be inspired</h2>
        <Link to="/gallery" className="explore-gallery">
          EXPLORE OUR GALLERY
        </Link>
      </div>

      {/* Experience Section */}
      <div className="experience-nature">
        <h2 className="section-title">Experience raw, untamed nature</h2>
        <p className="section-text">
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover.
        </p>
        <Link to="/experiences" className="view-experiences">
          VIEW ALL EXPERIENCES
        </Link>
      </div>

      {/* Birding Section */}
      <div className="birding">
        <img
          src="https://images.unsplash.com/photo-1511381037473-4c5d5ce4e4db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGJpcnRpbmclMjBiaXJkcyUyMHR3ZW50ZXJ8ZW58MHx8fHwxNjM4NDE2NjQ2&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Birding"
          className="birding-image"
        />
        <div className="birding-details">
          <p className="birding-title">Birding</p>
          <p className="birding-locations">Uganda, Rwanda, Kenya</p>
        </div>
      </div>

      {/* Why Travel with Us */}
      <div className="why-travel">
        <h2 className="section-title">Why travel with us?</h2>
        <p className="section-text">
          I think it's good for a person to spend time alone. It gives them an
          opportunity to discover.
        </p>
      </div>
    </div>
  );
};

export default ExperienceSection;
