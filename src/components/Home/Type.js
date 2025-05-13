import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "MERN Stack Developer",
          "Competitive Programmer",
          "Tech Enthusiast",
          "Open Source Contributor",
          "Machine Learning Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
