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
            <p>ShotCallers is a revolutionary basketball application crafted by Team Shot Callers, offering real-time connections and a dynamic court map for spontaneous pickup games. With a user-centric design and a commitment to redefining basketball experiences, ShotCallers is your go-to destination for an elevated and enjoyable journey in the world of basketball. Join our exciting mission to connect like-minded enthusiasts and elevate the game. Also, explore the robust backend, powered by Ruby on Rails, ensuring scalability and real-time updates to support our vision.</p>
      {/* Project 1 with GitHub link */}
      <h3><a href="https://github.com/MichaelReyes1/text-based-game-the-bench-warmers" target="_blank" rel="noopener noreferrer">Text-Based Game: The Bench Warmers</a></h3>
            <p> The Bench Warmers is a Ruby-based interactive fiction project executed in the IRB console, offering players an engaging narrative experience where their decisions influence the unfolding story in a dynamically coded environment.</p>
          </div>
          </div>
    </div>
     </div>
    </TiltCard>
  )
}

export default Projects



          //   {/* Frontend project with GitHub link */}
          //   <h3><a href="https://github.com/Shot-Callers/shotcaller-app-frontend" target="_blank" rel="noopener noreferrer">Shot Caller App - Frontend</a></h3>
          //   <p>Frontend project description goes here.</p>
          // </div>
          // <div className="project-section flex flex-col items-center">
          //   {/* Backend project with GitHub link */}
          //   <h3><a href="https://github.com/Shot-Callers/shotcaller-app-backend" target="_blank" rel="noopener noreferrer">Shot Caller App - Backend</a></h3>
          //   <p>Backend project description goes here.</p>

