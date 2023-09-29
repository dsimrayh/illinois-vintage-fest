import '../../component-styles/upcoming-events/UpcomingEventsContainer.css';
import UpcomingEventTile from './UpcomingEventTile';

export default function UpcomingEventsContainer() {
  // eventInfo will store event img src and event description
  const eventInfo = [
    ['./src/assets/flyers/ivf-10.jpg', 'IVF 14'],
    ['./src/assets/flyers/ivf-10.jpg', 'IVF 14'],
    ['./src/assets/flyers/ivf-10.jpg', 'IVF 14'],
    ['./src/assets/flyers/ivf-10.jpg', 'IVF 14'],
    ['./src/assets/flyers/ivf-10.jpg', 'IVF 14'],
  ];
  const eventTiles = eventInfo.map((event, idx) => {
    return <UpcomingEventTile key={idx} event={event}></UpcomingEventTile>;
  });

  return (
    <div id="upcoming-events-container">
      <h1 id="upcoming-events-header">UPCOMING EVENTS</h1>
      <ol id="upcoming-events-list">{eventTiles}</ol>
    </div>
  );
}
