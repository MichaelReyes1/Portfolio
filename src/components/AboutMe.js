import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      {children}
    </motion.div>
  );
};

const AboutMe = () => {
  return (
    <TiltCard>
      <div>
        <div className="about-me-container">
          {" "}
          About Me
          <p className="about-me-paragraph">
          Precise, composed under pressure, and driven by efficiency, I bring a military-honed approach to web development. Proficient in Ruby on Rails, React, HTML, CSS, JavaScript, and PostgreSQL, I leverage collaborative methodologies with leadership skills gained in the military. Excited to contribute to impactful projects, let's connect on <a href="https://github.com/MichaelReyes1" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/michaelreyes5" target="_blank" rel="noopener noreferrer">LinkedIn</a> to explore potential collaborations
          </p>
        </div>
      </div>
    </TiltCard>
  );
};

export default AboutMe;


