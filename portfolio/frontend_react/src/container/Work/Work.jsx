import React, { useMemo, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapp';
import './Work.scss';

const allWorks = [
  {
    title: 'Classroom Management System',
    description: 'Full-stack PERN CRUD platform with authentication and role-based access control for managing classrooms and users.',
    techs: ['React', 'Node.js', 'Express', 'PostgreSQL (Neon)', 'JWT'],
    tags: ['Full Stack'],
    liveLink: 'https://classroom-frontend-sable-kappa.vercel.app/',
    codeLink: 'https://github.com/bacha67',
    accent: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 58%, #38bdf8 100%)',
    eyebrow: 'Production-focused admin workflow',
  },
  {
    title: 'Smart Attendance System',
    description: 'Face-recognition based attendance system using computer vision for automated student check-in.',
    techs: ['Python', 'OpenCV', 'Flask', 'Face Recognition'],
    tags: ['ML'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Smart-Attendance-updated.git',
    accent: 'linear-gradient(135deg, #111827 0%, #1f2937 42%, #7c3aed 100%)',
    eyebrow: 'Applied computer vision project',
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'Machine learning model for handwritten digit classification using image preprocessing and neural network pipeline.',
    techs: ['Python', 'TensorFlow', 'NumPy', 'Image Processing'],
    tags: ['ML'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Hand_written_digit_recognition.git',
    accent: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 48%, #22c55e 100%)',
    eyebrow: 'Model training and inference',
  },
];

const filterTags = ['All', 'Full Stack', 'ML'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridTransition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredWorks = useMemo(() => (
    activeFilter === 'All'
      ? allWorks
      : allWorks.filter((work) => work.tags.includes(activeFilter))
  ), [activeFilter]);

  return (
    <>
      <div className="app__work-shell">
        <div className="app__work-heading">
          <h2 className="head-text">
            Selected <span>Projects</span>
          </h2>
          <p className="p-text">
            A focused showcase of full stack and AI projects built to solve practical problems
            with clear UX, real functionality, and production-oriented thinking.
          </p>
        </div>

        <div className="app__work-filter" role="tablist" aria-label="Project filters">
          {filterTags.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`app__work-filter-item ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="app__work-portfolio"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.article
              className="app__work-item"
              key={work.title}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 22, transition: { duration: 0.18 } }}
              whileHover={{ y: -10, rotateX: 1.6, rotateY: -1.6 }}
              transition={gridTransition}
            >
              <div className="app__work-preview" style={{ background: work.accent }}>
                <div className="app__work-preview-grid" />
                <div className="app__work-preview-content">
                  <p>{work.eyebrow}</p>
                  <h3>{work.title}</h3>
                </div>
              </div>

              <div className="app__work-content">
                <div className="app__work-meta">
                  {work.tags.map((tag) => (
                    <span className="app__work-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="app__work-title">{work.title}</h3>
                <p className="app__work-description">{work.description}</p>

                <div className="app__work-stack">
                  {work.techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="app__work-actions">
                  {work.liveLink ? (
                    <a
                      href={work.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="app__work-btn app__work-btn--primary"
                    >
                      <FiArrowUpRight />
                      Live Demo
                    </a>
                  ) : null}
                  <a
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`app__work-btn ${work.liveLink ? 'app__work-btn--secondary' : 'app__work-btn--primary'}`}
                  >
                    <AiFillGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
