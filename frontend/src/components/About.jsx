import React from 'react';
import aboutImage from '../assets/about.jpg'
import placeholder from '../assets/placeholder.jpg'
import placeholder2 from '../assets/placeholder.jpg'
import placeholder3 from '../assets/placeholder.jpg'

function About() {
  return (
    <div>
      <div className='heading'>
        About Us
      </div>
      <div className='text-content'>
        <p>
          Established in 2022, Dirt Detox is a proudly New Zealand-owned and operated cleaning company. We have quickly become the go-to choice for commercial, home, and bathroom cleaning services, thanks to our unwavering commitment to excellence and our reputation for providing prompt and efficient cleaning solutions.
          <br></br>
          <br></br>
          At Dirt Detox, we are deeply rooted in the vibrant community of Wellington. Our local knowledge and strong ties to the region enable us to understand and cater to the unique cleaning needs of our fellow Wellingtonians. We're not just a cleaning company; we're your neighbors, and we take pride in contributing to the cleanliness and well-being of our community.
          <br></br>
          <br></br>
          Our dedicated team of cleaning professionals specializes in a wide range of services to meet your specific needs:
          <br></br>
          <br></br>
          <li>
            Commercial Cleaning: We know that a clean and inviting workspace is essential for your business's success. Our comprehensive commercial cleaning services ensure that your office or business premises remain impeccable, fostering a productive and positive environment.
          </li>
          <br></br>
          <li>
            Home Cleaning: Your home is your sanctuary, and we treat it with the utmost care and respect. Our residential cleaning services cover everything from regular upkeep to deep cleaning, leaving your living spaces refreshed and rejuvenated.
          </li>
          <br></br>
          <li>
            Bathroom Cleaning: Bathrooms are often the trickiest areas to keep clean. Our bathroom cleaning experts pay meticulous attention to detail, leaving your bathroom spotless and sanitized, just the way you like it.
          </li>
          <br></br>
          Our success hinges on our dedicated and professional cleaning team. Each member of the Dirt Detox family is carefully selected, extensively trained, and shares our commitment to maintaining the highest cleaning standards. Our personnel are not just cleaners; they are ambassadors of our core values, including integrity, reliability, and customer satisfaction.
          <br></br>
          <br></br>
          We invite you to join us on our mission to create cleaner, healthier spaces in Wellington and beyond. Whether you're a business owner, a homeowner, or someone looking to refresh your bathroom, Dirt Detox is your trusted partner every step of the way.

          Thank you for considering Dirt Detox as your cleaning solution provider. Get in touch with us today to experience the unparalleled quality and efficiency that has made us Wellington's premier cleaning service.

          Your cleanliness is our business, and your satisfaction is our mission.
        </p>
        <div className='image-container'>
        <div id='image-one'>
            <img className="grid-image" src={placeholder}></img>
          </div>
          <div id='image-two'>
            <img className="grid-image" src={placeholder}></img>
          </div>          
          <div id='image-three'>
            <img className="grid-image" src={placeholder}></img>
          </div>          
          <div id='image-four'>
            <img className="grid-image" src={placeholder}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;