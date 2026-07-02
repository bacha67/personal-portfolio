import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { AppWrap, MotionWrap } from '../../wrapp';
import TiltCard from '../../component/TiltCard';
import './Work.scss';


// ── Project data (exact content from prompt) ──
const works = [
  {
    cardId: 'classroom',
    title: 'Classroom Management System',
    type: 'FULL STACK',
    category: 'fullstack',
    year: '2025',
    role: 'Solo project',
    desc: 'PERN stack CRUD platform with authentication and role-based access control for managing classrooms and users.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    liveLink: 'https://classroom-frontend-sable-kappa.vercel.app/',
    codeLink: 'https://github.com/bacha67',
    gradient: 'linear-gradient(135deg, #0f2040 0%, #1a3a6e 100%)',
    screenshot: '/images/ClassRoom.png',
    video: '',
    hasLive: true,
    stats: [
      { value: 'PERN Stack', label: 'Architecture' },
      { value: 'JWT Auth', label: 'Security' },
    ],
    features: [
      'Role-based access: Admin, Teacher, Student views',
      'Full CRUD for classes, assignments, and users',
      'JWT authentication with protected routes',
      'PostgreSQL with Neon serverless database',
    ],
    detailDescription:
      'A production-focused admin workflow system built with the PERN stack. ' +
      'Designed to streamline classroom operations with secure multi-role authentication ' +
      'and a clean admin dashboard for managing students, teachers, classes, and assignments in real time.',
  },
  {
    cardId: 'attendance',
    title: 'Smart Attendance System',
    type: 'ML / COMPUTER VISION',
    category: 'ml',
    year: '2025',
    role: 'University Capstone',
    desc: 'Face-recognition attendance system using OpenCV and CNN for automated student check-in. Built as my university capstone project.',
    tags: ['Python', 'OpenCV', 'Flask', 'CNN', 'FaceNet'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Smart-Attendance-updated.git',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #3d1f7a 100%)',
    screenshot: '/images/attendance.jpg',
    video: '/images/attendace_video.mp4',
    hasLive: false,
    stats: [
      { value: '80%+', label: 'Face ID Accuracy' },
      { value: 'Real-time', label: 'Detection Speed' },
    ],
    features: [
      'Real-time face detection using MTCNN',
      'InceptionResnetV1 (FaceNet) for feature extraction',
      'Automated attendance logging to database',
      'Flask REST API backend with web dashboard',
    ],
    detailDescription:
      'Developed as a university capstone at Madda Walabu University, this system modernizes ' +
      'attendance tracking using AI and computer vision. It achieves real-time identification with ' +
      'an 80%+ confidence threshold, replacing manual roll calls with an automated, scalable solution.',
  },
  {
    cardId: 'digits',
    title: 'Handwritten Digit Recognition',
    type: 'ML / NEURAL NETWORK',
    category: 'ml',
    year: '2025',
    role: 'Solo project',
    desc: 'Neural network pipeline for handwritten digit classification using image preprocessing and a trained CNN model.',
    tags: ['Python', 'TensorFlow', 'NumPy', 'Keras', 'Image Processing'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Hand_written_digit_recognition.git',
    gradient: 'linear-gradient(135deg, #0a2a20 0%, #0f5040 100%)',
    screenshot: '',
    video: '',
    hasLive: false,
    stats: [
      { value: 'MNIST', label: 'Dataset' },
      { value: 'CNN', label: 'Architecture' },
    ],
    features: [
      'MNIST dataset training pipeline',
      'Convolutional neural network architecture',
      'Image preprocessing and normalization',
      'Model accuracy evaluation and visualization',
    ],
    detailDescription:
      'A machine learning model trained on the MNIST dataset to classify handwritten digits 0–9 ' +
      'with high accuracy. The pipeline covers data loading, preprocessing, model training with ' +
      'TensorFlow/Keras, evaluation, and result visualization using NumPy and Matplotlib.',
  },
  {
    cardId: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    type: 'AI / SERVERLESS',
    category: 'ml',
    year: '2026',
    role: 'Solo project',
    desc: 'Serverless web app that parses PDF resumes using PDF.js and analyzes them visually with GPT-4o-mini via Puter AI  returning ATS scores, tone, structure, and content feedback.',
    tags: ['React 19', 'TypeScript', 'Puter.js', 'PDF.js', 'GPT-4o-mini', 'Netlify'],
    liveLink: 'https://ai-resume-analyzer-app.netlify.app/',
    codeLink: 'https://github.com/bacha67/Ai-resume-Analyzer',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1a0a3e 100%)',
    screenshot: '',
    video: '/images/ResumeAnalyzer.mp4',
    hasLive: true,
    stats: [
      { value: '20x', label: 'Payload reduction' },
      { value: 'GPT-4o', label: 'Vision model' },
    ],
    features: [
      'Vision-based AI reviews resume layout and content',
      'ATS alignment scoring against job descriptions',
      'PDF.js converts PDFs to JPEG client-side (20x smaller)',
      'Fully serverless  Puter.js handles auth, storage, and AI',
      'Animated score dials and skeleton loaders',
    ],
    detailDescription:
      'A completely serverless AI resume analyzer built with React 19 and TypeScript. ' +
      'Uses PDF.js to convert uploaded resumes to lightweight JPEGs client-side, ' +
      'reducing AI payload by 20x. GPT-4o-mini via Puter AI visually reviews the resume ' +
      'and returns structured JSON feedback on tone, structure, content, and ATS alignment.',
  },
  {
    cardId: 'airdrop-beacon',
    title: 'Airdrop Beacon Portal',
    type: 'WEB3 / DASHBOARD',
    category: 'web3',
    year: '2026',
    role: 'Solo project',
    desc: 'A Web3 airdrop tracking dashboard that aggregates live on-chain airdrop opportunities, eligibility criteria, and reward timelines  all in one sleek, real-time interface.',
    tags: ['React', 'TypeScript', 'Web3.js', 'Netlify', 'REST APIs'],
    liveLink: 'https://soft-jalebi-1e9357.netlify.app/',
    codeLink: 'https://github.com/bacha67',
    gradient: 'linear-gradient(135deg, #021a12 0%, #003d2e 50%, #004d40 100%)',
    screenshot: '/images/airdrop_dashboard.png',
    video: '',
    hasLive: true,
    stats: [
      { value: 'Live', label: 'On-chain data' },
      { value: 'Web3', label: 'Dashboard' },
    ],
    features: [
      'Aggregates airdrop opportunities from multiple chains',
      'Eligibility checker  know if your wallet qualifies',
      'Countdown timers for claim deadlines and TGE dates',
      'Filter by chain, status (upcoming / active / ended)',
      'Clean card-based UI with real-time data refresh',
    ],
    detailDescription:
      'Airdrop Beacon Portal is a Web3 dashboard built to help crypto users discover, ' +
      'track, and claim airdrop rewards without missing deadlines. It aggregates on-chain ' +
      'and off-chain airdrop data across multiple networks, surfaces eligibility criteria, ' +
      'and displays live countdown timers for claim windows and token generation events (TGE). ' +
      'Deployed on Netlify with a fully serverless architecture.',
  },
];

// ── Filter categories ─────────────────────────
const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'ml', label: 'AI/ML' },
  { key: 'web3', label: 'Web3' },
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

// ── ProjectCard component ─────────────────────
const ProjectCard = ({ work, isExpanded, onToggle }) => {
  const {
    screenshot, video, gradient, title, type, desc, tags,
    features, detailDescription, hasLive, liveLink, codeLink,
    year, role, stats,
  } = work;

  return (
    <article className="app__work-card">
      {/* ── Screenshot / Video / Placeholder ── */}
      <div className="app__work-card-header">
        {video ? (
          <video
            src={video}
            className="app__work-card-media"
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
            className="app__work-card-media"
          />
        ) : (
          <div
            className="app__work-card-placeholder"
            style={{ background: gradient }}
          >
            <span className="placeholder-label">{title}</span>
          </div>
        )}

        {/* COMPLETED badge — top-left */}
        <span className="status-badge">COMPLETED</span>

        {/* Icon links — top-right overlay */}
        <div className="header-icon-links">
          <a href={codeLink} target="_blank" rel="noreferrer" className="header-icon-btn" title="GitHub">
            <FiGithub />
          </a>
          {hasLive && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="header-icon-btn" title="Live Demo">
              <FiExternalLink />
            </a>
          )}
        </div>

        {/* Hover overlay */}
        <div className="screenshot-overlay" />
      </div>

      {/* ── Card body ── */}
      <div className="app__work-card-body">
        {/* Type label */}
        <span className="project-type-label">{type}</span>

        {/* Project name */}
        <h3 className="project-name">{title}</h3>

        {/* Year + role */}
        <div className="project-meta">
          <span className="project-meta-item">📅 {year}</span>
          <span className="project-meta-item">👤 {role}</span>
        </div>

        {/* Description */}
        <p className="project-desc">{desc}</p>

        {/* Stats row */}
        {stats && stats.length > 0 && (
          <div className="project-stats-row">
            {stats.map((s, i) => (
              <div className="project-stat-box" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Used */}
        <div className="project-tech-section">
          <span className="tech-section-label">Technologies Used</span>
          <div className="project-tech-tags">
            {tags.map((tag) => (
              <span className="project-tech-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Toggle button — always visible */}
        <button
          className={`view-details-btn ${isExpanded ? 'view-details-btn--active' : ''}`}
          aria-expanded={isExpanded}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          {isExpanded ? 'Collapse ↑' : 'View Details & Features'}
        </button>

        {/* Expanded panel — below toggle */}
        <div className={`details-panel ${isExpanded ? 'details-panel--open' : ''}`}>
          <div className="details-panel-inner">
            {/* Sub-section A: Key Features */}
            <h4 className="details-section-label">KEY FEATURES</h4>
            <ul className="details-feature-list">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {/* Sub-section B: Project Details */}
            {detailDescription && (
              <>
                <h4 className="details-section-label" style={{ marginTop: '20px' }}>PROJECT DETAILS</h4>
                <div className="details-description-box">
                  <p>{detailDescription}</p>
                </div>
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
  // BUG FIX 1: Only ONE card can be expanded at a time
  const [expandedCard, setExpandedCard] = useState(null);

  const filtered = activeFilter === 'all'
    ? works
    : activeFilter === 'fullstack'
      ? works.filter((w) => w.type === 'FULL STACK')
      : activeFilter === 'web3'
        ? works.filter((w) => w.category === 'web3')
        : works.filter((w) => w.type.includes('ML') || w.type.includes('AI'));

  const handleToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

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
            key={work.cardId}
            variants={cardVars}
            style={{ height: '100%' }}
          >
            <TiltCard>
              <ProjectCard
                work={work}
                isExpanded={expandedCard === work.cardId}
                onToggle={() => handleToggle(work.cardId)}
              />
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', '');
