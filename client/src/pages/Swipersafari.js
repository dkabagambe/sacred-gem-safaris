import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import React, { useRef } from "react";
import "../styles/SafariSection.css"; // Make sure to import your custom styles

const SectionSlider = () => {
  const swiperRef = useRef(null); // Reference to Swiper instance

  return (
    <div className="slider-container">
      <Swiper
        ref={swiperRef} // Attach the reference here
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        initialSlide={1} // Set the middle slide as the initial slide
        autoplay={{
          delay: 3000, // Auto-play delay (3 seconds)
          disableOnInteraction: false, // Continue auto-play after user interaction
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="swiper-container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60"
              alt="Gorilla Trekking"
              className="slide-image"
            />
            <h3>Gorilla Trekking</h3>
            <p>
              Discover a thrilling adventure through the jungle, witnessing
              these magnificent creatures up close.
            </p>
            <button className="view-button">VIEW OFFER</button>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60"
              alt="Mountain Hiking"
              className="slide-image"
            />
            <h3>Mountain Hiking</h3>
            <p>
              Experience breathtaking views and unmatched serenity in the
              mountains.
            </p>
            <button className="view-button">VIEW OFFER</button>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60"
              alt="Wildlife Safari"
              className="slide-image"
            />
            <h3>Wildlife Safari</h3>
            <p>
              Join us for a wildlife safari and create unforgettable memories.
            </p>
            <button className="view-button">VIEW OFFER</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=500&auto=format&fit=crop&q=60"
              alt="Wildlife Safari"
              className="slide-image"
            />
            <h3>Wildlife Safari</h3>
            <p>
              Join us for a wildlife safari and create unforgettable memories.
            </p>
            <button className="view-button">VIEW OFFER</button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="slider-navigation">
        <button
          className="nav-button"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Use Swiper's slidePrev method
        >
          <IoIosArrowBack /> {/* Left Arrow Icon */}
        </button>
        <button
          className="nav-button"
          onClick={() => swiperRef.current.swiper.slideNext()} // Use Swiper's slideNext method
        >
          <IoIosArrowForward /> {/* Right Arrow Icon */}
        </button>
      </div>
    </div>
  );
};

export default SectionSlider;
