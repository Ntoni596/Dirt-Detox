import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from "../assets/Dirt-Detox-Logo.svg"
import heroImage from "../assets/Hero-Section.png"

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const smoothScroll = (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        };

        const handleScroll = () => {
            const scrollThreshold = 50; // Adjust as needed
            if (window.scrollY > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', smoothScroll);
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
        <div >
            <div className='hero'>
                <div className='hero-image'>
                    <img src={heroImage} alt="Hero Image" />
                </div>
                <div className='hero-text'>

                </div>
            </div>

            <nav id={isScrolled ? 'scrolled-navigation' : 'navigation'}>
                <div className='nav-logo'>
                    <img src={navLogo} alt='Dirt Detox Logo' />
                </div>
                <div className="nav-links">
                    <Link to="#about">About</Link>
                    <Link to="#services">Services</Link>
                    <Link to="#contact">Contact</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
