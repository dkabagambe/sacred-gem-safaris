import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
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
      <div className="experience-content text-center">
        <h5>Experience east africa</h5>
        <h2>Experience Raw, Untamed Nature</h2>
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
      <div className="birding-section d-flex justify-content-center">
        <div className="birding-card">
          <div className="card-overlay">
            <div className="label">WILDLIFE</div>
            <img
              src="https://images.pexels.com/photos/22476019/pexels-photo-22476019/free-photo-of-close-up-of-a-wild-duck-in-flight.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Birding in East Africa"
              className="birding-image"
            />
            <div className="birding-text">
              <p>
                <span className="location-icon">
                  <FaLocationDot />
                </span>
                Uganda, Rwanda, Kenya
              </p>
              <h2>BIRDING</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Why travel with us section */}
      <div className="why-travel-section text-center">
        <h1>why sacred gem safaris</h1>
        <h2>Why travel With Us?</h2>
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
