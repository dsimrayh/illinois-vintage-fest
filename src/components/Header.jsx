import '../component-styles/Header.css';
import ShopClosedModal from './ShopClosedModal';
import { useState } from 'react';

export default function Header({ setPage }) {
  const [shopClosedModalVisible, setShopClosedModalVisible] = useState(false);

  function handleShopBtnClick() {
    setShopClosedModalVisible(true);
  }

  return (
    <header id="header">
      <img
        id="logo-image"
        className="pointer"
        src="./src/assets/ivf-logo.png"
        alt="logo-image"
        onClick={() => setPage('home')}
      ></img>
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
      <button
        id="header-button"
        className="pointer"
        onClick={handleShopBtnClick}
      >
        Shop
      </button>
      {shopClosedModalVisible && (
        <ShopClosedModal
          setModalVisible={setShopClosedModalVisible}
        ></ShopClosedModal>
      )}
    </header>
  );
}
