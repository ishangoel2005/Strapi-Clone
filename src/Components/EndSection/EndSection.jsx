import React from 'react';
import './EndSection.css';
import Logo1 from '../../assets/strapi logo.png';
import Logo2 from '../../assets/logo2.png';

const EndSection = () => {
  return (
    <div className="end-section">
      <div className="left-section">
        <img src={Logo1} alt="Strapi Logo" className="main-logo" />
        
        <p className="info-text">
          Strapi is the leading open-source Headless CMS. Strapi gives developers
          the freedom to use their favorite tools and frameworks while allowing editors
          to easily manage their content and distribute it anywhere.
        </p>

        <div className="certification-logos">
          <img src={Logo2} alt="GDPR Compliant Logo" className="small-logo" />
        </div>
      </div>

      <div className="footer">
        <div className="footer-column">
          <h4>PRODUCT</h4>
          <ul>
            <li>Strapi v4</li>
            <li>Strapi Design System</li>
            <li>Why Strapi?</li>
            <li>Content Architecture</li>
            <li>Features</li>
            <li>Enterprise Edition</li>
            <li>Roadmap</li>
            <li>Support</li>
            <li>Try live demo</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>SOLUTIONS</h4>
          <ul>
            <li>Static websites</li>
            <li>Mobile applications</li>
            <li>Corporate websites</li>
            <li>Editorial sites</li>
            <li>Ecommerce</li>
            <li>For developers</li>
            <li>For content teams</li>
            <li>For business teams</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li>Resource Center</li>
            <li>How to get started</li>
            <li>Meet the community</li>
            <li>Tutorials</li>
            <li>API documentation</li>
            <li>GitHub repository</li>
            <li>Starters</li>
            <li>User stories</li>
            <li>Strapi vs Wordpress</li>
            <li>Strapi vs Contentful</li>
            <li>Headless CMS guide</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Handbook</li>
            <li>Partner Program</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Newsroom</li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default EndSection;
