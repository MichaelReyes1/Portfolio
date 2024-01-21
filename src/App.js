import React from 'react'
import { FaGithubAlt } from 'react-icons/fa';
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Tools from './components/Tools'
import './App.css'




const App = () => {
  
  return (
    <> 
    <div className='app-container'>
      <div className='flex-position'> 
        <Projects/>
        <div className='flex-col'>
          <h1 className='header-style'>Michael Reyes <FaGithubAlt /></h1>
          <AboutMe/>
          <div className='flex-container'>
          <ContactMe/>
          <Tools/>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}


export default App


