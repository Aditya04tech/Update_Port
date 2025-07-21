import React from 'react'
import { Link } from 'react-router-dom'
// import Footerone from './Footerone'

function Resume() {
  return (
    <>
    <div className="main-wrapper">
  <section className="cta-section theme-bg-light py-5">
    <div className="container text-center single-col-max-width">
      <h2 className="heading mb-3">My Resume</h2>
      <a className="btn btn-primary" 
       href={`${process.env.PUBLIC_URL}/images/Aditya.System_Resume.pdf`}
        download="Aditya_Resume.pdf"
      >
        
        <i className="fas fa-file-pdf me-2" />Download PDF Version</a>
    </div>{/*//container*/}
  </section>
  <div className="container resume-container px-3 px-lg-5">
    <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
      <div className="resume-header">
        <div className="row align-items-center">
          <div className="resume-title display-flex col-12 col-md-6 col-lg-8 col-xl-" >
          <h4 className="resume-name mb-0 text-uppercase">
  Aditya<span className="name-break">.</span>R<span className="name-break">.</span>Sukhdeve
</h4>

            <div className="resume-tagline mb-3 mb-md-0">System Engineer</div>
          </div>{/*//resume-title*/}
          <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg me-2 " /><a className="resume-link" href="tel:#">+91 8308029106</a></li>
              <li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg me-2" /><a className="resume-link" href="mailto:#">aditya.systemengineer@gmail.com</a></li>
              <li className="mb-2"><i className="fas fa-globe fa-fw fa-lg me-2" /><Link className="resume-link" href="#">https://www.linkedin.com/in/aditya-sukhdeve-472493205/</Link></li>
              <li className="mb-0"><i className="fas fa-map-marker-alt fa-fw fa-lg me-2" />Santra Market,Nagpur</li>
            </ul>
          </div>{/*//resume-contact*/}
        </div>{/*//row*/}
      </div>{/*//resume-header*/}
      <hr />
      <div className="resume-intro py-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 col-xl-2 text-center">
            <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src="/images/Project-Thumbnail/resume-img1.png" alt="image" />
          </div>
          <div className="col text-start">
            <p className="mb-0"> Dynamic and dedicated System Engineer with 2+ years of experience in hardware troubleshooting,
network configuration, and cloud systems (AWS). Skilled in managing desktops, servers, and resolving
critical IT issues with minimal downtime. Strong knowledge of Windows/Linux OS,Active Directory
LAN lab setups, and IT asset management.</p>
          </div>{/*//col*/}
        </div>
      </div>{/*//resume-intro*/}
      <hr />
      <div className="resume-body">
        <div className="row">
          <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
            <section className="work-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
              <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">System Engineer & MERN Stack Developer </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">PSK Technologies Pvt.Ltd<br/> 2025 - Present</div>
                </div>
                <div className="item-content">
                  <p>As a System Engineer at PSK Technologies Pvt. Ltd., I specialize in managing and troubleshooting hardware, configuring networks, and ensuring seamless IT infrastructure performance. Skilled in installing, maintaining, and optimizing desktops, servers, and LAN/WAN setups, I have successfully reduced downtime and improved system reliability. Proficient in Windows/Linux administration, Active Directory, and IT asset management, I focus on delivering secure and efficient solutions that support business operations. Additionally, I develop modern and responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), combining system engineering expertise with software development to create scalable and user-focused solutions.</p>
                  <ul className="resume-list">
                    <li >Installed, configured, and maintained desktops, servers, and LAN/WAN setups, improving IT efficiency.</li>
                    <li>Managed Windows/Linux administration, Active Directory, and IT asset management for seamless operations.</li>
                    <li>Performed hardware diagnostics and resolved critical IT issues, reducing downtime by 35%.</li>
                   <li>Developed responsive and dynamic web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                  </ul>
                </div>
              </div>{/*//item*/}
              {/* <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Graphics Designer & Video Editer</h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">PSK Technologies Pvt.Ltd <br/>  2025 - Present</div>
                </div>
                <div className="item-content">
                  <p>At PSK Technologies, I worked as a Video Editor, creating promotional, branding, and educational videos using tools like After Effects, DaVinci Resolve, Filmora, CapCut, and VN. I also contributed as a Graphic Designer, designing banners, templates, and social media creatives using Adobe Express, Photoshop, and Canva. My creative efforts helped deliver visually appealing content that supported marketing goals and enhanced client engagement across various platforms.</p>
                  <ul className="resume-list">
                    <li>I worked as a Graphic Designer, I created banners, templates, and social media creatives using Photoshop, Canva, and Adobe Express to deliver visually impactful content.</li>
                    <li>I worked as a Video Editor, editing promotional and branding videos using tools like After Effects, DaVinci Resolve, and CapCut.</li>
                  </ul>
                </div>
              </div>//item */}
              <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">System Engineer - Lanwin IT Solution (Onsite at Dinshaws Dairy Food Pvt. Ltd., Nagpur)</h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Dinshaws Dairy food Pvt.Ltd<br/> 04-Feb-23 - 30-Sep-23</div>
                </div>
                <div className="item-content">
                  <p>As an Engineer, I managed and maintained desktop, laptop, and network systems across the organization. I provided technical support for hardware and network-related issues, ensuring smooth and uninterrupted operations. I continuously enhanced my skills in hardware management, networking, and software systems, and also gained hands-on experience working with Ubuntu and other Linux-based environments for system management and troubleshooting.</p>
                  <ul className="resume-list">
                    <li>Diagnosed and resolved hardware, software, and network-related issues to ensure business continuity</li>
                    <li>Achieved a 60% reduction in system downtime through proactive troubleshooting and maintenance</li>
                    <li>Handled installation and configuration of desktops, laptops, printers, and server systems</li>
                    <li>Provided end-user support and contributed to smooth daily operations across departments</li>
                  </ul>
                </div>
              </div>{/*//item*/}
             
             
              
            </section>{/*//work-section*/}

             <section className="project-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">CERTIFICATIONS</h3>
              <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Leadership Training</h4>
                </div>
                <div className="item-content">
                  <p>Completed an intensive leadership training program focused on team management, communication skills, and effective decision-making under the guidance of JC. Nilesh Verma.</p>
                </div>
              </div>{/*//item*/}
              <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">EPS National Trainer Session - JC. Ravindra Misal</h4>
                 
                </div>
                <div className="item-content">
                  <p> Participated in the EPS National Trainer Session conducted by JC. Ravindra Misal, enhancing expertise in strategic planning, professional growth, and leadership development.</p>
                </div>
              </div>{/*//item*/}
            
             
            </section>{/*//project-section*/}	





            <section className="project-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
              <div className="item mb-3">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Shinde's Education Gallery</h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>
                </div>
                <div className="item-content">
                  <p>Premier coaching for school, JEE, NEET, CET, and skill development with expert faculty,
                  personalized attention, and a result-oriented approach for student success.</p>
                </div>
              </div>{/*//item*/}
              <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">COSDVL Pharma</h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>
                </div>
                <div className="item-content">
                  <p> COSDVL Pharma is all about creating top-notch face creams, washes, and lotions that are crafted to nourish, 
                  protect, and bring out your skin's natural radiance.</p>
                </div>
              </div>{/*//item*/}
              <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Ashish Mobile Shop </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>
                </div>
                <div className="item-content">
                  <p>Hello and welcome to Ashish Mobile Shop , where we have been established since 24 Feb 2021 . Our team comprises of technology freaks and customer care professionals who aim at connecting you with the world using advanced technology and exceptional service.</p>
                </div>
              </div>{/*//item*/}
              <div className="item">
                <div className="item-heading row align-items-center mb-2">
                  <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">LMS-Learning Management Syatem </h4>
                  <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>
                </div>
                <div className="item-content">
                  <p>Hello and welcome to Ashish Mobile Shop , where we have been established since 24 Feb 2021 . Our team comprises of technology freaks and customer care professionals who aim at connecting you with the world using advanced technology and exceptional service.</p>
                </div>
              </div>{/*//item*/}
            </section>{/*//project-section*/}	

          </div>{/*//resume-main*/}
          <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
            <section className="skills-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
              <div className="item">
                <h4 className="item-title">Technical</h4>
                <ul className="list-unstyled resume-skills-list">
                  <li className="mb-2">Computer-Hardware/Networking</li>
                  <li className="mb-2">Ubuntu,Redhat,Centos</li>
                  <li className="mb-2">AWS,Google-Cloud,Mongodb-Atlas</li>
                  <li className="mb-2">Git-Hub,Docker</li>
                  <li className="mb-2">UI-Reactjs,HTML,CSS,JS,JQ</li>
                  <li className="mb-2">Expressjs,Nodejs</li>
                 
                </ul>
              </div>{/*//item*/}
              <div className="item">
                <h4 className="item-title">Professional</h4>
                <ul className="list-unstyled resume-skills-list">
                <li className="mb-2">Leadership</li>
                  <li className="mb-2">Project Management</li>
                  <li className="mb-2">Creative</li>
                  <li className="mb-2">Strong problem solver</li>
                  <li className="mb-2">Good time management</li>
                  <li>Team-Bulding</li>
                </ul>
              </div>{/*//item*/}
            </section>{/*//skills-section*/}
            <section className="education-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
              <ul className="list-unstyled resume-education-list">
                <li className="mb-3">
                  <div className="resume-degree font-weight-bold">BTech-Computer Science & Engineering</div>
                  <div className="resume-degree-org text-muted">Vilas Rao Deshmukh Of Engineering,Nagpur</div>
                  <div className="resume-degree-time text-muted">Present 2025</div>
                </li>
                <li>
                  <div className="resume-degree font-weight-bold">Diploma in Computer Science & Engineering</div>
                  <div className="resume-degree-org text-muted">JD Polytechnic & Engineering Nagpur.</div>
                  <div className="resume-degree-time text-muted">Duration: 2019-2023</div>
                </li>
              </ul>
            </section>{/*//education-section*/}
            {/* <section className="education-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Certificates</h3>
              <ul className="list-unstyled resume-awards-list">
                <li className="mb-3">
                  <div className="font-weight-bold">EPS-Effective Public Speaking</div>
                  <div className="text-muted">JCI Nagpur Fortune (2024)</div>
                </li>
                              </ul>
            </section>//education-section */}
            <section className="skills-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
              <ul className="list-unstyled resume-lang-list">
                <li>English <span className="text-muted">(Professional)</span></li>
                <li>Hindi <span className="text-muted">(Professional)</span></li>
                <li>Marathi <span className="text-muted">(Native)</span></li>
              </ul>
            </section>{/*//certificates-section*/}
            <section className="skills-section py-3">
              <h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
              <ul className="list-unstyled resume-interests-list mb-0">
                <li className="mb-2">Sketching</li>
                <li className="mb-2">Travelling</li>
                <li className="mb-2">Photography</li>
               
              </ul>
            </section>{/*//certificates-section*/}
          </aside>{/*//resume-aside*/}
        </div>{/*//row*/}
      </div>{/*//resume-body*/}
      <hr />
      <div className="resume-footer text-center">
        <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
          <li className="list-inline-item mb-lg-0 me-3"><a className="resume-link" href="#https://github.com/Aditya04tech"><i className="fa-brands fa-github-square fa-2x me-2" data-fa-transform="down-4" /><span className="d-none d-lg-inline-block text-muted">www.github.com/Aditya04tech</span></a></li>
          <li className="list-inline-item mb-lg-0 me-3"><a className="resume-link" href="www.linkedin.com/in/aditya-sukhdeve-1876a3356"><i className="fa-brands fa-linkedin fa-2x me-2" data-fa-transform="down-4" /><span className="d-none d-lg-inline-block text-muted">www.linkedin.com/in/aditya-sukhdeve-1876a3356</span></a></li>
          <li className="list-inline-item mb-lg-0 me-lg-3">
  <a className="resume-link" href="https://www.instagram.com/jc_aditya.r.sukhdeve/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-square-instagram fa-2x me-2" data-fa-transform="down-4" />
    <span className="d-none d-lg-inline-block text-muted">https://www.instagram.com/jc_aditya.r.sukhdeve/</span>
  </a>
</li>
        </ul>
      </div>{/*//resume-footer*/}
    </article>
  </div>{/*//container*/}
  
</div>
{/* <Footerone/> */}

    </>
  )
}

export default Resume
