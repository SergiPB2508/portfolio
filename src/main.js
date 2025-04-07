import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/Main";

const render = () => {
  document.getElementById("app").innerHTML = `
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
}

// render();