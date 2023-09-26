import React from 'react';
import aboutImage from '../assets/about.jpg'

function About() {
  return (
    <div>
      <div className='heading'>
        About Us
      </div>
      <div className='text-content'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus nisi, laoreet quis nibh vel, tempor sagittis enim. Nam laoreet est vitae risus euismod consequat. Morbi dignissim felis in orci malesuada, quis interdum arcu malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eu lectus augue. Aenean interdum odio quis lorem tincidunt condimentum. Etiam cursus placerat fermentum. Proin et elit nunc. Etiam iaculis interdum nulla, nec tincidunt mi consectetur eget.
          Praesent pretium mauris in diam laoreet fringilla. Sed in metus eget ex posuere maximus. In diam urna, imperdiet in ultrices et, tincidunt molestie purus. In egestas pharetra mi, in sodales massa viverra eu. Sed eleifend mi eu diam ullamcorper, id vehicula lacus aliquet. Suspendisse tincidunt scelerisque est sed luctus. Fusce mattis orci ac velit tristique, non tincidunt tortor aliquet. Nullam vel turpis sed mi congue condimentum. Aliquam sit amet pulvinar arcu. Fusce scelerisque risus non enim commodo, quis mattis ante elementum. In feugiat eget est vitae facilisis. Cras at felis a massa consequat ultrices. Praesent sit amet convallis est. Nullam vitae turpis mattis, porttitor ante in, finibus erat. Donec convallis interdum mi a lacinia.
        </p>
        <img src={aboutImage}></img>
      </div>
    </div>
  );
}

export default About;