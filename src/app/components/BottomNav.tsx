import React, { useState, useEffect, useRef } from 'react';

const BottomNav = () => {

    
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      // scrolling down
      setVisible(false);
      
    } else {
      // scrolling up
      setVisible(true);
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
    <nav className= {`bottom-nav ${visible ? 'visible' : 'hidden'}`}>
      <a href="#about" className="nav-item">
        <i className="fa fa-user"></i>
        <span>About</span>
      </a>
      <a href="#experience" className="nav-item">
        <i className="fa fa-briefcase"></i>
        <span>Experience</span>
      </a>
      <a href="#projects" className="nav-item">
        <i className="fa fa-tasks"></i>
        <span>Work</span>
      </a>
    </nav>
  );
};

export default BottomNav;
