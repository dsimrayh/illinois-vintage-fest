import '../component-styles/upcoming-events/UpcomingEvents.css';
import UpcomingEventTile from '../components/upcoming-events/UpcomingEventTile';

export default function UpcomingEvents() {
  // eventInfo will store event img src and event description
  const eventInfo = [];
  const eventTiles = eventInfo.map((event) => {
    <UpcomingEventTile event={event}></UpcomingEventTile>;
  });

  return (
    <main id="main">
      <p id="test">PLACEHOLDER TEXT</p>
      <ol id="event-list">{eventTiles}</ol>
    </main>
  );
}
