import { Link } from "react-router-dom";
import logo from "../assets/img/logo.PNG";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Services Section */}
        <div className="footer-column">
          <input
            type="checkbox"
            id="services-toggle"
            className="footer-toggle"
          />
          <label htmlFor="services-toggle">
            <h4>Services</h4>
          </label>
          <ul className="footer-list">
            <li>Packages</li>
            <li>Experiences</li>
            <li>Articles</li>
          </ul>
        </div>

        <div className="horizontal-lines"></div>

        {/* Destinations Section */}
        <div className="footer-column">
          <input
            type="checkbox"
            id="destinations-toggle"
            className="footer-toggle"
          />
          <label htmlFor="destinations-toggle">
            <h4>Destinations</h4>
          </label>
          <ul className="footer-list">
            <li>Rwanda</li>
            <li>Kenya</li>
            <li>Uganda</li>
            <li>Tanzania</li>
          </ul>
        </div>

        <div className="horizontal-lines"></div>

        {/* About Us Section */}
        <div className="footer-column">
          <input type="checkbox" id="about-toggle" className="footer-toggle" />
          <label htmlFor="about-toggle">
            <h4>About us</h4>
          </label>
          <ul className="footer-list">
            <li>About us</li>
            <li>Our services</li>
            <li>Our impact</li>
          </ul>
        </div>
        <div className="horizontal-lines"></div>
      </div>

      {/* Social Links, Newsletter, etc. */}
      <div className="footer-social-container">
        <div className="footer-social">
          <Link to="">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="">
            <i className="fab fa-tiktok"></i>
          </Link>
          <Link to="">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      <div className="horizontal-line"></div>

      <div className="newsletter-section">
        <h3>Never miss out</h3>
        <p>
          Subscribe to our newsletter to stay up to date with our offers and
          latest articles
        </p>
        <form className="newsletter-form">
          <input type="text" placeholder="Name(s)" />
          <input type="text" placeholder="Country of residence" />
          <input type="email" placeholder="Email address" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      <div className="footer-logo">
        <img src={logo} alt="Sacred Gem Safaris Logo" />
      </div>

      <div className="horizontal-line"></div>

      <div className="footer-bottom">
        <Link to="/disclaimer">Disclaimer</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>

      <p className="footer-copyright">Copyright Sacred Gem Safaris 2024</p>
    </footer>
  );
};

export default Footer;
