import '../component-styles/MobileMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MobileMenu({
  setPage,
  mobileMenuVisible,
  setMobileMenuVisible,
}) {
  const handleNavItemClick = (e) => {
    setPage(e.target.id);
    setMobileMenuVisible(false);
  };

  return (
    <nav id="mobile-nav" className={mobileMenuVisible ? 'visible' : 'hidden'}>
      <div className="icon-wrapper">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="pointer"
          onClick={() => setMobileMenuVisible(false)}
        ></FontAwesomeIcon>
      </div>
      <ul id="mobile-nav-ul">
        <li
          className="mobile-nav-item pointer"
          id="home"
          onClick={(e) => handleNavItemClick(e)}
        >
          Home
        </li>
        <li
          className="mobile-nav-item pointer"
          id="upcoming"
          onClick={(e) => handleNavItemClick(e)}
        >
          Upcoming
        </li>
        <li
          className="mobile-nav-item pointer"
          id="previous"
          onClick={(e) => handleNavItemClick(e)}
        >
          Previous
        </li>
        <li
          className="mobile-nav-item pointer"
          id="our story"
          onClick={(e) => handleNavItemClick(e)}
        >
          Our Story
        </li>
        <li
          className="mobile-nav-item pointer"
          id="contact"
          onClick={(e) => handleNavItemClick(e)}
        >
          Contact
        </li>
        <li
          className="mobile-nav-item pointer"
          id="FAQ"
          onClick={(e) => handleNavItemClick(e)}
        >
          FAQ
        </li>
      </ul>
    </nav>
  );
}
