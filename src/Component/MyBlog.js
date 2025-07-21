import React from 'react'
import Hbtn from './Hbtn'
import { Link } from 'react-router-dom'
import BackBtn from './BackBtn'

export default function MyBlog() {
  return (
    <>
<BackBtn/>
    <Hbtn/>
    
    <div className="main-wrapper">
  <section className="cta-section theme-bg-light py-5">
    <div className="container text-center">
      <h2 className="heading">A Blog About Software Development And Life</h2>
      {/* <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div> */}
      <div className="single-form-max-width pt-3 mx-auto">
       
      </div>{/*//single-form-max-width*/}
    </div>{/*//container*/}
  </section>
  <section className="blog-list px-3 py-5 p-md-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <Link to="/blog4" className="no-underline">
          <div className="card blog-post-card">
            <img className="card-img-top" src="images/Project-Thumbnail/other-thumb/th-1.png" alt="Th1" />
            <div className="card-body">
              <h5 className="card-title"><a className="theme-link" to="/blog4">Top 3 JavaScript Frameworks</a></h5>
              <p className="card-text">JavaScript is the backbone of modern web development. Whether you're building dynamic websites, interactive applications, or high-performance platforms, choosing the right JavaScript framework can make a world of difference. </p>
              <p className="mb-0"><Link className="text-link" to="/blog4">Read more →</Link></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published 2 days ago</small>
            </div>
          </div>{/*//card*/}
          </Link>
        </div>{/*//col*/}
        <div className="col-md-4 mb-3">

          <Link to="/blog5" className="no-underline">
          <div className="card blog-post-card">
            <img className="card-img-top"  src="images/Project-Thumbnail/other-thumb/th-2.png" alt="Th2" />
            <div className="card-body">
              <h5 className="card-title"><Link className="theme-link" to="/blog5">About Remote Working</Link></h5>
              <p className="card-text">In the fast-evolving digital world, remote working has transformed from a luxury into a necessity. Whether you're a developer, designer, writer, or entrepreneur, working remotely opens doors to limitless opportunities. It's more than just working from home</p>
              <p className="mb-0"><Link className="text-link" to="/blog5">Read more →</Link></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published a week ago</small>
            </div>
          </div>{/*//card*/}
          </Link>

        </div>{/*//col*/}


        <div className="col-md-4 mb-3">
          <Link to="/blog6" className="no-underline">
          <div className="card blog-post-card">
            <img className="card-img-top"  src="images/Project-Thumbnail/other-thumb/th-3.png" alt="Th3" />
            <div className="card-body">
              <h5 className="card-title"><Link className="theme-link" to="/blog6">A Guide to Becoming a Full-Stack Developer</Link></h5>
              <p className="card-text"> Full-Stack Development is one of the most in-demand and rewarding career paths. But what exactly does it mean to be a full-stack developer? And how can you master the skills needed to build complete web applications from start to finish</p>
              <p className="mb-0"><Link className="text-link" to="/blog6">Read more →</Link></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published 3 weeks ago</small>
            </div>
          </div>{/*//card*/}
          </Link>
        </div>{/*//col*/}


        <div className="col-md-4 mb-3">
          <Link to="/blog7" className="no-underline">
          <div className="card blog-post-card">
            <img className="card-img-top"  src="images/Project-Thumbnail/other-thumb/th-4.png" alt="Th4" />
            <div className="card-body">
              <h5 className="card-title"><a className="theme-link" href="blog-post.html">High Performance JavaScript</a></h5>
              <p className="card-text">JavaScript is the backbone of modern web applications, making pages interactive and dynamic. However, as applications grow, performance bottlenecks can slow them down, leading to poor user experiences.</p>
              <p className="mb-0"><Link className="text-link" to="/blog7">Read more →</Link></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published 1 month ago</small>
            </div>
          </div>{/*//card*/}
          </Link>
        </div>{/*//col*/}

        <div className="col-md-4 mb-3">
          <Link to="/blog8" className="no-underline">
          <div className="card blog-post-card">
            <img className="card-img-top"  src="images/Project-Thumbnail/other-thumb/th-5.png" alt="Th5" />
            <div className="card-body">
              <h5 className="card-title"><a className="theme-link" href="blog-post.html">Learn React in 24 Hours</a></h5>
              <p className="card-text">React is one of the most popular JavaScript libraries for building modern web applications. If you want to master the basics in just 24 hours, this guide is for you! Let's break it down into easy, digestible steps...</p>
              <p className="mb-0"><Link className="text-link" to="/blog8">Read more →</Link></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published 1 month ago</small>
            </div>
          </div>{/*//card*/}
          </Link>
        </div>{/*//col*/}

        <div className="col-md-4 mb-3">
        <Link to="/blog9" className="no-underline">
          <div className="card blog-post-card">
            <img className="card-img-top"  src="images/Project-Thumbnail/other-thumb/th-6.png" alt="Th6"/>
            <div className="card-body">
              <h5 className="card-title"><a className="theme-link" href="blog-post.html">How to Build Desktop Apps with HTML, CSS and JavaScript</a></h5>
              <p className="card-text">Did you know you can build powerful desktop applications using the same web technologies—HTML, CSS, and JavaScript?...</p>
              <p className="mb-0"><Link className="text-link" to="/Blog9">Read more →</Link></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Published 2 months ago</small>
            </div>
          </div>{/*//card*/}
          </Link>
        </div>{/*//col*/}
      </div>{/*//row*/}
      <nav className="blog-nav nav nav-justified my-5">
        <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left" /></a>
        <a className="nav-link-next nav-item nav-link rounded" href="#">Stay Tuned-Blog Launching Soon!<i className="arrow-next fas fa-long-arrow-alt-right" /></a>
      </nav>
    </div>
  </section>

</div>{/*//main-wrapper*/}

    </>
  )
}
