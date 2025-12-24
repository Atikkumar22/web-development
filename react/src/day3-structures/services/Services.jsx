import React from 'react';

const Services = () => {
  return (
    <section className="services-container">
      
      <div className="services-text">
        <span className="services-badge">Services</span>
        <h2 className="services-description">
          Explore our full range of coaching, training, and tennis experiences. 
          From first serve to match point — we've got the right program for you.
        </h2>
        <button className="explore-btn">
          Explore More <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>

      <div className="service-card training-card">
        <span className="card-label">Training Programs</span>
        <div className="card-footer">
          <p>Programs designed for all ages and abilities.</p>
          <div className="arrow-icon">
            <i className="ri-arrow-right-up-line"></i>
          </div>
        </div>
      </div>

      <div className="service-right-block">
        <div className="service-card court-card">
          <span className="card-label">Court Access</span>
          <p className="card-overlay-text">Hourly Court Rental</p>
        </div>
        
        <div className="court-info">
          <p>Step into a space built for players — to grow, compete, and thrive.</p>
          <div className="nav-arrows">
            <button className="nav-btn"><i className="ri-arrow-left-line"></i></button>
            <button className="nav-btn"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;