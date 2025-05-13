import data from "../../data/data";
import "./Home.css"

const Home = () => {



    return `
        <section id="home">
          <div class="text">
            <h3>Hello 👋🏻</h3>
            <h1>I'm a web Developer</h1>
            <h3>I build thing fot web</h3>
          </div>
          <div class="profile" style="background-image: url('${data.img}');"></div>
        </section>`;
}

export default Home;