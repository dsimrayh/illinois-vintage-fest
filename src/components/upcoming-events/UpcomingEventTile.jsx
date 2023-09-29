import '../../component-styles/upcoming-events/UpcomingEventTile.css';

export default function UpcomingEventTile({ event }) {
  return (
    <li className="upcoming-event-tile">
      <img
        src={event[0]}
        alt={event[0]}
        className="upcoming-event-img pointer"
      ></img>
      <div className="upcoming-event-info">
        <p className="upcoming-event-info-text">{event[1]}</p>
      </div>
    </li>
  );
}
