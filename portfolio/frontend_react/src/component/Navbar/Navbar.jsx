import React, { useState } from 'react';
import { HiMenuAlt4, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';

const navLinks = ['home', 'about', 'work', 'skills', 'contact'];

const navLabels = {
  home: 'Home',
  about: 'About',
  work: 'Projects',
  skills: 'Skills',
  contact: 'Contact',
};

const Navbar = ({ theme, toggleTheme }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <span>B</span>E.
        </a>
      </div>
      
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li key={`link-${item}`}>
            <a href={`#${item}`}>{navLabels[item]}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-right">
        <button 
          onClick={toggleTheme} 
          className="app__theme-toggle" 
          aria-label="Toggle Theme"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {theme === 'dark' ? <HiSun /> : <HiMoon />}
          </motion.div>
        </button>
        <a href="#contact" className="app__navbar-hire">
          Hire Me
        </a>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <>
            <div className="app__navbar-overlay" onClick={() => setToggle(false)} />
            <motion.div
              className="app__navbar-mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="app__navbar-mobile-header">
                <div className="app__navbar-logo">
                  <a href="#home" onClick={() => setToggle(false)}>
                    <span>B</span>E.
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <button 
                    onClick={toggleTheme} 
                    className="app__theme-toggle" 
                    aria-label="Toggle Theme"
                  >
                    <motion.div
                      key={theme}
                      initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {theme === 'dark' ? <HiSun /> : <HiMoon />}
                    </motion.div>
                  </button>
                  <HiX onClick={() => setToggle(false)} />
                </div>
              </div>
              
              <ul>
                {navLinks.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {navLabels[item]}
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="app__navbar-hire-mobile" onClick={() => setToggle(false)}>
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
