import "./Projects.css"
import Card from "../Card/Card"


const addProjects = () => {
    
    let projects = "";

    for (let i = 0; i < 4; i++) {
        projects += Card();
    }
    
    return projects;
}


const Projects = () => {
    return `
        <section id="projects">
          <h2>My Projects</h2>
          <p>Some things I’ve built so far</p>
          <div class="projects">
          ${addProjects()}
          </div>
        </section>`;
}

export default Projects;