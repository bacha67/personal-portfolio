import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapp';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Full Stack Development',
    description: "I build web apps using React, Node.js, and modern tools. I enjoy turning ideas into working products that are clean and easy to use.",
    imgUrl: images.about01,
  },
  {
    title: 'Machine Learning',
    description: "I'm learning AI and ML concepts, working with Python and data tools to build practical models and understand how intelligent systems work.",
    imgUrl: images.about02,
  },
  {
    title: 'Networking',
    description: "I have a solid foundation in computer networks, protocols, and system-level thinking from my CS degree.",
    imgUrl: images.about03,
  },
];

const About = () => (
  <>
    <h2 className="head-text">
      CS Graduate from <span>Ethiopia</span>,<br />building things with <span>Code & AI</span>
    </h2>

    <p className="p-text" style={{ textAlign: 'center', maxWidth: 700, margin: '1rem auto 2rem' }}>
      I am Bacha Eshetu, a Computer Science graduate passionate about AI, Machine Learning, and building practical tech solutions.
    </p>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
      ))}
    </div>
  </>
);

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
