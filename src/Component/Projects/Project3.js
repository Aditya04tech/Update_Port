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

const Project3 = () => {
  return (
    <>
    <Hbtn/>
    <Backbtn/>
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container single-col-max-width">
          <h2 className="heading text-center">Case Study: S.S Computer</h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">
            S.S Computer provides expert desktop and laptop repairs, sales, and services, offering genuine parts and prompt solutions. Trust us for reliable IT support, upgrades, maintenance, and troubleshooting to keep your systems running smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="project px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta theme-bg-light p-4">
            <div className="row g-4 g-lg-5">
              <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img className="project-thumb img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/sscom1.png`} alt="sscom1"  />
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">S.S Computer</h3>
                  <ul className="client-meta list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-industry fa-fw me-2" />
                      <strong>Industry:</strong> IT/Sales 
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-users fa-fw me-2" />
                      <strong>Size:</strong> 10+
                    </li>
                    <li className="mb-2">
                      <strong>
                        <i className="fas fa-link fa-fw me-2" />
                        Website:
                      </strong>
                      <a className="theme-link" href="https://shindeseducationgallery.com/">https://shindeseducationgallery.com/</a>
                    </li>
                  </ul>
                  <div className="client-bio mb-4">
                  S.S Computer provides expert desktop and laptop repairs, sales, and services, offering genuine parts and prompt solutions. Trust us for reliable IT support, upgrades, maintenance, and troubleshooting to keep your systems running smoothly.
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
              S.S Computer is an informative platform for IT solutions, offering desktop and laptop repairs, sales, and services. With a user-friendly interface, engaging visuals, and dedicated detail pages for products and services, users can explore offerings, view pricing, and make purchases through the "Buy on WhatsApp" option. Direct communication with the admin ensures quick support and inquiries. The platform also showcases a portfolio of completed projects, building credibility and inspiring trust among customers.
              </p>
            </div>

            <div className="project-section mb-5">
              <h3 className="project-section-title">The Challenge</h3>
              <p>
              Building S.S Computer's platform had its fair share of obstacles, including developing a user-friendly and appealing UI structure, effectively managing content presentation, and developing engaging animations. One of the biggest challenges was providing a smooth, uninterrupted transition to WhatsApp for inquiries and purchases while ensuring seamless functionality. Overcoming these obstacles, however, all required ongoing adjustments to create a platform that is engaging, user-friendly, and thoughtfully sequenced, meeting business expectations and user experience expectations. 
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/sscom1.png`} alt="sscom2"/>
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/sscom3.png`} alt="sscom3"/>
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
            <Link className="btn btn-primary"to="/contact">
              <i className="fas fa-paper-plane me-2" />Hire Me
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Project3;
