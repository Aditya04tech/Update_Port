import { Link } from "react-router-dom";

const Projecthome = () => {
  return (
    <section className="featured-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
        <div className="row">
          {[  
            { img: "seg.png", title: "SHINDE'S EDUCATION GALLERY", desc: "SHINDE'S EDUCATION GALLERY offers expert teaching, personalized learning, and academic excellence for student success.", client: "SHINDE'S EDUCATION GALLERY", link: "/project1" },
            { img: "Amob.png", title: "ASHISH MOBILE SHOP", desc: "Ashish Mobile Shop – Trusted destination for mobile sales, accessories, and fast, reliable repairs!", client: "Ashish Mobile Shop", link: "/project2" },
            { img: "st.png", title: "BEACON ACADEMY", desc: "Beacon Academy – Empowering students with quality education, expert guidance, and a bright future ahead!", client: "Beacon Academy", link: "/project3" },
            { img: "cdvl.png", title: "COSDVL", desc: "COSDVL – Innovating healthcare with high-quality pharmaceutical solutions for a healthier and better tomorrow!", client: "Cosdvl", link: "/project4" },
          ].map((project, index) => (
            <div className="col-md-6 mb-5" key={index}>
              <div className="card blog-post-card project-card">
                <div className="row no-gutters">
                  <div className="col-12 col-xl-5 card-img-holder">
                    <img src={`${process.env.PUBLIC_URL}/images/project/${project.img}`} className="card-img-top" alt={project.title} />
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="card-body">
                      <h5 className="card-title"><Link className="theme-link" to={project.link}>{project.title}</Link></h5>
                      <p className="card-text">{project.desc}</p>
                      <p className="card-text"><small className="text-muted">Client: {project.client}</small></p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <Link className="btn btn-secondary" to={project.link}>
                    <i className="fas fa-eye me-2" />View Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-3">
          <Link to="/portfolio" className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right me-2" />View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projecthome;
