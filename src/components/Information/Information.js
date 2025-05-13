import "./Information.css"
import data from "../../data/data"

const Information = (info) => {

  let title = `
          <h2 class="experience btn select">Experience</h2>
          <h2 class="studies btn noselect">Studies</h2>`
  
  if (info == "studies") {
    title = `
    <h2 class="experience btn noselect">Experience</h2>
    <h2 class="studies btn select">Studies</h2>`
  }

  return `
        <div class="title">
          ${title}
        </div>
        ${printInfo(info)}`;
}

export default Information;

const printInfo = (select) => {
  let info = '';
  let arrayInfo = data.experience;

  if (select == "studies") {
    arrayInfo = data.studies;
  }

  for (let i = 0; i < arrayInfo.length; i++) {
    info += `
        <div class="info">
          <strong>${arrayInfo[i].title}</strong>
          <p>${arrayInfo[i].description}</p>
        </div>`
  }
  return info
}