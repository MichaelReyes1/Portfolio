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
      <div className="flex flex-col justify-center items-center">
      <div className='projects-mike'> 
      <h2>Projects</h2> 
     <div className="project-section flex flex-col items-center">
          <div className="project-section flex flex-col items-center">
             {/* Combined Frontend and Backend project with GitHub link */}
             <h3><a href="https://github.com/Shot-Callers" target="_blank" rel="noopener noreferrer">Shot Caller App - Frontend & Backend</a></h3>
            <p>Discover the innovation of ShotCallers, the basketball app by Team Shot Callers. With a powerful Ruby on Rails backend, a dynamic React frontend styled with React Bootstrap, we offer real-time connections and a vibrant court map for spontaneous pickup games. Redefine your basketball experience with user-centric design and seamless interactions. Elevate your game – explore ShotCallers today!</p>
      {/* Project 1 with GitHub link */}
      <h3><a href="https://github.com/MichaelReyes1/text-based-game-the-bench-warmers" target="_blank" rel="noopener noreferrer">Text-Based Game: The Bench Warmers</a></h3>
            <p>Experience The Bench Warmers, an interactive fiction project in Ruby executed in the IRB console. Immerse yourself in engaging narratives where your decisions influence the dynamically coded environment. Join us on a unique storytelling journey crafted with Ruby's prowess, unfolding a narrative like never before.</p>
          </div>
          </div>
    </div>
     </div>
    </TiltCard>
  )
}

export default Projects



   

