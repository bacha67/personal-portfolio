import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapp';
import { FaCode, FaNetworkWired, FaBrain, FaVideo } from 'react-icons/fa';
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

// ── Animation variants ────────────────────────
const leftVars = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const rightVars = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const cardVars = {
  hidden:  { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const About = () => (
  <section className="app__about-section">
    <div className="app__about-kicker">ABOUT ME</div>
    <h2 className="app__about-heading head-text">
      Who I <span className="purple-text">Am</span>
    </h2>

    <div className="app__about-layout">
      {/* LEFT – Bio text */}
      <motion.div
        className="app__about-left"
        variants={leftVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.div>

      {/* RIGHT – Highlight cards */}
      <motion.div
        className="app__about-right"
        variants={rightVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {highlights.map(({ Icon, title, desc, color }) => (
          <motion.div className="about-highlight-card" key={title} variants={cardVars}>
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AppWrap(MotionWrap(About, 'app__about'), 'about', '');
