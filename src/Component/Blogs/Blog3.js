import React from 'react'
import { Link } from 'react-router-dom'
import Hbtn from '../Hbtn'
import Backbtn from '../BackBtn'
const Blog3 =()=> {
  const code = `<img src="cat.jpg" alt="A fluffy cat sitting on a chair">`;
  const code2=`<button>Click Me</button>
<a href="#home" tabindex="0">Home</a>`;
const code3=`body {
color: #333333; /* Dark grey text */
background-color: #ffffff; /* White background */
}`;
const code4=`<video controls>
<source src="video.mp4" type="video/mp4">
<track src="captions_en.vtt" kind="subtitles" srclang="en" label="English">
</video>`;
  return (
    <>
    <Hbtn/>
    <Backbtn/>
    <div className="main-wrapper">
  <article className="blog-post px-3 py-5 p-md-5">
    <div className="container single-col-max-width">
      <header className="blog-post-header">
        <h2 className="title mb-2">Accessibility in Web Design: Ensuring Your Application is Usable for All</h2>
        <div className="meta mb-3"><span className="date">Published By: Aditya.R.Sukhdeve</span></div>
      </header>
      <div className="blog-post-body">
        <figure className="blog-banner">
          <Link to="/blog"><img className="img-fluid" src="/images/blog/b3-1.png" alt="blog3-1" /></Link>
          {/* <figcaption className="mt-2 text-center image-caption">Image Credit: <a className="theme-link" href="https://made4dev.com/?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption> */}
        </figure>
        <p>Accessibility in Web Design: Ensuring Your Application is Usable for All
        Web accessibility means designing your website so that everyone, including individuals with disabilities, can use it effectively. This includes making sure that people with visual, auditory, motor, or cognitive challenges can easily navigate and interact with your content.</p>
        {/* <h3 className="mt-5 mb-3">The Role of Software Development</h3>
        <p>Software development encompasses the design, creation, deployment, and maintenance of software applications. It involves coding, debugging, and problem-solving to create solutions that cater to various sectors such as healthcare, finance, education, and entertainment</p>
         */}
        <h3 className="mt-5 mb-3">Why is Accessibility Important?</h3>
        <ul className="mb-2">
          <li className="mb-2"><p>Legal Compliance: Many countries have laws that mandate website accessibility.</p></li>
        </ul>
        <ul className="mb-2">
          <li className="mb-2"><p>Wider Audience: Accessibility opens your site to users with disabilities.
          Improved User Experience: Good accessibility contributes to a better overall experience for all users.</p></li>
        </ul>
        <ul className="mb-2">
          <li className="mb-2"><p>Better SEO: Accessible websites are typically easier for search engines to crawl and index.</p></li>
        </ul>

        <h3 className="mt-5 mb-3">Quick Tips for Accessible Web Design</h3>
        <ol class="mb-2">
					  <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
          <ul class="mb-3">
					  <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
            <pre>
					    <code>
              {code}
					    </code>
				    </pre>
					</ul>

					  <li class="mb-2">Make Your Website Keyboard Accessible</li>
            <ul class="mb-3">
					  <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
            <pre>
					    <code>
              {code2}
					    </code>
				    </pre>
					</ul>
            

					  <li class="mb-2">Ensure Good Contrast Between Text and Background</li>
            <ul class="mb-3">
					  <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
            <pre>
					    <code>
              {code3}
					    </code>
				    </pre>
					</ul>
            
            <li class="mb-2">Add Captions for Videos</li>
            <ul class="mb-3">
					  <li class="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
            <pre>
					    <code>
              {code4}
					    </code>
				    </pre>
					</ul>
					</ol>

        <h3 className="mt-5 mb-3">Testing for Accessibility</h3>
        <ul className="mb-5">
          <li className="mb-2"><p>WAVE: A web accessibility evaluation tool.</p></li>
          <li className="mb-2"><p>Lighthouse: A tool in Chrome DevTools for auditing accessibility.</p></li>
          <li className="mb-2"><p>axe: A browser extension for accessibility testing.</p></li>
        </ul>

        <h3 className="mt-5 mb-3">4. High Demand and Career Opportunities </h3>
        <ul className="mb-5">
          <li className="mb-2"><p>As digital transformation accelerates, the demand for software developers continues to rise. Companies worldwide are on the lookout for talented developers, offering attractive job opportunities. </p></li>
        </ul>

        <figure className="blog-banner">
          <Link to="/blog"><img className="img-fluid" src="/images/blog/b3-2.png" alt="blog3-2" /></Link>
          {/* <figcaption className="mt-2 text-center image-caption">Image Credit: <a className="theme-link" href="https://made4dev.com/?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption> */}
        </figure>
        
        <br/>
        
        {/* <h3 className="my-3"># Quote Example:</h3>
        <blockquote className="blockquote m-lg-5 py-3   ps-4 px-lg-5">
          <p className="mb-2">Software development goes beyond merely writing code; it’s about shaping the future. Every significant innovation begins with a single line—so why not take that first step today?</p>
          
        </blockquote> */}
        
        {/* <h3 className="mt-5 mb-3">Video Example</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
        <div className="ratio ratio-16x9">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/1nxSE0R27Gg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />					
        </div> */}
      </div>
      {/* <nav className="blog-nav nav nav-justified my-5">
        <a className="nav-link-prev nav-item nav-link rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left" /></a>
        <a className="nav-link-next nav-item nav-link rounded-right" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right" /></a>
      </nav> */}
      
    </div>{/*//container*/}
  </article>
  {/* <section className="promo-section theme-bg-light py-5 text-center">
    <div className="container single-col-max-width">
      <h2 className="title">Promo Section Heading</h2>
      <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
      <figure className="promo-figure">
        <a href="https://made4dev.com/" target="_blank"><img className="img-fluid" src="assets/images/promo-banner.jpg" alt="image" /></a>
      </figure>
    </div>
  </section> */}
  {/*//promo-section*/}
  {/* <footer className="footer text-center py-4">
    <small className="copyright">Template Copyright © <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
  </footer> */}
</div>{/*//main-wrapper*/}

    </>
  )
}
export default Blog3
