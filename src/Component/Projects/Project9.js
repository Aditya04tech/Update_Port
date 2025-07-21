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

const Project9 = () => {
  return (
    <>
    <Hbtn/>
    <Backbtn/>
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container single-col-max-width">
          <h2 className="heading text-center">Case Study: POWAR MATRIMONY</h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">
            Welding Hearts through Precision in Bridging the Gap between Tradition and Modernity. Made Matches for Each Distinct Journey. Find Your Perfect Match at Powar Weddings 
            </p>
          </div>
        </div>
      </section>

      <section className="project px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta theme-bg-light p-4">
            <div className="row g-4 g-lg-5">
              <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img className="project-thumb img-fluid rounded"  src={`${process.env.PUBLIC_URL}/images/project/pm1.png`} alt="pm1"/>
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">POWAR MATRIMONY</h3>
                  <ul className="client-meta list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-industry fa-fw me-2" />
                      <strong>Industry:</strong> MATRIMONY 
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
                      <a className="theme-link" href="https://powarmatrimony.com/">https://powarmatrimony.com/</a>
                    </li>
                  </ul>
                  <div className="client-bio mb-4">
                  Welding Hearts through Precision in Bridging the Gap between Tradition and Modernity. Made Matches for Each Distinct Journey. Find Your Perfect Match at Powar Weddings “Where Tradition Meets Modernity, Bridging Hearts with Precision. Tailored Matches for Every Unique Journey. Your Perfect Partner Awaits at Powar Matrimony.
                  </div>
                  <h4 className="subheading mb-3">Project Requirements</h4>
                  <ul className="mb-0">
                  <li className="mb-2">User-Friendly Website - A simple and intuitive interface with a red and white theme for easy navigation.</li>
<li className="mb-2">Animations & Visuals - Engaging animations enhance the user experience, making information accessible and appealing.</li>
<li className="mb-2">Service Detail Pages - Dedicated pages providing detailed information about healthcare services and specialties.</li>
<li className="mb-2">Custom Images - Professionally designed images representing healthcare services for a personalized, trustworthy experience.</li>
<li className="mb-2">WhatsApp Integration - Patients can easily click the "Contact on WhatsApp" button to connect with the hospital for inquiries and appointments.</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project-sections py-5">
            <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
              <p>
              This project involved creating a responsive, multi-page website designed to highlight the client’s products, services, and brand identity. The goal was to deliver a smooth user experience through clean layout, intuitive navigation, and fast-loading, mobile-optimized pages. Key features included service/product sections, inquiry forms, and visually engaging content. Special attention was given to content structuring, consistent design, and cross-device compatibility. The website was built to enhance credibility, support lead generation, and present a professional digital presence that aligns with the client’s goals and target audience.
              </p>
            </div>

            <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
              <p>
              While working on this multi-page website project, I faced a range of challenges that tested both my technical and creative skills. Structuring content in a clear and user-friendly way was essential, especially when initial inputs were limited. Crafting engaging and SEO-friendly text required thorough research and a deep understanding of the client's industry. Image selection and optimization also played a crucial role, as visuals needed to align with the brand while ensuring fast load times. Ensuring smooth multi-page rendering, responsive design across all devices, and maintaining consistent UI/UX were also key priorities. Lastly, organizing the information architecture to guide users effectively through services, products, and contact options demanded strategic planning and execution.
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded"  src={`${process.env.PUBLIC_URL}/images/project/pm2.png`} alt="pm2" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded"  src={`${process.env.PUBLIC_URL}/images/project/pm3.png`} alt="pm3" />
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

export default Project9;
