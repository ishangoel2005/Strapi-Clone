import React from 'react';
import './SectionThree.css';
import api from '../../assets/api creation.png';
import { FaCogs, FaPlug, FaUsers } from 'react-icons/fa'; // Importing the icons

const SectionThree = () => {
  return (
    <div className="section-three-wrapper">
      <div className="section-three-container">
        <div className="section-three">
          <h1>Simplify API Creation, Content Modeling, and Delivery</h1>
          <p>
            Build and manage your content model and infrastructure with our Content-Type Builder and Custom Fields. Skip tedious setup. Design content structures and relations in a no-code UI. Deliver content efficiently with our REST and GraphQL APIs.
          </p>
        </div>

        {/* Image Section */}
        <img src={api} alt="Description" className="section-three-image" />
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h3>
            <FaCogs className="icon" />
            Content Type Builder
          </h3>
          <p>Create and manage content models through a user-friendly interface, simplifying the development process.</p>
        </div>
        <div className="feature">
          <h3>
            <FaPlug className="icon" />
            Dynamic Zones
          </h3>
          <p>Give editors the flexibility to quickly adjust web page structure without the help of developers.</p>
        </div>
        <div className="feature">
          <h3>
            <FaUsers className="icon" />
            Custom Fields
          </h3>
          <p>Add any type of fields to your project, customizing data structures to suit your specific requirements.</p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
