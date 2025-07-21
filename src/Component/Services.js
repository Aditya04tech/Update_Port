import React from 'react'

export default function Services() {
  return (
    <>
    <div className="main-wrapper">
  <section className="cta-section theme-bg-light py-5">
    <div className="container text-center single-col-max-width">
      <h2 className="heading">Services &amp; Pricing</h2>
      <div className="intro">
        <p>I have 10+ years of development experience building software for the web and mobile devices. You can take a look at my <a href="portfolio.html" target="_blank">project portfolio</a> and <a href="resume.html" target="_blank">online resume</a> to find out more about my skills and experiences.</p>
        <p className="mb-0">I'm currently taking on freelance software development work. You're welcome to contact me for a custom quote for your project. I also offer development service packages with fixed pricing. </p>
      </div>
    </div>{/*//container*/}
  </section>
  <section className="pricing-section p-3 p-lg-5">
    <div className="container single-col-max-width">
      <h3 className="text-center mb-4">Service Packages</h3>
      <div id="pricing-tabs" className="pricing-tabs d-block d-md-none mb-3">
        <a href="#" className="pricing-tab active mb-2" data-tab-target="pricing-1-data">Basic</a>	           
        <a href="#" className="pricing-tab mb-2" data-tab-target="pricing-2-data">Standard</a>
        <a href="#" className="pricing-tab" data-tab-target="pricing-3-data">Premium</a>
      </div>{/*//pricing-mobile-tabs*/}
      <table id="pricing-table" className="pricing-table table-bordered">
        <thead>
          <tr className="border-0">
            <th scope="col" className="pricing-0-data theme-bg-light" />
            <th scope="col" className="pricing-package-title pricing-data pricing-1-data">Basic</th>
            <th scope="col" className="pricing-package-title pricing-data pricing-2-data mobile-is-hidden">Standard</th>
            <th scope="col" className="pricing-package-title pricing-data pricing-3-data mobile-is-hidden">Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr className="pricing-price-row">
            <th scope="row" className="pricing-0-data">Package Price</th>
            <td className="pricing-data pricing-1-data"><span className="price-number">$900</span></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><span className="price-number">$2500</span></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><span className="price-number">$5000+</span></td>
          </tr>
          <tr className="pricing-desc-row">
            <th scope="row" className="pricing-0-data">Details</th>
            <td className="pricing-data pricing-1-data"><span className="pricing-package-desc">A small app lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><span className="pricing-package-desc">An medium app lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><span className="pricing-package-desc">A complex app lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Feature Lorem<br /><small className="feature-desc font-weight-normal text-muted">Optional feature description goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small></th>
            <td className="pricing-data pricing-1-data"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Feature Ipsum<br /><small className="feature-desc font-weight-normal text-muted">Optional feature description goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small></th>
            <td className="pricing-data pricing-1-data"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Feature Commodo</th>
            <td className="pricing-data pricing-1-data"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Feature Consectetuer</th>
            <td className="pricing-data pricing-1-data"><span className="text-muted">–</span></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Feature Aenean</th>
            <td className="pricing-data pricing-1-data"><span className="text-muted">–</span></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><span className="text-muted">–</span></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Feature Duis</th>
            <td className="pricing-data pricing-1-data"><span className="text-muted">–</span></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><span className="text-muted">–</span></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><i className="fas fa-check text-primary" /></td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Revisions</th>
            <td className="pricing-data pricing-1-data"><span className="text-muted">1</span></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><span className="text-muted">2</span></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden">5+</td>
          </tr>
          <tr className="pricing-feature-row">
            <th className="pricing-feature-row-name pricing-0-data" scope="row">Delivery Time</th>
            <td className="pricing-data pricing-1-data">7 days</td>
            <td className="pricing-data pricing-2-data mobile-is-hidden">14 days</td>
            <td className="pricing-data pricing-3-data mobile-is-hidden">2 - 3 month(s)</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="pricing-cta-row">
            <td className="pricing-0-data" />
            <td className="pricing-data pricing-1-data"><a className="btn btn-primary" href="#">Book Now</a></td>
            <td className="pricing-data pricing-2-data mobile-is-hidden"><a className="btn btn-primary" href="#">Book Now</a></td>
            <td className="pricing-data pricing-3-data mobile-is-hidden"><a className="btn btn-primary" href="#">Get A Quote</a></td>
          </tr>
        </tfoot>
      </table>{/*//pricing-table*/}
    </div>{/*//container*/}
  </section>{/*//pricing-section*/}
  <section className="faq-section">
    <div className="container single-col-max-width">
      <h3 className="text-center mb-4">FAQs</h3>
      <div className="text-center mb-5">You can use this section to address any queries your potential clients may have.</div>
      <div id="faq-accordion" className="faq-accordion accordion mx-auto text-start">
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-1">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
              Can you sit amet quam eget lacinia?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-1">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
            </div>
          </div>
        </div>{/*//accordion-item*/}
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-2">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
              What is the ipsum dolor sit amet quam tortor?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-2">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
            </div>
          </div>
        </div>{/*//accordion-item*/}
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-3">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
              What if ultricies nec vulputate eget?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-3">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}   
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-4">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
              Is it possible to tellus eget auctor condimentum?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq4" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-4">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-5">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
              Do you elementum turpis semper imperdiet?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq5" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-5">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-6">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
              How much imperdiet lorem sem non nisl?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq6" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-6">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-7">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
              How long does it take to imperdiet lorem sem non nisl?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq7" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-7">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-8">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
              Where can I imperdiet lorem sem non nisl?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq8" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-8">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}							
        <div className="accordion-item mb-3 rounded">
          <h2 className="accordion-header border-0 px-4 py-3 rounded theme-bg-light" id="faq-heading-9">
            <button className="accordion-button btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">
              When can lacinia ac dui ut semper?<i className="fas fa-chevron-down" />
            </button>
          </h2>
          <div id="faq9" className="accordion-collapse collapse border-0" aria-labelledby="faq-heading-9">
            <div className="accordion-body text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.  
            </div>
          </div>
        </div>{/*//accordion-item*/}
      </div>{/*//faq-accordion*/}
    </div>{/*//container*/}
  </section>{/*//faq-section*/}
  
</div>{/*//main-wrapper*/}

    </>
  )
}
