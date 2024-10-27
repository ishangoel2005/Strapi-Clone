import React from 'react';
import './SectionFour.css'; // Import the CSS for Section Four
import cms from '../../assets/cms.png'; // Replace with the appropriate image for Section 4
import { FaCogs, FaPlug, FaUsers } from 'react-icons/fa'; // Reuse icons or use different ones

const SectionFour = () => {
  return (
    <div className="section-four-wrapper">
      <div className="section-four-container">
        <div className="section-four">
          <h1>Customize your CMS and work with your favorite tools and frameworks</h1>
          <p>
          Tailor your CMS to meet specific project needs and leverage a thriving marketplace of plugins and integrations. Strapi helps you future-proof your modern website with features like unique field types and custom layouts.
          </p>
        </div>

        {/* Image Section */}
        <img src={cms} alt="Description" className="section-four-image" />
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h3>
            <FaCogs className="icon" />
            Reviewed and Tested Plugins
          </h3>
          <p>Leverage a thriving marketplace of plugins and integrations developed by an active developer community.</p>
        </div>
        <div className="feature">
          <h3>
            <FaPlug className="icon" />
            Design System
          </h3>
          <p>Build plugins fast with a comprehensive design system to create a consistent experience for all users.</p>
        </div>
        <div className="feature">
          <h3>
            <FaUsers className="icon" />
            Thriving Developer Community
          </h3>
          <p>Tap into a vibrant community of thousands of developers. Whether you need help with an edge case or a simple bug, our active community is ready to support and collaborate.</p>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
