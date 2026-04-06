import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapp';
import './Work.scss';

const allWorks = [
  {
    title: 'Smart Attendance System',
    description: 'A machine learning-based attendance system using face recognition to automatically identify and mark student attendance.',
    techs: 'Python · OpenCV · Flask · ML',
    tags: ['ML', 'AI', 'Computer Vision'],
    codeLink: 'https://github.com/bacha67/Smart-Attendance-updated.git',
    bgColor: '#1a1a2e',
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'A machine learning model that recognizes handwritten digits using image processing and classification techniques.',
    techs: 'Python · TensorFlow · NumPy',
    tags: ['ML', 'AI'],
    codeLink: 'https://github.com/bacha67/Hand_written_digit_recognition.git',
    bgColor: '#313bac',
  },
];

const filterTags = ['All', 'ML', 'AI', 'Computer Vision'];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const filterWork = activeFilter === 'All'
    ? allWorks
    : allWorks.filter((work) => work.tags.includes(activeFilter));

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => setAnimateCard([{ y: 0, opacity: 1 }]), 500);
  };

  return (
    <>
      <h2 className="head-text">My <span>Projects</span></h2>

      <div className="app__work-filter">
        {filterTags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: work.bgColor,
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', padding: '1rem', textAlign: 'center' }}>
                  {work.title}
                </p>
              </div>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="app__work-hover app__flex"
              >
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <p className="p-text" style={{ marginTop: 6, color: '#6b7688', fontSize: '0.85rem' }}>{work.techs}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 10 }}>
                {work.tags.map((tag) => (
                  <div className="app__work-tag app__flex" key={tag}>
                    <p className="p-text">{tag}</p>
                  </div>
                ))}
              </div>
              <a
                href={work.codeLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 14,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#313bac',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                <AiFillGithub /> View Code
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
