import '../../component-styles/home/NextEvent.css';

export default function NextEvent() {
  return (
    <section id="next-event">
      <div id="flyer-container">
        <img
          id="flyer-img"
          src="../src/assets/flyers/ivf-14.jpg"
          alt="next-event-flyer"
        ></img>
      </div>
      <div id="description-container">
        <div id="description-text-wrapper">
          <h2 id="next-event-heading">Illinois Vintage Fest 14</h2>
          <p id="next-event-description">
            We will be returning to the Geneva Commons on July 15th from
            11AM-5PM. Come shop with the best vendors in the Midwest!
          </p>
        </div>
        <div id="description-button-wrapper">
          <button id="learn-more-btn" className="pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
