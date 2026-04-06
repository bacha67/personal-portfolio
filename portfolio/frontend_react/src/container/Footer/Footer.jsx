import React, { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapp';
import './Footer.scss';

const initialFormState = { name: '', email: '', message: '' };
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Footer = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name: field, value } = e.target;
    setSubmitError('');
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitError('Please fill in your name, email, and message.');
      return;
    }

    try {
      setIsLoading(true);
      setSubmitError('');

      const response = await fetch(`${API_URL}/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsFormSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
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
          {submitError ? <p className="app__footer-message app__footer-message--error">{submitError}</p> : null}
          <button type="submit" className="p-text" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thanks for reaching out!</h3>
          <p className="app__footer-message">Your message was sent successfully.</p>
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
