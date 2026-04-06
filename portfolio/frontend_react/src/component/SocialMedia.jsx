import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/bacha67" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/bacha-eshetu-7aa74635a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://x.com/BEsehtu" target="_blank" rel="noreferrer" aria-label="Twitter/X">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://t.me/Binary114" target="_blank" rel="noreferrer" aria-label="Telegram">
        <FaTelegramPlane />
      </a>
    </div>
  </div>
);

export default SocialMedia;
