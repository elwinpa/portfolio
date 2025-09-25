import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [shadow, setShadow] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      // scrolling down
      setVisible(false);
      
    } else {
      // scrolling up
      setVisible(true);
      setShadow(true);
    }
    if(currentScrollY === 0) {
        setShadow(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
  setVisible(true); 
}, []);

  return (
    <header className={`scroll-header ${visible ? 'visible' : 'hidden'} ${shadow ? 'shadow' : ''}`}>
      <div className="header-content">
        <div className="ep-logo" aria-label="EP logo" role="img" onClick={()=> window.location.href = "/"}>
      <span className="ep-e">E</span>
      <span className="ep-p">P</span>
    </div>
        <nav className="header-contents">
          <a className="header-mob" href="#about">About</a>
          <a className="header-mob"  href="#experience">Experience</a>
          <a className="header-mob" href="#projects">Projects</a>
          <a href="/resume.pdf"  download="Elwin-Resume.pdf" className="transparent-button transparent-button-active">Résumé</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
