import React, { useEffect, useState } from 'react';
import navLogo from '../assets/Dirt-Detox-Logo.svg';
import heroImage from '../assets/Hero-Section.png';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Adjust as needed
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const smoothScroll = (targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('.nav-links a');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        smoothScroll(targetId);
      });
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
        <div className="hero-text"></div>
      </div>

      <nav id={isScrolled ? 'scrolled-navigation' : 'navigation'}>
        <div className="nav-logo">
          <img src={navLogo} alt="Dirt Detox Logo" />
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
