import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapp';
import {
  FaCode,
  FaNetworkWired,
  FaBrain,
  FaVideo,
} from 'react-icons/fa';
import './About.scss';

const highlights = [
  {
    Icon: FaCode,
    title: 'Full-Stack Development',
    desc: 'Building end-to-end web apps with React, Node.js, and PostgreSQL.',
    color: '#7c6ef5',
  },
  {
    Icon: FaNetworkWired,
    title: 'Networking & Support',
    desc: 'Hands-on internship configuring enterprise LAN, routing, and IP subnetting.',
    color: '#06b6d4',
  },
  {
    Icon: FaBrain,
    title: 'Machine Learning',
    desc: 'Applying computer vision and neural networks to solve real-world problems.',
    color: '#f97316',
  },
  {
    Icon: FaVideo,
    title: 'Content & Digital Marketing',
    desc: 'Currently creating content and exploring modern digital marketing strategies.',
    color: '#4ade80',
  },
];

const About = () => {
  return (
    <section className="app__about-section">
      <div className="app__about-kicker">ABOUT ME</div>
      <h2 className="app__about-heading head-text">
        Who I <span className="purple-text">Am</span>
      </h2>

      <div className="app__about-layout">
        {/* LEFT – Bio text */}
        <div className="app__about-left">
          <p className="app__about-bio">
            Computer Science graduate passionate about technology and
            problem-solving. I have experience in full-stack development,
            networking, and machine learning projects, along with hands-on
            internship and technical support experience.
          </p>
          <p className="app__about-bio">
            Currently creating content and learning digital marketing, content
            creation, and modern technology trends while building my professional
            career and growing through continuous learning and creativity.
          </p>

          <div className="app__about-badges">
            <span className="about-badge">🎓 BSc Computer Science</span>
            <span className="about-badge">🇪🇹 Based in Ethiopia</span>
            <span className="about-badge">🔍 Open to Opportunities</span>
          </div>
        </div>

        {/* RIGHT – Highlight cards */}
        <div className="app__about-right">
          {highlights.map(({ Icon, title, desc, color }, idx) => (
            <div className="about-highlight-card" key={idx}>
              <div
                className="about-highlight-icon"
                style={{ backgroundColor: `${color}1a`, color }}
              >
                <Icon />
              </div>
              <div className="about-highlight-body">
                <h4 className="about-highlight-title">{title}</h4>
                <p className="about-highlight-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', '');
