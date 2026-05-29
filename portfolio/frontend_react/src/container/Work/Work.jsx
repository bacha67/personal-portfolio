import React from 'react';
import { motion } from 'framer-motion';
import { TiThLarge, TiCamera, TiPencil } from 'react-icons/ti';
import { FiArrowUpRight } from 'react-icons/fi';
import { AppWrap, MotionWrap } from '../../wrapp';
import TiltCard from '../../component/TiltCard';
import './Work.scss';

const works = [
  {
    title: 'Classroom Management System',
    type: 'FULL STACK',
    desc: 'PERN stack CRUD platform with auth and role-based access control',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    liveLink: 'https://classroom-frontend-sable-kappa.vercel.app/',
    codeLink: 'https://github.com/bacha67',
    gradient: 'linear-gradient(135deg, #0f2040 0%, #1a3a6e 100%)',
    Icon: TiThLarge,
    hasLive: true,
  },
  {
    title: 'Smart Attendance System',
    type: 'ML / COMPUTER VISION',
    desc: 'Face-recognition attendance using OpenCV and CNN. University capstone project.',
    tags: ['Python', 'OpenCV', 'Flask', 'CNN'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Smart-Attendance-updated.git',
    gradient: 'linear-gradient(135deg, #1a1040 0%, #3d1f7a 100%)',
    Icon: TiCamera,
    hasLive: false,
  },
  {
    title: 'Handwritten Digit Recognition',
    type: 'ML / NEURAL NETWORK',
    desc: 'Neural network pipeline for digit classification with image preprocessing',
    tags: ['Python', 'TensorFlow', 'NumPy'],
    liveLink: '',
    codeLink: 'https://github.com/bacha67/Hand_written_digit_recognition.git',
    gradient: 'linear-gradient(135deg, #0a2a20 0%, #0f5040 100%)',
    Icon: TiPencil,
    hasLive: false,
  },
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

const Work = () => (
  <section className="app__work-section">
    <div className="app__work-kicker">SELECTED WORK</div>
    <h2 className="app__work-heading head-text">
      Projects Built to <span className="purple-text">Solve Real Problems</span>
    </h2>

    <motion.div
      className="app__work-grid"
      variants={gridVars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {works.map((work) => {
        const { Icon } = work;
        return (
          <motion.div
            key={work.title}
            variants={cardVars}
            style={{ height: '100%' }}
          >
            <TiltCard>
              <article className="app__work-card">
                <div className="app__work-card-header" style={{ background: work.gradient }}>
                  <Icon className="project-header-icon" />
                </div>
                <div className="app__work-card-body">
                  <span className="project-type-badge">{work.type}</span>
                  <h3 className="project-title">{work.title}</h3>
                  <p className="project-desc">{work.desc}</p>

                  <div className="project-tech-tags">
                    {work.tags.map((tag) => (
                      <span className="project-tech-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {work.hasLive ? (
                      <>
                        <a href={work.liveLink} target="_blank" rel="noreferrer" className="btn-live">
                          Live Demo <FiArrowUpRight />
                        </a>
                        <a href={work.codeLink} target="_blank" rel="noreferrer" className="btn-github-ghost">
                          GitHub
                        </a>
                      </>
                    ) : (
                      <a href={work.codeLink} target="_blank" rel="noreferrer" className="btn-github-filled">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        );
      })}
    </motion.div>
  </section>
);

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', '');
