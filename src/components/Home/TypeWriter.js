import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          'Front End Developer',
          'MERN Stack Developer',
          // "Software Engineer",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
