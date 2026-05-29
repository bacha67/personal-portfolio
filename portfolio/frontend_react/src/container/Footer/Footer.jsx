import React, { useState } from 'react';
import { TiMail, TiPhone } from 'react-icons/ti';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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

  const contactCards = [
    {
      label: 'Email',
      value: 'bachaeshetu@gmail.com',
      href: 'mailto:bachaeshetu@gmail.com',
      Icon: TiMail,
    },
    {
      label: 'Phone',
      value: '+251 974 79 13 53',
      href: 'tel:+251974791353',
      Icon: TiPhone,
    },
    {
      label: 'GitHub',
      value: 'bacha67',
      href: 'https://github.com/bacha67',
      Icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      value: 'Bacha Eshetu',
      href: 'https://www.linkedin.com/in/bacha-eshetu-7aa74635a',
      Icon: FaLinkedin,
    },
  ];

  return (
    <div className="app__contact-container-box">
      <section className="app__contact-section">
        <div className="app__contact-left">
          <div className="app__contact-kicker">GET IN TOUCH</div>
          <h2 className="app__contact-heading head-text">
            Let's <span className="purple-text">Connect</span>
          </h2>
          <p className="app__contact-desc">
            I'm actively looking for full-time roles in software development, AI engineering, or ICT. If you have an opportunity or just want to talk tech — reach out.
          </p>

          <div className="contact-cards">
            {contactCards.map((card, idx) => {
              const { Icon } = card;
              return (
                <a 
                  href={card.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-card-item" 
                  key={idx}
                >
                  <div className="contact-card-icon-box">
                    <Icon />
                  </div>
                  <div className="contact-card-info">
                    <span className="contact-card-label">{card.label}</span>
                    <span className="contact-card-value">{card.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="app__contact-right">
          {!isFormSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChangeInput}
                  className="form-textarea"
                  rows="6"
                  required
                />
              </div>
              {submitError && <div className="form-error-msg">{submitError}</div>}
              <button type="submit" className="form-submit-btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          ) : (
            <div className="form-success-box">
              <h3 className="success-heading">Thanks for reaching out!</h3>
              <p className="success-body">Your message was sent successfully.</p>
              <button 
                onClick={() => setIsFormSubmitted(false)} 
                className="success-reset-btn"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="app__bottom-footer">
        <div className="footer-left">
          © 2026 Bacha Eshetu · All rights reserved
        </div>
        <div className="footer-right">
          <a href="https://github.com/bacha67" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/bacha-eshetu-7aa74635a" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/BEsehtu" target="_blank" rel="noreferrer">Twitter/X</a>
          <a href="https://t.me/Binary114" target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </footer>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  ''
);
