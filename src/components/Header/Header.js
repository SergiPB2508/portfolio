import "./Header.css";

const Header = () => {
    return `
      <header>
        <p>Sergi Pont</p>
        <ul class="menu">
          <li><a href="">Home</a></li>
          <li><a href="">About me</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Experience/Studies</a></li>
          <li><a href="">Projects</a></li>
        </ul>
        <div class="menuM">
          <img src="assets/icon/menu.png" alt="menu">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About me</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Experience/Studies</a></li>
            <li><a href="">Projects</a></li>
            <li id="contactM"><a href="">Contact</a></li>
          </ul>
        </div>
        <a href="" class="menu">Contact</a>
      </header>`;
}

export default Header;