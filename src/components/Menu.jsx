import '../component-styles/Menu.css';

export default function Menu({ setPage }) {
  return (
    <nav id="nav">
      <ul id="nav-ul">
        <li
          className="nav-item pointer"
          id="upcoming"
          onClick={(e) => setPage(e.target.id)}
        >
          Upcoming
        </li>
        <li
          className="nav-item pointer"
          id="previous"
          onClick={(e) => setPage(e.target.id)}
        >
          Previous
        </li>
        <li
          className="nav-item pointer"
          id="our story"
          onClick={(e) => setPage(e.target.id)}
        >
          Our Story
        </li>
        <li
          className="nav-item pointer"
          id="contact"
          onClick={(e) => setPage(e.target.id)}
        >
          Contact
        </li>
        <li
          className="nav-item pointer"
          id="FAQ"
          onClick={(e) => setPage(e.target.id)}
        >
          FAQ
        </li>
      </ul>
    </nav>
  );
}
