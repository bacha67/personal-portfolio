import React from 'react';
import SocialMedia from '../component/SocialMedia';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames || ''}`}>
      <div className="app__wrapper">
        <Component />
      </div>

      {/* Fixed social bar — visible on every section */}
      <div className="app__social-fixed">
        <SocialMedia />
      </div>
    </div>
  );
};

export default AppWrap;
