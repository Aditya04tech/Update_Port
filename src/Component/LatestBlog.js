import React from 'react'
import { Link } from 'react-router-dom'

const LatestBlog = () => {
  return (
    <>
     {/* Blog Start */}
     <section className="latest-blog-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              <img className="card-img-top" src="images/Project-Thumbnail/B1.png" alt="Blog1" />
              <div className="card-body">
                <h5 className="card-title"><Link className="theme-link" to="/blog1">Why Software Development is Important: A Beginner's Guide</Link></h5>
                <p className="card-text">In our increasingly digital world, software development is essential to our everyday lives. From mobile applications to web platforms and enterprise systems...</p>
                <p className="mb-0"><Link className="text-link" to="/blog1">Read more →</Link></p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published By: Aditya.R.Sukhdeve</small>
              </div>
            </div>{/*//card*/}
          </div>{/*//col*/}
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              <img className="card-img-top" src="images/Project-Thumbnail/B2.png"  alt="Blog2" />
              <div className="card-body">
                <h5 className="card-title"><Link className="theme-link" to="/blog2">React vs. Angular.js: Which Framework to Choose for Your Next Project?</Link></h5>
                <p className="card-text">When embarking on a new web development project, one of the initial decisions you will be making is deciding on the most appropriate... </p>
                <p className="mb-0"><Link className="text-link" to="/blog2">Read more →</Link></p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published By: Aditya.R.Sukdeve</small>
              </div>
            </div>{/*//card*/}
          </div>{/*//col*/}
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              <img className="card-img-top"src="/images/Project-Thumbnail/B3.png" alt="Blog3" />
              <div className="card-body">
                <h5 className="card-title"><Link className="theme-link" to="/blog3">Accessibility in Web Design: Ensuring Your Application is Usable for All</Link></h5>
                <p className="card-text">Accessibility in Web Design: Ensuring Your Application is Usable for All Web accessibility means designing ...</p>
                <p className="mb-0"><Link className="text-link" to="/blog3">Read more →</Link></p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published By: Aditya.R.Sukhdeve</small>
              </div>
            </div>{/*//card*/}
          </div>{/*//col*/}
        </div>{/*//row*/}
        <div className="text-center py-3"><Link to="/myblog" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right me-2" />View Blog</Link></div>
      </div>{/*//container*/}
    </section>
    
     {/* Blog Stop */}
    </>
  )
}

export default LatestBlog