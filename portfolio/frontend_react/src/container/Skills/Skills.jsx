import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript,
  SiNodedotjs, SiPython, SiOpencv,
  SiTensorflow, SiPostman, SiPostgresql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { AppWrap, MotionWrap } from '../../wrapp';
import './Skills.scss';

const skillCategories = [
  {
    category: 'FRONTEND',
    skills: [
      { name: 'React',      Icon: SiReact,      color: '#61dafb' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#f7df1e' },
      { name: 'TypeScript', Icon: SiTypescript,  color: '#3178c6' },
    ],
  },
  {
    category: 'BACKEND',
    skills: [
      { name: 'Node.js',    Icon: SiNodedotjs,   color: '#339933' },
      { name: 'Java',       Icon: FaJava,         color: '#f89820' },
      { name: 'PostgreSQL', Icon: SiPostgresql,  color: '#336791' },
      { name: 'REST APIs',  Icon: SiPostman,     color: '#009688' },
    ],
  },
  {
    category: 'AI / MACHINE LEARNING',
    skills: [
      { name: 'Python',     Icon: SiPython,      color: '#3776ab' },
      { name: 'OpenCV',     Icon: SiOpencv,      color: '#5c3ee8' },
      { name: 'TensorFlow', Icon: SiTensorflow,  color: '#ff6f00' },
    ],
  },
];

const experiences = [
  {
    title: 'Network Configuration Assistant',
    subtitle: 'Ethio Telecom · Internship',
    body: 'LAN setup, routing, switching, and IP subnetting in a live enterprise network environment.',
  },
  {
    title: 'BSc Computer Science',
    subtitle: 'Madda Walabu University · 2026',
    body: 'Capstone: Smart Attendance System using facial recognition and computer vision.',
  },
];

// ── Animation variants ────────────────────────
const catContainerVars = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const groupVars = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const pillContainerVars = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const pillVars = {
  hidden:  { opacity: 0, scale: 0.65, y: 10 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const expContainerVars = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const expCardVars = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Skills = () => (
  <section className="app__skills-section">
    <div className="app__skills-kicker">TECHNICAL SKILLS</div>
    <h2 className="app__skills-heading head-text">
      Tools I Build <span className="purple-text">With</span>
    </h2>

    <div className="app__skills-layout">
      {/* LEFT – Skill pills */}
      <motion.div
        className="app__skills-left"
        variants={catContainerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillCategories.map((cat) => (
          <motion.div className="skill-group" key={cat.category} variants={groupVars}>
            <h3 className="skill-group-title">{cat.category}</h3>
            <motion.div
              className="skill-pills"
              variants={pillContainerVars}
            >
              {cat.skills.map((skill) => {
                const { Icon } = skill;
                return (
                  <motion.div className="skill-pill" key={skill.name} variants={pillVars}>
                    <div
                      className="skill-icon-square"
                      style={{ backgroundColor: `${skill.color}26` }}
                    >
                      <Icon style={{ color: skill.color }} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT – Experience */}
      <div className="app__skills-right">
        <h3 className="experience-heading">EXPERIENCE</h3>
        <motion.div
          className="experience-timeline"
          variants={expContainerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp) => (
            <motion.div className="experience-card" key={exp.title} variants={expCardVars}>
              <h4 className="exp-title">{exp.title}</h4>
              <div className="exp-subtitle">{exp.subtitle}</div>
              <p className="exp-body">{exp.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', '');
