import React from 'react';
import "../Custom2/Custom2.style.css";
import { Link } from 'react-router-dom';
import Hbtn from '../Hbtn'
import Backbtn from '../BackBtn'
// const teamMembers = [
//   {
//     name: "Pranav Belorker",
//     image: "https://github.com/Aditya04tech/Portfolio_Images/blob/main/Pranav.jpg?raw=true",
//     portfolio: "http://pranavbelorker.in/",
//   },
//   {
//     name: "ME",
//     image: "https://github.com/Aditya04tech/Portfolio_Images/blob/main/Pranav.jpg?raw=true",
//     portfolio: "http://pranavbelorker.in/",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <>
//       <h2 className="section-title font-weight-bold mb-3">Our Team</h2>
//       <section className="unique-team-section-wrapper">
//         <div className="unique-team-members">
//           {teamMembers.map((member, index) => (
//             <div className="unique-team-member-card" key={index}>
//               <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
//                 <img src={member.image} alt={member.name} loading="lazy" />
//                 <span className="unique-team-member-name">{member.name}</span>
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

const Project2 = () => {
  return (
    <>
    <Backbtn/>
    <Hbtn/>
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container single-col-max-width">
          <h2 className="heading text-center">Case Study: COSDVL PHARMA</h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">
            COSDVL Pharma is all about creating top-notch face creams, washes, and lotions that are crafted to nourish, 
            protect, and bring out your skin's natural radiance.
            </p>
          </div>
        </div>
      </section>

      <section className="project px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta theme-bg-light p-4">
            <div className="row g-4 g-lg-5">
              <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img className="project-thumb img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/cosdvl1.png`} alt="cosdvl1" />
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">COSDVL PHARMA</h3>
                  <ul className="client-meta list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-industry fa-fw me-2" />
                      <strong>Industry:</strong> PHARMA
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-users fa-fw me-2" />
                      <strong>Size:</strong> 15+
                    </li>
                    <li className="mb-2">
                      <strong>
                        <i className="fas fa-link fa-fw me-2" />
                        Website:
                      </strong>
                      <a className="theme-link" href="https://cosdvlpharma.com/">https://cosdvlpharma.com</a>
                    </li>
                  </ul>
                  <div className="client-bio mb-4">
                  COSDVL Pharma offers a variety of face creams, washes, and lotions designed to refresh, nourish, and safeguard your skin. With a strong focus on high-quality ingredients and effective formulas, COSDVL Pharma is dedicated to helping you achieve healthier, more radiant skin, no matter your skin type, all while enhancing your natural beauty.
                  </div>
                  <h4 className="subheading mb-3">Project Requirements</h4>
                  <ul className="mb-0">
                    <li className="mb-2">User-Friendly Website - The website will have a simple and intuitive interface for easy navigation.</li>
                    <li className="mb-2">Animations & Visuals - Engaging animations will enhance the user experience.</li>
                    <li className="mb-2">Products Detail Pages - Each product will have a dedicated page with complete details.</li>
                    <li className="mb-2">
                      WhatsApp Integration - Users can select a course and click the "Enroll" button, which redirects to WhatsApp and sends
                      the enrollment details to the admin.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project-sections py-5">
            <div className="project-section mb-5">
              <h3 className="project-section-title mb-3">Project Overview</h3>
              <p>
              COSDVL Pharma is a comprehensive skincare platform dedicated to promoting healthy and radiant skin. It features a user-friendly interface, detailed product pages for face creams, washes, and lotions, and insightful skincare tips. Customers can easily explore products, understand their benefits, and make purchases. The platform also facilitates seamless communication with the COSDVL Pharma team for inquiries, product recommendations, and personalized skincare guidance.
              </p>
            </div>

            <div className="project-section mb-5">
              <h3 className="project-section-title">The Challenge</h3>
              <p>
              The development of COSDVL Pharma's platform came with its own challenges. The client specified to stay to their own images and related content, limiting creative options. Furthermore, so much of the design was already established, limiting an opportunity for innovation in implementing new UI options. Making sure we followed the client's vision and approached the design respectfully yet successfully required modification and diligent communication. Ultimately, the only way to achieve the desired results was to negotiate design best practices to honor the client's good vision and tactics for delivering an accessible and engaging platform.
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/cosdvl2.png`} alt="cosdvl2" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded"  src={`${process.env.PUBLIC_URL}/images/project/cosdvl3.png`} alt="cosdvl3"/>
              </div>
            </div>

            
          </div>

          {/* Team Section */}
          {/* <TeamSection /> */}
        </div>
      </section>

      <section className="promo-section theme-bg-light py-5 text-center">
        <div className="container single-col-max-width">
          <h2 className="title">Want me to help with your project?</h2>
          <p>If you take on freelance work, you can use this section to prompt any potential clients to get in touch with you.</p>
          <div className="text-center">
            <Link className="btn btn-primary" to="/contact" >
              <i className="fas fa-paper-plane me-2" />Hire Me
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Project2;
