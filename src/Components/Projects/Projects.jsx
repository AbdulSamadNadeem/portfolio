import React from 'react'
import { projects } from '../constants/app'
import ProjectCard from '../ProjectCards/ProjectCards'
const Projects = () => {
  return (
    <div className="projects-section py-20 bg-black">
    <div className="text-center mb-10">
      <h1 className="text-5xl text-white font-extrabold font-sans mb-4">My Projects</h1>
      <p className="text-3xl text-gray-400">Check out some of my recent work.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  </div>
  )
}

export default Projects