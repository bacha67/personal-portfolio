import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapp';
import { images } from '../../constants';
import './Skills.scss';

const skillCategories = [
  {
    category: 'Full Stack Development',
    skills: [
      { name: 'HTML', icon: images.html, bgColor: '#edf2f8' },
      { name: 'CSS', icon: images.css, bgColor: '#edf2f8' },
      { name: 'JavaScript', icon: images.javascript, bgColor: '#edf2f8' },
      { name: 'React', icon: images.react, bgColor: '#edf2f8' },
      { name: 'Node.js', icon: images.node, bgColor: '#edf2f8' },
      { name: 'TypeScript', icon: images.typescript, bgColor: '#edf2f8' },
      { name: 'Git', icon: images.git, bgColor: '#edf2f8' },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Python', icon: images.python, bgColor: '#edf2f8' },
      { name: 'GraphQL', icon: images.graphql, bgColor: '#edf2f8' },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { name: 'API Design', icon: images.api, bgColor: '#edf2f8' },
      { name: 'C++', icon: images.cpp, bgColor: '#edf2f8' },
    ],
  },
];

const Skills = () => (
  <>
    <h2 className="head-text">Skills & <span>Background</span></h2>

    <div className="app__skills-container">
      <div className="app__skills-list" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}>
        {skillCategories.map((group) => (
          <div key={group.category}>
            <p className="bold-text" style={{ marginBottom: '1rem', color: '#313bac' }}>{group.category}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {group.skills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={skill.name}
                >
                  <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="app__skills-exp">
        <motion.div className="app__skills-exp-item">
          <div className="app__skills-exp-year">
            <p className="bold-text">2026</p>
          </div>
          <div className="app__skills-exp-works">
            <div className="app__skills-exp-work">
              <h4 className="bold-text">CS Graduate</h4>
              <p className="p-text">Ethiopia</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="app__skills-exp-item">
          <div className="app__skills-exp-year">
            <p className="bold-text">2026–--</p>
          </div>
          <div className="app__skills-exp-works">
            <div className="app__skills-exp-work">
              <h4 className="bold-text">Self-learning AI & ML</h4>
              <p className="p-text">Personal Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
