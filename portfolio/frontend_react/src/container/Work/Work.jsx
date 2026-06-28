import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { AppWrap, MotionWrap } from '../../wrapp';
import TiltCard from '../../component/TiltCard';
import './Work.scss';

// ── Tech-tag brand color map ─────────────────
const TECH_COLORS = {
  React:      { bg: 'rgba(97,219,251,0.15)',  color: '#61dbfb' },
  'Node.js':  { bg: 'rgba(104,160,99,0.15)',  color: '#68a063' },
  PostgreSQL: { bg: 'rgba(51,103,145,0.15)',   color: '#336791' },
  JWT:        { bg: 'rgba(255,179,0,0.15)',    color: '#ffb300' },
  Python:     { bg: 'rgba(55,118,171,0.15)',   color: '#3776ab' },
  OpenCV:     { bg: 'rgba(255,100,100,0.15)',  color: '#ff6464' },
  Flask:      { bg: 'rgba(255,255,255,0.08)',  color: 'rgba(255,255,255,0.6)' },
  CNN:        { bg: 'rgba(124,110,245,0.15)',  color: '#a89cf5' },
  TensorFlow: { bg: 'rgba(255,144,0,0.15)',    color: '#ff9000' },
  NumPy:      { bg: 'rgba(77,171,207,0.15)',   color: '#4dabcf' },
};

// ── Project data ──────────────────────────────
const works = [
  {
    title: 'Classroom Management System',
    type: 'FULL STACK',
    category: 'fullstack',
    year: '2024',
    teamSize: 'Solo project',
    desc: 'A production-ready University Management Dashboard built with the PERN stack (PostgreSQL, Express, React, Node.js) featuring role-based access control, full CRUD operations, and JWT authentication.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    liveLink: 'https://classroom-frontend-sable-kappa.vercel.app/',
    codeLink: 'https://github.com/bacha67',
    gradient: 'linear-gradient(135deg, #0f2040 0%, #1a3a6e 100%)',
    screenshot: '/images/ClassRoom.png',
    video: '',
    hasLive: true,
    stats: [
      { value: 'PERN Stack', label: 'Architecture' },
      { value: 'Neon Serverless', label: 'Database' },
    ],
    features: [
      'Role-based access: Admin, Teacher, Student views',
      'Full CRUD for classes, assignments, and users',
      'JWT authentication with protected routes',
      'PostgreSQL with Neon serverless DB',
    ],
    detailDescription:
      'The frontend is powered by React with structured route management and dynamic data display. ' +
      'The backend integrates a PostgreSQL schema with optimized queries. ' +
      'Security is handled through JWT-based authentication with protected API endpoints. ' +
      'The application supports complete user management, class scheduling, assignment tracking, ' +
      'and grade management across three distinct user roles.',
  },
  {
    title: 'Smart Attendance System',
    type: 'ML / COMPUTER VISION',
    category: 'ml',
    year: '2024',
    teamSize: 'Team of 2',
    desc: 'An AI-powered automated attendance management system that leverages face recognition to modernize traditional attendance tracking. Developed as a university capstone project at Madda Walabu University.',
    tags: ['Python', 'OpenCV', 'Flask', 'CNN'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Smart-Attendance-updated.git',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #3d1f7a 100%)',
    screenshot: '/images/attendance.jpg',
    video: '/images/attendace_video.mp4',
    hasLive: false,
    stats: [
      { value: '80%+', label: 'Accuracy' },
      { value: 'Flask + React', label: 'Stack' },
    ],
    features: [
      'Real-time face detection using MTCNN and InceptionResnetV1 (FaceNet)',
      'Transfer learning on custom Ethiopian student facial dataset',
      'Three user roles (Admin, Instructor, Student) with RBAC',
      'Automated low-attendance warnings and CSV/Excel report exports',
    ],
    detailDescription:
      'The system employs MTCNN for face detection and InceptionResnetV1 (FaceNet) for feature extraction, ' +
      'achieving real-time identification with an 80% confidence threshold. The model was improved through ' +
      'transfer learning — fine-tuning pre-trained models on a custom Ethiopian student facial dataset ' +
      'for higher accuracy under local conditions. Built with Flask (Python) on the backend and ' +
      'React (TypeScript) on the frontend, it supports multi-course and multi-section session management, ' +
      'JWT authentication, and security features like SQL injection protection, XSS prevention, ' +
      'and bcrypt password hashing.',
  },
  {
    title: 'Handwritten Digit Recognition',
    type: 'ML / NEURAL NETWORK',
    category: 'ml',
    year: '2024',
    teamSize: 'Solo project',
    desc: 'A deep learning project that classifies handwritten digits (0–9) using a Convolutional Neural Network trained on the MNIST dataset of 70,000 grayscale images.',
    tags: ['Python', 'TensorFlow', 'NumPy'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Hand_written_digit_recognition.git',
    gradient: 'linear-gradient(135deg, #0a2a20 0%, #0f5040 100%)',
    screenshot: '',
    hasLive: false,
    stats: [
      { value: '70K', label: 'Training Images' },
      { value: 'TensorFlow/Keras', label: 'Framework' },
    ],
    features: [
      'MNIST dataset training pipeline with data augmentation',
      'CNN architecture with convolutional, pooling, and dropout layers',
      'Image preprocessing with normalization and reshaping',
      'Training metrics visualization and confusion matrix evaluation',
    ],
    detailDescription:
      'The pipeline includes image preprocessing with normalization and reshaping, a CNN architecture ' +
      'with convolutional, pooling, dropout, and dense layers, and a training loop with validation ' +
      'accuracy tracking. Built with TensorFlow/Keras and NumPy, the model achieves high classification ' +
      'accuracy and includes visualization of training metrics, confusion matrices, and sample predictions ' +
      'to evaluate performance across all digit classes.',
  },
];

// ── Filter categories ─────────────────────────
const FILTERS = [
  { key: 'all',       label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ml',        label: 'ML' },
];

// ── Animation variants ────────────────────────
const gridVars = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};

const cardVars = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── ProjectCard — each card manages its OWN expand state ──
const ProjectCard = ({ work }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    screenshot, video, gradient, title, type, desc, tags,
    features, detailDescription, hasLive, liveLink, codeLink,
    year, teamSize, stats,
  } = work;

  return (
    <article className="app__work-card">
      {/* ── Screenshot / Video / Placeholder ── */}
      <div className="app__work-card-header">
        {video ? (
          <video
            src={video}
            className="app__work-card-screenshot"
            muted
            autoPlay
            loop
            playsInline
            poster={screenshot}
          />
        ) : screenshot ? (
          <img
            src={screenshot}
            alt={`${title} screenshot`}
            className="app__work-card-screenshot"
          />
        ) : (
          <div
            className="app__work-card-placeholder"
            style={{ background: gradient }}
          >
            <span className="placeholder-label">{title}</span>
          </div>
        )}

        <span className="status-badge">COMPLETED</span>
        <div className="screenshot-overlay" />
      </div>

      {/* ── Card body ── */}
      <div className="app__work-card-body">
        {/* Title row with action icons */}
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <div className="project-title-links">
            <a href={codeLink} target="_blank" rel="noreferrer" className="title-icon-link" title="GitHub">
              <FiGithub />
            </a>
            {hasLive && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="title-icon-link" title="Live Demo">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        {/* Meta info */}
        <div className="project-meta">
          <span className="project-meta-item">📅 {year}</span>
          <span className="project-meta-item">👤 {teamSize}</span>
        </div>

        {/* Description */}
        <p className="project-desc">{desc}</p>

        {/* Stats row */}
        {stats && stats.length > 0 && (
          <div className="project-stats">
            {stats.map((s, i) => (
              <div className="project-stat" key={i}>
                <span className="project-stat-value">{s.value}</span>
                <span className="project-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="project-tech-section">
          <span className="project-tech-heading">Technologies Used</span>
          <div className="project-tech-tags">
            {tags.map((tag) => {
              const c = TECH_COLORS[tag] || { bg: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' };
              return (
                <span
                  className="project-tech-tag"
                  key={tag}
                  style={{ backgroundColor: c.bg, color: c.color }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        {/* View Details button */}
        <button
          className="view-details-btn"
          aria-expanded={isExpanded}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
        >
          {isExpanded ? 'Collapse ↑' : 'View Details & Features'}
        </button>

        {/* Expandable panel */}
        <div className={`details-panel ${isExpanded ? 'details-panel--open' : ''}`}>
          <div className="details-panel-inner">
            <h4 className="details-heading">Key Features</h4>
            <ul className="details-list">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {detailDescription && (
              <>
                <h4 className="details-heading" style={{ marginTop: '20px' }}>About This Project</h4>
                <p className="details-description">{detailDescription}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

// ── Main Work section ─────────────────────────
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? works
    : works.filter((w) => w.category === activeFilter);

  return (
    <section className="app__work-section">
      <div className="app__work-kicker">SELECTED WORK</div>
      <h2 className="app__work-heading head-text">
        Projects Built to <span className="purple-text">Solve Real Problems</span>
      </h2>

      {/* Filter tabs */}
      <div className="app__work-filter-tabs">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-tab ${activeFilter === f.key ? 'filter-tab--active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        className="app__work-grid"
        variants={gridVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {filtered.map((work) => (
          <motion.div
            key={work.title}
            variants={cardVars}
            style={{ height: '100%' }}
          >
            <TiltCard>
              <ProjectCard work={work} />
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', '');
