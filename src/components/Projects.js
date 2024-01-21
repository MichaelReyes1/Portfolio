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
        overflow: 'hidden'
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      {children}
    </motion.div>
  )
}




const Projects = () => {
  return (
    <TiltCard>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
      <div className='projects-mike'> Projects 
     </div>
     <div className="project-section flex flex-col items-center">
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="project-section flex flex-col items-center">
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
    </div>
    </TiltCard>
  )
}

export default Projects

// absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg


