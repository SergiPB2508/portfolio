import "./Projects.css"
import Card from "../Card/Card"
import data from "../../data/data";


const addProjects = () => {
    

    let projects = "";

    for (let i = 0; i < data.projects.length; i++) {
        projects += Card(data.projects[i]);
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