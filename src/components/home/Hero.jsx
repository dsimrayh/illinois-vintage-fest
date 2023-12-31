import '../../component-styles/home/Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <div id="hero-text-container">
        <h1 id="hero-text">Illinois Vintage Fest</h1>
        <p id="hero-sub-text">Established in 2020</p>
      </div>
      <div id="hero-img-container">
        <img
          src="../src/assets/home-page-photo.jpg"
          id="hero-img"
          alt="home-page-photo"
        ></img>
      </div>
    </section>
  );
}
