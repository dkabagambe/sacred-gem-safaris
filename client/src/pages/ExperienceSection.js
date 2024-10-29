import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import "../styles/ExperienceSection.css";

const ExperienceSection = () => {
  return (
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
            Explore our gallery
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
        <h3>Experience</h3>
        <h3>raw, untamed</h3>
        <h3>nature</h3>
        <p>
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
        <Link to="/all-experiences" className="view-experiences-link">
          View all experiences
        </Link>
      </div>

      {/* Birding section */}
      <div className="birding-section ">
        <div className="birding-card">
          <div className="card-overlay">
            <div className="label">WILDLIFE</div>
            <img
              src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Birding in East Africa"
              className="birding-image"
            />
            <div className="birding-text">
              <p className="locations">
                <span className="location-icon">
                  <CiLocationOn />
                </span>
                Uganda, Rwanda, <br />
                Kenya
              </p>
            </div>
          </div>
          <h2>BIRDING</h2>
        </div>
      </div>

      {/* Why travel with us section */}
      <div className="why-travel-section ">
        <h5>why sacred gem safaris</h5>
        <h3>Why travel</h3>
        <h3>With Us?</h3>

        <p>
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
      </div>
    </div>
  );
};

export default ExperienceSection;
