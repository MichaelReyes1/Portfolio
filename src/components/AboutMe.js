import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const TiltCard = ({ children }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  };

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      {children}
    </motion.div>
  )
}



const AboutMe = () => {
  return (
    <TiltCard>
    <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
    <div className='about-me-container'> About Me
    <p className='about-me-paragarph'>
            Hello! I'm Michael Reyes, a former Aircraft Director in the Navy transitioning to a coding career at Learn Academy.
            Drawing on my military background, I've cultivated precision and composure under pressure—skills I'm eager to apply
            in the dynamic world of web development. Much like overseeing aircraft on the Flight Deck, I find excitement in bringing
            order and efficiency to digital experiences. As I navigate Learn Academy's curriculum, I'm mastering languages such as
            Ruby on Rails, React, HTML, CSS, JavaScript, and PostgreSQL. Proficient in test-driven development, I embrace collaborative
            and adaptable approaches. My military experience equipped me with leadership and problem-solving skills, now channeled into
            creating intuitive digital experiences. I'm enthusiastic about leveraging these skills to make a meaningful impact as a
            software developer.
          </p>
      </div>
    </div>
  </TiltCard>
  )
}

export default AboutMe