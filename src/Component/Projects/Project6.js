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

const Project6
 = () => {
  return (
    <>
    <Hbtn/>
    <Backbtn/>
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container single-col-max-width">
          <h2 className="heading text-center">Case Study: SHIV SHAKTI TOURS AND TRAVELS </h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">
            Welcome to Shiv Shakti Tours and Travels, where every journey is crafted with passion and expertise since our establishment in 1980. With over four decades of experience in the travel industry, we pride ourselves on delivering exceptional travel experiences that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="project px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta theme-bg-light p-4">
            <div className="row g-4 g-lg-5">
              <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img className="project-thumb img-fluid rounded"  src={`${process.env.PUBLIC_URL}/images/project/sst1.png`} alt="sst1" />
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">SHIV-SHAKTI TOURS AND TRAVELS</h3>
                  <ul className="client-meta list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-industry fa-fw me-2" />
                      <strong>Industry:</strong> Tour & Travels 
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-users fa-fw me-2" />
                      <strong>Size:</strong> 8+
                    </li>
                    <li className="mb-2">
                      <strong>
                        <i className="fas fa-link fa-fw me-2" />
                        Website:
                      </strong>
                      <a className="theme-link" href="https://www.shivshaktitravelsnagpur.com/">https://www.shivshaktitravelsnagpur.com/</a>
                    </li>
                  </ul>
                  <div className="client-bio mb-4">
                    A hub of knowledge and excellence, Shinde's Education Gallery is dedicated to empowering students with
                    quality education and innovative learning experiences. Explore, learn, and achieve your academic goals with us!
                  </div>
                  <h4 className="subheading mb-3">Project Requirements</h4>
                  <ul className="mb-0">
                    <li className="mb-2">User-Friendly Website - The website will have a simple and intuitive interface for easy navigation.</li>
                    <li className="mb-2">Animations & Visuals - Engaging animations will enhance the user experience.</li>
                    
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
                Shinde's Education Gallery is an interactive educational platform designed for seamless learning.
                It offers a user-friendly interface, engaging animations, and dedicated course detail pages.
                Users can explore various subjects and enroll effortlessly through WhatsApp, ensuring direct
                communication with the admin for inquiries, admissions, and course-related assistance.
              </p>
            </div>

            <div className="project-section mb-5">
              <h3 className="project-section-title">The Challenge</h3>
              <p>
                Developing Shinde’s Education Gallery came with several challenges, including designing an intuitive UI structure,
                implementing content effectively, managing page layouts, and optimizing image sizing.
                Ensuring smooth functionality, a user-friendly experience, and seamless deployment were also key hurdles.
                Overcoming these required continuous refinement to create a well-structured, engaging, and fully functional educational platform.
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/sst2.png`} alt="ssh2"  />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/sst3.png`} alt="ssh3"  />
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
            <Link className="btn btn-primary" to="/contact">
              <i className="fas fa-paper-plane me-2" />Hire Me
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Project6;
