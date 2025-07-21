import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Portfolio() {

  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => setActiveFilter(filter);

  const projects = [
    { id: 1, category: ["webapp", "frontend"], src:"https://www.dayahospitals.com/", src2:"/project4", client: "DAYA HOSPITAL",date:"June 2024-Jul 2024", img: "/images/Project-Thumbnail/hospital.png" ,detals:"Daya Hospital-Compassionate care, advanced treatments, and expert healthcare services for a healthier, happier life. Your wellness, our priority." },
    { id: 2, category: ["webapp", "frontend"],src:"https://durgeshfurniture.in/",  src2:"/project5", client: "DURGESH FURNITURE & DESIGN", img: "/images/Project-Thumbnail/durgeshfurniture.png", date:"may2024-june 2024", detals:"Durgesh Furniture & Design-Crafting elegant, custom-made furniture with quality, style, and durability. Transforming spaces with creativity and expert craftsmanship."},
    { id: 3, category: ["webapp"],src:"https://www.shivshaktitravelsnagpur.com/", src2:"/project6", client: "SHIV-SHAKTI TRAVELS", img: "/images/Project-Thumbnail//travel.png",date:"June 2024",detals:"Shiv Shakti Travels-Reliable and comfortable travel services for all your journeys. Safe, affordable, and hassle-free trips, anytime, anywhere." },
    { id: 4, category: ["webapp", "frontend"],src:"https://www.beaconacademynagpur.in/",src2:"/project7", client: "BEACON ACADEMY", img: "/images/Project-Thumbnail/bcon.png",date:"May 2024", detals:"BEACON ACADEMY-Empowering students with quality education, expert guidance, and innovative learning for academic and career success." },
    { id: 5, category: ["webapp", "frontend"],src:"https://omsaibattery.in/",src2:"/project8", client: "OM SAI BATTERY", img: "/images/Project-Thumbnail/battery.png",date:"April 2024",detals:"OM SAI BATTERY-Trusted provider of high-quality batteries for vehicles, inverters, and industrial needs. Reliable performance, long-lasting power." },
    { id: 6, category: ["webapp", "frontend"],src:"https://powarmatrimony.com/", src2:"/project9", client: "POWAR MATRIMONY", img: "/images/Project-Thumbnail/pawarmatrimony.png",date:"April 2024-May 2024",detals:"POWAR MATRIMONY-Connecting hearts with trusted matchmaking services. Find your perfect life partner with us!" },
    { id: 7, category: ["webapp", "frontend"],src:"https://ashishmobile.in/", src2:"/project10", client: "ASHISH MOBILE SHOP", img: "/images/Project-Thumbnail/ashish.png", date:"April 2024",detals:"ASHISH MOBILE SHOP-Your one-stop destination for the latest mobiles, accessories, and repairs. Best deals, quality service!" },
    { id: 8, category: ["webapp", "frontend"],src:"https://madhupremcaterers.in/", src2:"/project11", client: "MADHUPREAM CATERES", img: "/images/Project-Thumbnail/madhupream.png",date:"April 2024",detals:"Madhupream Caterers-Delicious cuisine, impeccable service, and memorable dining experiences for all your events and celebrations!" },
    { id: 9, category: ["webapp", "frontend"],src:"https://fortunemallnagpur.in/", src2:"/project12", client: "FORTUNE MALL", img: "/images/Project-Thumbnail/fortunenagpur.png",date:"March 2024",detals:"Fortune Mall-Your ultimate shopping, dining, and entertainment destination. Experience luxury, variety, and fun all in one place!" },
    { id: 10, category: ["webapp", "frontend"],src:"https://cheapbookdepot.com/",src2:"/project13", client: "CHEAP-BOOK DEPO", img: "/images/Project-Thumbnail/cheapbookdepo.png",date:"Feb 2024-March 2024 ",detals:"Cheap Book Depot-Your go-to store for affordable books, academic materials, novels, and stationery at the best prices!" },
    { id: 11, category: ["webapp", "frontend"],src:"https://jayshivassociates.com/",src2:"/project14", client: "SHIV-SHAKTI ASSOCIATES", img: "/images/Project-Thumbnail/shivsaktiassociate.png",date:"MARCH 2024",detals:"Shiv Shakti Associates-Trusted experts in real estate, finance, and business solutions. Reliable services for your growth and success!" },
   
    
  ];


  

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <div className="main-wrapper">
      <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center single-col-max-width">
			    <h2 class="heading">Portfolio</h2>
			    <div class="intro">
			    <p>Welcome to my online portfolio </p>
			    
			    </div>
          <Link className="btn btn-primary me-2 mb-3" to="/contact"><i className="fas fa-arrow-alt-circle-right me-2" /><span className="d-none d-md-inline">Hire</span> Me</Link>
			   
			    
			    
		    </div>
	    </section>

      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
        <ul className="filters mb-5 mx-auto ps-0 text-center d-flex justify-content-center gap-3">
  {["*", "webapp", "frontend", "backend"].map((filter) => (
    <li
      key={filter}
      className={`type mb-3 mb-lg-0 ${activeFilter === filter ? "active" : ""}`}
      onClick={() => handleFilterClick(filter)}
      style={{ cursor: "pointer", listStyle: "none", padding: "5px", borderRadius: "5px" }}
    >
      {filter === "*" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
    </li>
  ))}
</ul>


          <div className="row">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-md-4 mb-5" >
                <div className="card blog-post-card position-relative"
                onClick={() => navigate(project.src2)} // 👈 Card click navigate
                style={{ cursor: "pointer" }}               
                
                >
                  <img className="card-img-top" src={project.img} alt={project.client} />
                  <div className="card-body">
                    <h5 className="card-title">
                      <p className='text-primary'>{project.client}</p>
                    </h5>
                    <p className="text-sm text-muted">{project.date}</p>
                    <p className="card-text">
                      {project.detals}
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Client: {project.client}</small>
                  </div>
                  <div className="link-mask">
                    <a className="link-mask-link" href="project.html" />
                    <div className="link-mask-text">
                    <button 
                className="btn btn-primary left-btn" 
                onClick={() => navigate(project.src2)}
              >
                <i className="fas fa-eye me-2"  />View Case Study
              </button>
                      <button 
    className="btn btn-danger right-btn" 
    onClick={() => window.open(project.src, "_blank")}
  >
    <i className="fas fa-eye me-2" />View Projects
  </button>
                    </div>
                    </div>{/*//link-mask*/}
                </div>{/*//card*/}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}