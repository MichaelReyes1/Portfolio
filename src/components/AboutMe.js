import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="about-me-container">
        {" "}
        About Me
        <p className="about-me-paragraph">
          Precise, composed under pressure, and driven by efficiency, I bring a
          military-honed approach to web development. Proficient in Ruby on
          Rails, React, CSS, JavaScript, and PostgreSQL, I leverage
          collaborative methodologies with leadership skills gained in the
          military. Excited to contribute to impactful projects, let's connect
          on{" "}
          <a
            href="https://github.com/MichaelReyes1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/michaelreyes5"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          to explore potential collaborations
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
