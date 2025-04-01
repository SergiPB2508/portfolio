import "./style.css";
import Header from "./components/Header/Header";

const render = () => {
  document.getElementById("app").innerHTML = `
    ${Header()}
  `;
}

render();