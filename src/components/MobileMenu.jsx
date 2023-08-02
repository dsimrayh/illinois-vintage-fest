import '../component-styles/MobileMenu.css';

export default function MobileMenu({ setPage }) {
  return (
    <nav id="mobile-nav">
      <ul id="mobile-nav-ul">
        <li
          className="mobile-nav-item pointer"
          id="upcoming"
          onClick={(e) => setPage(e.target.id)}
        >
          Upcoming
        </li>
        <li
          className="mobile-nav-item pointer"
          id="previous"
          onClick={(e) => setPage(e.target.id)}
        >
          Previous
        </li>
        <li
          className="mobile-nav-item pointer"
          id="our story"
          onClick={(e) => setPage(e.target.id)}
        >
          Our Story
        </li>
        <li
          className="mobile-nav-item pointer"
          id="contact"
          onClick={(e) => setPage(e.target.id)}
        >
          Contact
        </li>
        <li
          className="mobile-nav-item pointer"
          id="FAQ"
          onClick={(e) => setPage(e.target.id)}
        >
          FAQ
        </li>
      </ul>
    </nav>
  );
}
