import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

import { AppWrap } from '../../wrapp';
import { images } from '../../constants';
import './Header.scss';

const titleWords = ['Bacha', 'Eshetu'];

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingBadges = [
  { label: 'AI Software Developer', className: 'app__header-badge app__header-badge--top' },
  { label: 'Full Stack Systems', className: 'app__header-badge app__header-badge--right' },
  { label: 'React • Node • Python', className: 'app__header-badge app__header-badge--bottom' },
];

const Header = () => (
  <section className="app__header">
    <motion.div
      className="app__header-mesh app__header-mesh--one"
      animate={{ x: [0, 18, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="app__header-mesh app__header-mesh--two"
      animate={{ x: [0, -16, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="app__header-mesh app__header-mesh--three"
      animate={{ x: [0, 10, 0], y: [0, 12, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />

    <motion.div
      className="app__header-copy"
      variants={parentVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeUp} className="app__header-kicker">
        Premium software products, modern interfaces, practical AI
      </motion.div>

      <div className="app__header-title-wrap">
        {titleWords.map((word) => (
          <motion.h1 key={word} variants={titleVariants} className="app__header-title">
            {word}
          </motion.h1>
        ))}
      </div>

      <motion.div variants={fadeUp} className="app__header-role">
        AI Software Developer <span>/</span> Full Stack Developer
      </motion.div>

      <motion.p variants={fadeUp} className="app__header-tagline">
        I build clean, high-performance digital products with modern frontend systems,
        reliable backend logic, and practical AI-driven features.
      </motion.p>

      <motion.div variants={fadeUp} className="app__header-actions">
        <a href="#work" className="app__header-btn app__header-btn--primary">
          View Projects
          <FiArrowUpRight />
        </a>
        <a href="#contact" className="app__header-btn app__header-btn--secondary">
          Contact Me
        </a>
      </motion.div>
    </motion.div>

    <motion.div
      className="app__header-visual"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.95, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="app__header-visual-shell"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="app__header-visual-grid" />

        {floatingBadges.map((badge, index) => (
          <motion.div
            key={badge.label}
            className={badge.className}
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 4.8 + index, repeat: Infinity, ease: 'easeInOut' }}
          >
            {badge.label}
          </motion.div>
        ))}

        <div className="app__header-portrait-frame">
          <div className="app__header-portrait-glow" />
          <img src={images.profile} alt="Bacha Eshetu" className="app__header-portrait" />
        </div>

        <div className="app__header-signal">
          <span className="app__header-signal-dot" />
          Available for impactful product work
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default AppWrap(Header, 'home');
