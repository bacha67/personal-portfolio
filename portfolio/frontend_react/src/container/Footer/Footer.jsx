import React, { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapp';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name: field, value } = e.target;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:bachaeshetu@gmail.com?subject=${subject}&body=${body}`;
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Let's <span>Connect</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <a href="mailto:bachaeshetu@gmail.com" className="p-text">
            bachaeshetu@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <a href="tel:+251974791353" className="p-text">
            +251 974 79 13 53
          </a>
        </div>
        <div className="app__footer-card">
          <a href="https://github.com/bacha67" target="_blank" rel="noreferrer" className="p-text">
            GitHub — bacha67
          </a>
        </div>
        <div className="app__footer-card">
          <a href="https://t.me/Binary114" target="_blank" rel="noreferrer" className="p-text">
            Telegram — @Binary114
          </a>
        </div>
        <div className="app__footer-card">
          <a href="https://www.linkedin.com/in/bacha-eshetu-7aa74635a" target="_blank" rel="noreferrer" className="p-text">
            LinkedIn — Bacha Eshetu
          </a>
        </div>
        <div className="app__footer-card">
          <a href="https://x.com/BEsehtu" target="_blank" rel="noreferrer" className="p-text">
            Twitter/X — @BEsehtu
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thanks for reaching out!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
