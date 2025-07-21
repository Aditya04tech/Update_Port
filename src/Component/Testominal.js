import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      quote: "Simon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "assets/images/clients/profile-1.png",
      name: "Brandon James",
      info: "Project Manager, Google",
    },
    {
      quote: "Simon is a great engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "assets/images/clients/profile-2.png",
      name: "Kate Sanders",
      info: "Project Manager, Uber",
    },
    {
      quote: "Simon is very skilled! Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "assets/images/clients/profile-3.png",
      name: "James Lee",
      info: "Product Manager, Amazon",
    },
    {
      quote: "Simon is highly recommended! Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "assets/images/clients/profile-4.png",
      name: "Olivia White",
      info: "Product Manager, Dropbox",
    },
    {
      quote: "Simon is outstanding! Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image: "assets/images/clients/profile-5.png",
      name: "Samuel Reyes",
      info: "CTO, StartupHub",
    },
  ];

  return (
    <section className="testimonials-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
        <div className="testimonial-carousel-container">
        <Swiper
        
  slidesPerView={1} // Default for mobile
  spaceBetween={20}
  loop={true}
  navigation={true} // Enables navigation buttons
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  modules={[Autoplay, Pagination]}
  breakpoints={{
    768: { slidesPerView: 2 }, // Show 2 slides on tablets
    1024: { slidesPerView: 3 }, // Show 3 slides on desktops
  }}
  className="testimonial-carousel"
>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div className="item-inner">
                    <div className="quote-holder">
                      <blockquote className="quote-content">
                        {testimonial.quote}
                      </blockquote>
                      <i className="fas fa-quote-left" />
                    </div>
                    <div className="source-holder">
                      <div className="source-profile">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="meta">
                        <div className="name">{testimonial.name}</div>
                        <div className="info">{testimonial.info}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
