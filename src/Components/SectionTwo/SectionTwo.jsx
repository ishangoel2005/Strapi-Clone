import React from 'react';
import './SectionTwo.css';
import { FaCogs, FaPlug, FaUsers } from 'react-icons/fa';

const SectionTwo = () => {
  return (
    <div className="section-two">
      <h2>Building your website the way you want is hard</h2>
      <p>Because your CMS is slowing you down and holding you back.</p>
      <div className="features">
        <div className="feature">
          <h3><FaCogs className="icon" /> Lack of customization...</h3> 
          <p>You're unable to customize or extend the CMS to fit your unique project needs.</p>
        </div>
        <div className="feature">
          <h3><FaPlug className="icon" /> Lack of plugins...</h3>
          <p>You are not able to use your favorite tools, and lack plugins or integrations.</p>
        </div>
        <div className="feature">
          <h3><FaUsers className="icon" /> Lack of community...</h3> 
          <p>You're dealing with a CMS that lacks a large, active community of developers.</p>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo;
