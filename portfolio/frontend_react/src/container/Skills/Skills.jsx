import React from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiOpencv, 
  SiTensorflow, 
  SiPostman,
  SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { AppWrap, MotionWrap } from '../../wrapp';
import './Skills.scss';

const skillCategories = [
  {
    category: 'FRONTEND',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61dafb' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
    ],
  },
  {
    category: 'BACKEND',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Java', Icon: FaJava, color: '#f89820' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
      { name: 'REST APIs', Icon: SiPostman, color: '#009688' },
    ],
  },
  {
    category: 'AI / MACHINE LEARNING',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#3776ab' },
      { name: 'OpenCV', Icon: SiOpencv, color: '#5c3ee8' },
      { name: 'TensorFlow', Icon: SiTensorflow, color: '#ff6f00' },
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

const Skills = () => {
  return (
    <section className="app__skills-section">
      <div className="app__skills-kicker">TECHNICAL SKILLS</div>
      <h2 className="app__skills-heading head-text">
        Tools I Build <span className="purple-text">With</span>
      </h2>

      <div className="app__skills-layout">
        <div className="app__skills-left">
          {skillCategories.map((cat) => (
            <div className="skill-group" key={cat.category}>
              <h3 className="skill-group-title">{cat.category}</h3>
              <div className="skill-pills">
                {cat.skills.map((skill) => {
                  const { Icon } = skill;
                  return (
                    <div className="skill-pill" key={skill.name}>
                      <div 
                        className="skill-icon-square" 
                        style={{ backgroundColor: `${skill.color}26` }}
                      >
                        <Icon style={{ color: skill.color }} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="app__skills-right">
          <h3 className="experience-heading">EXPERIENCE</h3>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div className="experience-card" key={exp.title}>
                <h4 className="exp-title">{exp.title}</h4>
                <div className="exp-subtitle">{exp.subtitle}</div>
                <p className="exp-body">{exp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  ''
);
