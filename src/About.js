import React from 'react';

const About = () => (
    <div className='about'>
      <h1>About</h1>
      <p>I built this to play with the idea of speaking in gifs using IBM's Watson text to speech and the Giphy API's translate feature. Its just a toy so its not perfect.</p>
      <ol className="instructions">
        <li>Click start button</li>
        <li>Click allow on auth pop-up to use your mic through the browser</li>
        <li>Speak freely and enjoy your new visual language!</li>
      </ol>
    </div>
  );

  export default About;