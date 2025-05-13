import "./Card.css"

const Card = (project) => {
    return `
            <div class="card">
              <img src="${project.img}" alt="">
              <p class="project">${project.title}</p>
              <p>${project.description}</p>
              <a href="${project.link}">View App</a>
            </div>`;
}

export default Card;