import '../component-stylesheets/PastEvents.css';

export default function PastEvents() {
  return (
    <section id="past-events">
      <h3 id="past-events-heading">Past Events</h3>
      <div id="past-events-img-container">
        <img
          src="../src/assets/flyers/ivf-13.jpg"
          alt="IVF 13"
          className="past-events-img pointer"
        />
        <img
          src="../src/assets/flyers/endless-summer-vintage-market.jpg"
          alt="Endless Summer"
          className="past-events-img pointer"
        />
        <img
          src="../src/assets/flyers/screw-city-vintage-market.jpg"
          alt="Screw City"
          className="past-events-img pointer"
        />
        <img
          src="../src/assets/flyers/ivf-12.jpg"
          alt="IVF 12"
          className="past-events-img pointer"
        />
        <img
          src="../src/assets/flyers/blono-vintage-market.jpg"
          alt="BloNo Vintage Market"
          className="past-events-img pointer"
        />
      </div>
    </section>
  );
}
