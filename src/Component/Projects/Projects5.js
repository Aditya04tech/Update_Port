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

const Projects5 = () => {
  return (
    <>
    <Hbtn/>
    <Backbtn/>
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container single-col-max-width">
          <h2 className="heading text-center">Case Study: DURGESH FURNITURE & INTERIER DESIGNER</h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">
            Welcome to Durgesh Furniture & Interior Design, where every space tells a story of timeless elegance and innovative craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="project px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta theme-bg-light p-4">
            <div className="row g-4 g-lg-5">
              <div className="col-md-5 col-lg-4 col-xxl-3 d-none d-md-block">
                <img className="project-thumb img-fluid rounded"  src={`${process.env.PUBLIC_URL}/images/project/df1.png`} alt="df1" />
              </div>
              <div className="col-12 col-md-7 col-lg-8 col-xxl-9">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">DURGESH FURNITURE & INTERIER DESIGNER</h3>
                  <ul className="client-meta list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-industry fa-fw me-2" />
                      <strong>Industry:</strong> Furniture
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-users fa-fw me-2" />
                      <strong>Size:</strong> 5+
                    </li>
                    <li className="mb-2">
                      <strong>
                        <i className="fas fa-link fa-fw me-2" />
                        Website:
                      </strong>
                      <a className="theme-link" href="https://durgeshfurniture.in/">https://durgeshfurniture.in/</a>
                    </li>
                  </ul>
                  <div className="client-bio mb-4">
                  Durgesh Furniture & Interior Design showcases 15 years of expertise in custom-designed furniture and interiors. We create exquisite solutions and transform spaces using design ideas that are modern, timeless, and elegant, to make your vision a reality.
                  </div>
                  <h4 className="subheading mb-3">Project Requirements</h4>
                  <ul className="mb-0">
                  <li className="mb-2">User-Friendly Website - A simple and intuitive interface designed from scratch for easy navigation.</li>
<li className="mb-2">Animations & Visuals - Engaging animations and visuals to showcase furniture designs and interior concepts effectively.</li>
<li className="mb-2">Product & Service Detail Pages - Dedicated pages with detailed information about custom furniture, interior design services, and completed projects.</li>
<li className="mb-2">Custom Logo, Content, and Images - Original logo, creative content, and professional images designed to represent the brand authentically.</li>
<li className="mb-2">WhatsApp Integration - Customers can easily connect with the team through WhatsApp for inquiries, quotes, and personalized consultations.</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project-sections py-5">
            <div className="project-section mb-5">
              <h3 className="project-section-title mb-3">Project Overview</h3>
              <p>
              At Durgesh, we use only the finest materials and techniques, delivering products that stand the test of time. Whether you're furnishing a cozy home or a bustling office, our team of skilled designers and craftsmen is here to guide you every step of the way. From initial consultation to final installation, we prioritize customer satisfaction and attention to detail, ensuring your space not only meets but exceeds your expectations.
              </p>
            </div>

            <div className="project-section mb-5">
              <h3 className="project-section-title">The Challenge</h3>
              <p>
              Building the site for Durgesh Furniture & Interior Design had its unique set of challenges. These included building the user interface from scratch to be visually engaging and easy to use, creating original content for the entire site, designing a unique logo, and finding original, quality images. One of the hurdles in the process was providing users with a seamless experience while integrating WhatsApp for direct customer inquiries and consultations. While balancing WTUI aesthetics and usability to showcase the custom furniture and interior design services, we plan to continue refining and improving the site to have an engaging, organized, and fully functional site.
              </p>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/df2.png`} alt="df2" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/project/df3.png`} alt="df3" />
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
            <Link className="btn btn-primary"to="/contact" >
              <i className="fas fa-paper-plane me-2" />Hire Me
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Projects5;
