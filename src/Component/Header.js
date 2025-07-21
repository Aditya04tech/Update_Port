import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navRef = useRef();

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  // Function to close navbar
  const closeNavbar = () => {
    const navigation = document.getElementById('navigation');
    if (navigation && navigation.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navigation, { toggle: true });
      bsCollapse.hide();
    }
  };

  // Close navbar if click happens outside the navbar in mobile view
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navigation = document.getElementById('navigation');
      const isNavbarOpen = navigation && navigation.classList.contains('show');
      const isMobile = window.innerWidth < 992;

      if (
        isMobile &&
        isNavbarOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        closeNavbar();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a className="no-text-decoration" href="/">Aditya.R.Sukhdeve</a>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark" ref={navRef}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <img className="profile-image mb-3 rounded-circle mx-auto" src={`${process.env.PUBLIC_URL}/images/My Image.png`} alt="Description" />			
              <div className="bio mb-3">
                Hi, my name is Aditya.R.Sukhdeve and I'm a System Engineer. Welcome to my personal website!
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item"><a href="https://www.instagram.com/jc_aditya.r.sukhdeve/"><i className="fa-brands fa-instagram fa-fw" /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/aditya-sukhdeve-472493205/"><i className="fa-brands fa-linkedin-in fa-fw" /></a></li>
                <li className="list-inline-item"><a href="https://github.com/Aditya04tech"><i className="fa-brands fa-github-alt fa-fw" /></a></li>
                <li className="list-inline-item"><a href="https://www.facebook.com/Aditya.R.Sukhdeve"><i className="fa-brands fa-facebook fa-fw" /></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com/@AdityaSukhdeve11"><i className="fa-brands fa-youtube fa-fw" /></a></li>
              </ul>
              <hr />
            </div>

            <ul className="navbar-nav flex-column text-start">
              <li className="nav-item">
                <Link className={isActive("/")} to="/" onClick={closeNavbar}><i className="fas fa-user fa-fw me-2" />About Me</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/portfolio")} to="/portfolio" onClick={closeNavbar}><i className="fas fa-laptop-code fa-fw me-2" />Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/resume")} to="/resume" onClick={closeNavbar}><i className="fas fa-file-alt fa-fw me-2" />Resume</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/blog")} to="/blog" onClick={closeNavbar}><i className="fas fa-blog fa-fw me-2" />Blog</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive("/contact")} to="/contact" onClick={closeNavbar}><i className="fas fa-envelope-open-text fa-fw me-2" />Contact</Link>
              </li>
            </ul>

            <div className="my-2 mt-5">
              <Link className="btn btn-primary" to="/contact" onClick={closeNavbar}><i className="fas fa-paper-plane me-2" />Hire Me</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
