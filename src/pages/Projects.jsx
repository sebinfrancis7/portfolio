import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/data'

function project(project, i) {
    return (
        <ProjectCard project={project} key={i} />
    );
}

function Projects() {
    return (
        <div id="projects" className="container outer-content">
            <div className="inner-content">
                <p className="heading-text text-center" > <u>ＰＲＯＪＥＣＴＳ</u> </p>

                <div className="project-row">
                    {projects.map(project)}
                </div>
            </div>
        </div>
    )
}

export default Projects
