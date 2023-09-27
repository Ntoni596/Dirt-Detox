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

    const logo = document.querySelector('.nav-logo img');
    logo.addEventListener('click', () => {
      smoothScroll('hero'); // Replace 'hero' with the ID of the top section of your page
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
      logo.removeEventListener('click', () => {
        smoothScroll('hero'); // Remove the logo click event listener
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="hero" className="hero">
        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
        <div className="hero-text">
          <h1>Where cleanliness meets professionalism.<br></br>Let's make your workplace shine!</h1>
          <a href="#contact"className='contact-button'>Get In Touch!</a>
        </div>
      </div>
      <nav id={isScrolled ? 'scrolled-navigation' : 'navigation'}>
        <div className="nav-logo">
          <img src={navLogo} alt="Dirt Detox Logo" />
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a className="contact-button" href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
