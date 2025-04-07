import "./Main.css"
import Home from "../Home/Home";
import Aboutme from "../Aboutme/Aboutme"

const Main = () => {
    return `
    ${Home()}
    ${Aboutme()}
    `;
}

export default Main;