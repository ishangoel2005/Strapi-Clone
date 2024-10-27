import React from 'react';
import './SectionFive.css'; // Import the CSS for Section Five
import deploy from '../../assets/deploy.png'; // Replace with the appropriate image for Section 5
import { FaCogs, FaPlug, FaUsers } from 'react-icons/fa'; // Reuse icons or use different ones

const SectionFive = () => {
  return (
    <div className="section-five-wrapper">
      <div className="section-five-container">
        <div className="section-five">
          <h1>Deploy with confidence</h1>
          <p>
          From prototype to production, host your projects on robust, secure servers in minutes with Strapi Cloud. Build, deploy, and scale your Strapi app quickly and remain in complete control over your tech stack with a fully-managed infrastructure, optimized for Strapi. Or host on your own servers — it’s open-source after all.
          </p>
        </div>

        {/* Image Section */}
        <img src={deploy} alt="Description" className="section-five-image" />
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h3>
            <FaCogs className="icon" />
            The Strapi Stack
          </h3>
          <p>Enjoy a Strapi-optimized stack including a Postgres database, email provider, and CDN without having to manage it all yourself. Don’t worry about the infrastructure, it just works!</p>
        </div>
        <div className="feature">
          <h3>
            <FaPlug className="icon" />
            Deploy in a Few Clicks
          </h3>
          <p>Launch your Strapi applications in minutes. Simply deploy code directly from your GitHub repositories, choose your region, and get started with generous usage limits.</p>
        </div>
        <div className="feature">
          <h3>
            <FaUsers className="icon" />
            Customize your Stack
          </h3>
          <p>Manage custom domains, monitor real-time logs and swap out any component of your tech stack. Don’t get stuck on outdated technology but stay flexible so that you’re ready for anything that comes next.</p>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
