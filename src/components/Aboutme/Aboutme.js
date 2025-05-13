import "./Aboutme.css"
import data from "../../data/data";

const Aboutme = () => {
    return `
        <section id="aboutme">
          <h2>About me</h2>
          <p>${data.aboutme}</p>
        </section>`;
}

export default Aboutme;