import "./Main.css"
import Home from "../Home/Home";
import Aboutme from "../Aboutme/Aboutme"
import Skills from "../Skills/Skills"
import Information from "../Information/Information";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

let info = "experience"

export const Main = () => {
    return `
    <main>
        ${Home()}
        ${Aboutme()}
        ${Skills()}
        <section id="information">
            ${Information(info)}
        </section>
        ${Projects()}
        ${Contact()}
    </main>
    `;
}

export const addMainListeners = () => {
    document.addEventListener("click", (e) => {
        if (e.target.classList[1] == "btn") {
            info = e.target.classList[0];

            information.innerHTML = `${Information(info)}`;
        }
    });
}