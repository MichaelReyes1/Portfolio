import React from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import "./App.css";



const App = () => {
  return (
    <div className="app-container ">
      <div className="flex-position d-flex flex-column flex-sm-row mx-auto justify-content-center align-items-center">
        <Projects />
        <div className="flex-col">
          <h1 className="header-style">Michael Reyes </h1>
          <AboutMe />
          <div className="flex-container">
            <ContactMe />
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
