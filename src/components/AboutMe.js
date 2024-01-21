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
      <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
        <div className="about-me-container">
          {" "}
          About Me
          <p className="about-me-paragraph">
            Leveraging my military background, I bring precision, composure
            under pressure, and a passion for efficiency to web development.
            Similar to overseeing aircraft on the Flight Deck, I thrive on
            bringing order to digital experiences. Proficient in languages like
            Ruby on Rails, React, HTML, CSS, JavaScript, and PostgreSQL, I
            embrace collaborative and adaptable approaches, drawing on
            leadership and problem-solving skills gained in the military.
            Excited to make a meaningful impact as a software developer.
          </p>
        </div>
      </div>
    </TiltCard>
  );
};

export default AboutMe;
