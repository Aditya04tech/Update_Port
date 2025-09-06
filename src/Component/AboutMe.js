import React from 'react'
import { Link } from 'react-router-dom'
import Cs1 from './Custom/Cs1'
// import Custom2 from './Custom2/Custom2'
import OnePort from './OnePort'
import LatestBlog from './LatestBlog'
export default function AboutMe() {


  // const imageUrl = "https://github.com/Aditya04tech/Portfolio_Images/blob/main/Logo.png?raw=true";

  // const Blog1 ="https://raw.githubusercontent.com/Aditya04tech/Portfolio_Images/56ff6d0c53b2d4d62a7e2196876bb34ce21d5591/B1.png";
  // const Blog2 ="https://raw.githubusercontent.com/Aditya04tech/Portfolio_Images/56ff6d0c53b2d4d62a7e2196876bb34ce21d5591/B2.png";
  // const Blog3 ="https://raw.githubusercontent.com/Aditya04tech/Portfolio_Images/56ff6d0c53b2d4d62a7e2196876bb34ce21d5591/B3.png";

  // const projectimg1 ="https://github.com/Aditya04tech/Portfolio_Images/blob/main/shindes.png?raw=true";
  // const projectimg2 ="https://github.com/Aditya04tech/Portfolio_Images/blob/main/cosdvl.png?raw=true";
  // const projectimg3 ="https://github.com/Aditya04tech/Portfolio_Images/blob/main/sscomputer.png?raw=true";


  return (
    <>  
    <div>
  <div className="main-wrapper">		
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
      <div className="container">
        <div className="profile-teaser row">
          <div className="col">
            <img src="/images/Project-Thumbnail/Logo.png" alt="seg1" class="logoimg"/>
            {/* <h1 className="name font-weight-bold mb-1">Aditya.R.Sukhdeve</h1> */}
            <div className="tagline mb-3">Executive-IT Support & Admin & MERN Stack Developer </div>
            <div className="bio mb-4">Dynamic and dedicated System Engineer with 2+ years of experience in hardware troubleshooting,
network configuration, and cloud systems (AWS). Skilled in managing desktops, servers, and resolving
critical IT issues with minimal downtime. Strong knowledge of Windows/Linux OS,Active Directory
LAN lab setups, and IT asset management.
            </div>{/*//bio*/}
            <div className="mb-4">
              <Link className="btn btn-primary me-2 mb-3" to="/portfolio"><i className="fas fa-arrow-alt-circle-right me-2" /><span className="d-none d-md-inline">View</span> Portfolio</Link>
              <Link className="btn btn-secondary mb-3" to="/resume"><i className="fas fa-file-alt me-2" /><span className="d-none d-md-inline">View</span> Resume</Link>
            </div>
          </div>{/*//col*/}
          <div className="col-md-5 col-lg-5">
            <img className="profile-image img-fluid mb-3 mb-lg-0 me-md-0 border border-primary border-5" src={`${process.env.PUBLIC_URL}/images/myimage2.png`} alt="myimg2"  />
          </div>
        </div>
      </div>
    </section>{/*//about-me-section*/}
    <section className="overview-section p-3 p-lg-5">
      <div className="container">
      <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">System Engineer with 2+ years of experience in hardware troubleshooting, network configuration, and AWS cloud systems. Skilled in Windows/Linux, Active Directory, LAN/WAN setups, and IT asset support. Also proficient in MERN stack development, delivering efficient and scalable software solutions.</div>
        <div className="row">
        <h2 className="section-title font-weight-bold mb-3">My Skills</h2>
         <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-solid fa-desktop react-icon" style={{ color: '#473810' }}/>-<i className="fa-solid fa-network-wired react-icon"/></div>
              <h3 className="item-title">Computer Hardware &amp; Networking</h3>
              <div className="item-desc">Demonstrating proficiency in computer hardware, networking solutions, custom builds, troubleshooting, and ensuring smooth performance.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i class="fab fa-ubuntu react-icon"  style={{ color: '#FF8040' }} /> <i class="fab fa-redhat react-icon"  style={{ color: '#FF0000' }} /> <i class="fab fa-centos react-icon"  style={{ color: '#4E5180' }} /></div>
              <h3 className="item-title">Ubuntu &amp; Redhat &amp; Centos Linux </h3>
              <div className="item-desc">I focus on Ubuntu, Redhat, and CentOS Linux to ensure effective system management, deployment, and optimization.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-brands fa-aws react-icon" style={{ color: '#FFA62F' }}/> <i className="fa-brands fa-github react-icon" style={{ color: '#0C090A' }}/></div>
              <h3 className="item-title">AWS &amp; Git-Hub</h3>
              <div className="item-desc">I utilize AWS for cloud hosting and GitHub for version control, which helps me maintain scalable, efficient, and collaborative development.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-brands fa-react me-2 react-icon " /></div>
              <h3 className="item-title">React.JS</h3>
              <div className="item-desc">I have 1.5 years of experience with React.js, where I've concentrated on custom development, UI/UX design, API integration, and optimization. </div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-solid fa-database me-2 react-icon" style={{ color: 'orange' }} /> </div>
              <h3 className="item-title">MongoDB &amp;My-Sql </h3>
              <div className="item-desc">I have experience using MongoDB and MySQL for efficient data management, optimization, scalability, and seamless integration.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-brands fa-node-js react-icon" style={{ color: 'Green' }} /></div>
              <h3 className="item-title">Node.js</h3>
              <div className="item-desc">I have experience with Node.js, where I've built scalable applications, managed APIs, developed server-side logic, and optimized performance..</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fab fa-js-square me-2 react-icon" style={{ color: '#FFA500' }} /> <i className="fas fa-code me-2 react-icon" style={{ color: '#F2BB66' }} /></div>
              <h3 className="item-title">Javascript &amp; Jquery</h3>
              <div className="item-desc">I focus on using JavaScript and jQuery to create dynamic and interactive websites, improving both user experience and functionality.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-brands fa-html5 me-2 react-icon" /> <i className="fa-brands fa-css3-alt react-icon" /> <i className="fa-brands fa-bootstrap me-2 react-icon" style={{ color: '#822EFF' }} /></div>
              <h3 className="item-title">HTML &amp; CSS &amp; Bootstrap </h3>
              <div className="item-desc">I focus on using HTML, CSS, and Bootstrap to develop responsive, user-friendly, and visually attractive web designs.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          
          

          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"> <i className="fa-brands fa-wordpress react-icon "  style={{ color: '#1589FF' }} ></i></div>
              <h3 className="item-title">Wordpress</h3>
              <div className="item-desc">I design beautiful WordPress portfolios that highlight your work through custom designs, responsive layouts, and smooth functionality.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon"><i className="fa-solid fa-video react-icon"  style={{ color: '#306EFF' }} /> <i className="fa-solid fa-paintbrush react-icon"  style={{ color: '#306EFF' }} ></i></div>
              <h3 className="item-title">Video-Editing &amp;Graphic-Designing </h3>
              <div className="item-desc">My portfolio highlights my skills in video editing and graphic design, providing creative, high-quality, and engaging content solutions.</div>
            </div>{/*//item-inner*/}
          </div>{/*//item*/}
        </div>{/*//row*/}
        <div className="text-center py-3"><Link to="/services" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right me-2" />Services &amp; Pricing
          </Link></div>
      </div>{/*//container*/}
    </section>
    <div className="container"><hr /></div>
    
      {/* Hover Effect */}
           <Cs1/>  
      {/* Hover Effect */}



    <div className="container"><hr /></div>
   

   {/* Home Page Portfolio */}
   <OnePort/>
   {/* Home Page Portfolio  */}


        {/* Our Team */}
        {/* <Custom2/> */}
      {/* Our Team */}

   
     
   
    <div className="container"><hr /></div>

      {/* Latest_blog-section */}
    
    <LatestBlog/>
    {/*//latest-blog-section*/}

    {/* Testimonial Start */}
    {/* <Testominal/> */}
    {/* testimonial Stop*/}
   
  </div>{/*//main-wrapper*/}

  
  
</div>

{/* <Footerone/> */}
    </>
  )
}
