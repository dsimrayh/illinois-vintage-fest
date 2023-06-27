import '../component-stylesheets/Header.css';

export default function Header() {
  function loadHomePage() {
    console.log('load home page');
  }

  return (
    <header id="header">
      <img
        id="logo-image"
        src="./src/assets/ivf-logo.png"
        alt="logo-image"
        onClick={loadHomePage}
      ></img>
      <nav id="nav">
        <ul id="nav-ul">
          <li className="nav-item">Upcoming</li>
          <li className="nav-item">Previous</li>
          <li className="nav-item">Our Story</li>
          <li className="nav-item">Shop</li>
          <li className="nav-item">FAQ</li>
        </ul>
      </nav>
      <button id="header-button">Vintage Fest</button>
    </header>
  );
}
