import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OnePort = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (path) => {
    if (isMobile) {
      navigate(path);
    }
  };

  return (
    <>
      <section className="featured-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
          <div className="row">

            {/* Project 1 */}
            <div className="col-md-4 mb-5">
              <div
                className="card blog-post-card position-relative"
                onClick={() => handleCardClick("/project1")}
              >
                <img className="card-img-top" src="/images/Project-Thumbnail/shindes.png" alt="shinde" />
                <div className="card-body">
                  <h5 className="card-title text-primary">SHINDE'S EDUCATION GALLERY</h5>
                  <p className="text-sm text-muted">JUL 2024</p>
                  <p className="card-text">
                    Shinde's Education Gallery - Premier coaching for school, JEE, NEET, CET...
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Client : SHINDES EDUCATION GALLERY</small>
                </div>
                <div className="link-mask">
                  <div className="link-mask-text">
                    <Link className="btn btn-primary left-btn" to="/project1">
                      <i className="fas fa-eye me-2" />View Case Study
                    </Link>
                    <a className="btn btn-danger right-btn" href="https://shindeseducationgallery.com/" target="_blank">
                      <i className="fas fa-globe me-2" />View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4 mb-5">
              <div
                className="card blog-post-card position-relative"
                onClick={() => handleCardClick("/project2")}
              >
                <img className="card-img-top" src="/images/Project-Thumbnail/cosdvl.png" alt="cosdvl" />
                <div className="card-body">
                  <h5 className="card-title text-primary">COSDVL PHARMA</h5>
                  <p className="text-sm text-muted">JUN-JUL 2024</p>
                  <p className="card-text">
                    COSDVL Pharma - Committed to innovation, quality, and affordable healthcare solutions...
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Client : COSDVL PHARMA</small>
                </div>
                <div className="link-mask">
                  <div className="link-mask-text">
                    <Link className="btn btn-primary left-btn" to="/project2">
                      <i className="fas fa-eye me-2" />View Case Study
                    </Link>
                    <a className="btn btn-danger right-btn" href="https://cosdvlpharma.com/" target="_blank">
                      <i className="fas fa-globe me-2" />View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4 mb-5">
              <div
                className="card blog-post-card position-relative"
                onClick={() => handleCardClick("/project3")}
              >
                <img className="card-img-top" src="/images/Project-Thumbnail/sscomputer.png" alt="sscomputer" />
                <div className="card-body">
                  <h5 className="card-title text-primary">SS.COMPUTER</h5>
                  <p className="text-sm text-muted">JUL 2024</p>
                  <p className="card-text">
                    SS.COMPUTER - Your trusted partner for computer sales, repairs, and IT services...
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Client : SS.COMPUTER</small>
                </div>
                <div className="link-mask">
                  <div className="link-mask-text">
                    <Link className="btn btn-primary left-btn" to="/project3">
                      <i className="fas fa-eye me-2" />View Case Study
                    </Link>
                    <a className="btn btn-danger right-btn" href="https://sscomputernagpur.in/" target="_blank">
                      <i className="fas fa-globe me-2" />View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center py-3">
            <Link to="/portfolio" className="btn btn-primary">
              <i className="fas fa-arrow-alt-circle-right me-2" />View More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnePort;
