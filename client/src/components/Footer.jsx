import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo1.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="testimonial-section">
        <h2>What our clients say</h2>
        <p>
          I travel with my children to explore the world. It gives them an
          appreciation for life and the opportunity for parents to spend quality
          time with them. Sacred Gem Safaris offered my family the perfect
          opportunity to discover new places.
        </p>
        <p className="client-name">Namara Odeth | 8.5.2024</p>
      </div>

      <div className="footer-links">
        <div className="link-column">
          <h3>Services</h3>
          <ul>
            <li>Packages</li>
            <li>Experiences</li>
            <li>Articles</li>
          </ul>
        </div>

        <div className="link-column">
          <h3>Destinations</h3>
          <ul>
            <li>Rwanda</li>
            <li>Kenya</li>
            <li>Uganda</li>
            <li>Tanzania</li>
          </ul>
        </div>

        <div className="link-column">
          <h3>About us</h3>
          <ul>
            <li>About us</li>
            <li>Our services</li>
            <li>Our impact</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-tiktok"></i>
        <i className="fab fa-instagram"></i>
      </div>

      <div className="newsletter">
        <h3>Never miss out</h3>
        <p>
          Subscribe to our newsletter to stay up to date with our offers and
          latest articles
        </p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Country of residence" />
          <input type="email" placeholder="Email address" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="footer-bottom">
        <div className="logo">
          <img src={logo} alt="Sacred Gem Safaris Logo" />
        </div>
        <div className="legal-links">
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="copyright">
          <p>Copyright Sacred Gem Safaris 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
