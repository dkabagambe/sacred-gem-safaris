import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Services</h4>
          <p>Packages</p>
          <p>Experiences</p>
          <p>Articles</p>
        </div>

        <div className="horizontal-lines"></div>
        <div className="footer-column">
          <h4>Destinations</h4>
          <p>Rwanda</p>
          <p>Kenya</p>
          <p>Uganda</p>
          <p>Tanzania</p>
        </div>

        <div className="horizontal-lines"></div>
        <div className="footer-column">
          <h4>About us</h4>
          <p>About us</p>
          <p>Our services</p>
          <p>Our impact</p>
        </div>
      </div>

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

      <div className="horizontal-line"></div>

      <div className="newsletter-section">
        <h4>Never miss out</h4>
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

      <p className="footer-copyright">
        &copy; Copyright Sacred Gem Safaris 2024
      </p>
    </footer>
  );
};

export default Footer;
