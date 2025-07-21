import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message } = formData;

    const whatsappNumber = '918308029106'; // <-- yahan apna WhatsApp number daal (without +)
    const encodedMessage = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>
              Interested in hiring me or want to say hi? Fill the form or email me at{' '}
              <a className="text-link" href="mailto:aditya.systemengineer@gmail.com">
                aditya.systemengineer@gmail.com
              </a>
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3">
                <a
                  className="social-icon linkedin"
                  href="https://www.linkedin.com/in/aditya-sukhdeve-472493205/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in fa-fw fa-lg" />
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="github" href="https://github.com/Aditya04tech">
                  <i className="fa-brands fa-github-alt fa-fw fa-lg" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="instagram" href="https://www.instagram.com/jc_aditya.r.sukhdeve/">
                  <i className="fa-brands fa-instagram fa-fw fa-lg" />
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="facebook" href="https://www.facebook.com/Aditya.R.Sukhdeve">
                  <i className="fa-brands fa-facebook-f fa-fw fa-lg" />
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="youtube" href="https://www.youtube.com/@AdityaSukhdeve11">
                  <i className="fa-brands fa-youtube fa-fw fa-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" onSubmit={handleSubmit}>
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  minLength={2}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                   type="tel"
                   className="form-control"
                   name="phone"
                   placeholder="Phone No"
                   onChange={handleChange}
                   value={formData.phone}
                   maxLength={10}
                   pattern="\d{10}"
                   title="Please enter exactly 10 digits"
                   required
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Enter your message"
                  rows={10}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-12">
                <button type="submit" className="btn btn-block btn-primary py-2">Send Now</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
