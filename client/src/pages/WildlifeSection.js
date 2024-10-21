import React from "react";
import { Link } from "react-router-dom";
import "../styles/WildlifeSection.css";

const WildlifeSection = () => {
  return (
    <div className="wildlife-section">
      {/* Be Inspired Section */}
      <section className="be-inspired">
        <img
          src="https://images.pexels.com/photos/13365353/pexels-photo-13365353.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Serengeti Elephant"
          className="inspire-image"
        />
        <h2 className="section-title">Be Inspired</h2>
        <Link to="/gallery" className="explore-gallery">
          Explore Our Gallery
        </Link>
      </section>

      {/* Experience Raw, Untamed Nature Section */}
      <section className="untamed-nature">
        <h2 className="section-title">Experience Raw, Untamed Nature</h2>
        <p>
          Journey deep into the heart of Africa’s untamed wilderness. Discover
          the vibrant landscapes and abundant wildlife that make this region so
          unique.
        </p>
        <Link to="/experiences" className="view-experiences">
          View All Experiences
        </Link>
        <img
          src="https://images.pexels.com/photos/28972829/pexels-photo-28972829/free-photo-of-close-up-of-a-rat-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Untamed Nature"
          className="nature-image"
        />
      </section>

      {/* Why Travel With Us Section */}
      <section className="why-travel">
        <h2 className="section-title">Why Travel With Us?</h2>
        <p>
          Our wildlife safaris combine adventure, luxury, and sustainability.
          Travel with us for an experience like no other, immersed in nature's
          grandeur.
        </p>
        <img
          src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Why Travel"
          className="why-travel-image"
        />
      </section>

      {/* Birding Section */}
      <section className="birding">
        <h2 className="section-title">Birding Adventures</h2>
        <p>
          Explore the diverse birdlife across Uganda, Rwanda, and Kenya. Our
          tailored birding safaris will leave you in awe of Africa’s avian
          beauty.
        </p>
        <Link to="/birding" className="view-birding">
          View Birding Safaris
        </Link>
        <img
          src="https://images.pexels.com/photos/66888/cape-crane-balearica-regulorum-crane-bird-66888.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Birding Safari"
          className="birding-image"
        />
      </section>
    </div>
  );
};

export default WildlifeSection;
