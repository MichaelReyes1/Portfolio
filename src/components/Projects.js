import React from "react";



const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="projects-mike">
        <h2>Projects</h2>
        <div className="project-section flex flex-col items-center">
          <div className="project-section flex flex-col items-center">
            {/* Combined Frontend and Backend project with GitHub link */}
            <h3>
              <a
                href="https://github.com/Shot-Callers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shot Caller App - Frontend & Backend
              </a>
            </h3>
            <p>
              Discover the innovation of ShotCallers, the basketball app by Team
              Shot Callers. With a powerful Ruby on Rails backend, a dynamic
              React frontend styled with React Bootstrap, we offer real-time
              connections and a vibrant court map for spontaneous pickup games.
              Redefine your basketball experience with user-centric design and
              seamless interactions. Elevate your game – explore ShotCallers
              today!
            </p>
            {/* Project 1 with GitHub link */}
            <h3>
              <a
                href="https://github.com/MichaelReyes1/text-based-game-the-bench-warmers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Text-Based Game: The Bench Warmers
              </a>
            </h3>
            <p>
              Experience The Bench Warmers, an interactive fiction project in
              Ruby executed in the IRB console. Immerse yourself in engaging
              narratives where your decisions influence the dynamically coded
              environment. Join us on a unique storytelling journey crafted with
              Ruby's prowess.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
