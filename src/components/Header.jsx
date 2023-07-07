import '../component-stylesheets/Header.css';

export default function Header() {
  function loadHomePage() {
    console.log('load home page');
  }

  return (
    <header id="header">
      <img
        id="logo-image"
        className="pointer"
        src="./src/assets/ivf-logo.png"
        alt="logo-image"
        onClick={loadHomePage}
      ></img>
      <nav id="nav">
        <ul id="nav-ul">
          <li className="nav-item pointer">Upcoming</li>
          <li className="nav-item pointer">Previous</li>
          <li className="nav-item pointer">Our Story</li>
          <li className="nav-item pointer">Contact</li>
          <li className="nav-item pointer">FAQ</li>
        </ul>
      </nav>
      <button id="header-button" className="pointer">
        Shop
      </button>
    </header>
  );
}
