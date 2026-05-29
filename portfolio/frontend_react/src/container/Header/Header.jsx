import React from 'react';
import { FiZap } from 'react-icons/fi';
import { AppWrap } from '../../wrapp';
import { images } from '../../constants';
import './Header.scss';

const stats = [
  { value: '2026', label: 'CS Graduate' },
  { value: 'Ethio Telecom', label: 'Internship' },
  { value: 'Full Stack + AI', label: 'Core expertise' },
];

const techPills = ['React', 'Node.js', 'Python', 'OpenCV', 'TensorFlow'];

const Header = () => (
  <section className="app__header-hero">
    {/* Decorative background orbs */}
    <div className="hero-orb hero-orb--purple" aria-hidden="true" />
    <div className="hero-orb hero-orb--cyan"   aria-hidden="true" />

    {/* ── LEFT COLUMN ── */}
    <div className="app__header-left">
      <div className="app__header-badge">
        <span className="app__header-pulse-dot" />
        Open to full-time opportunities
      </div>

      <h1 className="app__header-title">
        Building{' '}
        <span className="gradient-text">Intelligent</span>{' '}
        Digital Products
      </h1>

      <div className="app__header-roles">
        <span className="role-tag">Full Stack Developer</span>
        <span className="role-tag">AI &amp; ML Engineer</span>
        <span className="role-tag">React · Node.js · Python</span>
      </div>

      <p className="app__header-desc p-text">
        CS graduate from Ethiopia with hands-on experience in full-stack
        development, computer vision, and AI-driven systems. I turn complex
        problems into clean, working products.
      </p>

      <div className="app__header-buttons">
        <a href="#work"                    className="btn-primary">View Projects</a>
        <a href="/BachaEshetu-CV.pdf"
           target="_blank"
           rel="noreferrer"               className="btn-ghost">Download CV ↓</a>
      </div>

      {/* Stats strip */}
      <div className="app__header-stats">
        {stats.map(({ value, label }) => (
          <div className="stat-item" key={label}>
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* ── RIGHT COLUMN ── */}
    <div className="app__header-right">
      <div className="profile-card">
        {/* Glow ring around image */}
        <div className="profile-img-ring">
          <div className="profile-img-container">
            <img src={images.profile} alt="Bacha Eshetu" />
          </div>
        </div>

        <div className="profile-tech-tags">
          {techPills.map((t) => (
            <span className="tech-pill" key={t}>{t}</span>
          ))}
        </div>

        <div className="profile-status">
          <span className="status-dot" />
          Available for impactful work
        </div>
      </div>

      {/* Floating badge */}
      <div className="floating-badge" aria-hidden="true">
        <FiZap className="floating-badge__icon" />
        <span className="floating-badge__text">Open to work</span>
      </div>
    </div>
  </section>
);

export default AppWrap(Header, 'home');
