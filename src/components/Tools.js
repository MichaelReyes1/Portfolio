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



const Tools = () => {
  return (
    <TiltCard>
     <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
      <div className='tools-container'>
      <div className='tools-title'>
       Tools I use .. 
        <div className='image-container'>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
       alt="tool-logo"
       style={{ height: '50px', width: '50px' }} />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  alt="tool Logo"
      style={{ height: '50px', width: '50px' }} />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"        alt="tool-logo" 
     style={{ height: '50px', width: '50px' }}
    className="mb-4" /> 
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" 
    alt="tool-logo"
      style={{ height: '50px', width: '50px' }}/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" 
    alt="tool-logo"
    style={{ height: '50px', width: '50px' }}/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    alt="tool-logo"
    style={{ height: '50px', width: '50px' }}/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" 
     alt="tool-logo"
     style={{ height: '50px', width: '50px' }}/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
     alt="tool-logo"
     style={{ height: '50px', width: '50px' }}/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
     alt="tool-logo"
     style={{ height: '50px', width: '50px' }}
     />
     </div>
     </div>
    </div>
  </div>
</TiltCard>
  )
}

export default Tools