import React from 'react'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Tools from './components/Tools'
import './App.css'

const App = () => {
  return (
    <> 
      <div className='flex-position'> 
        <Projects/>
        <div className='flex-col'>
          <h1> Michael Reyes</h1>
          <AboutMe/>
          <ContactMe/>
          <Tools/>
        </div>
      </div>
   </>
  )
}

export default App