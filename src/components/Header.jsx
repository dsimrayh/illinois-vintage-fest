import '../component-stylesheets/Header.css';
import ShopClosedModal from '../components/ShopClosedModal';
import { useState } from 'react';

export default function Header() {
  const [shopClosedModalVisible, setShopClosedModalVisible] = useState(false);

  function loadHomePage() {
    console.log('load home page');
  }

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
        onClick={loadHomePage}
      ></img>
      <nav id="nav">
        <ul id="nav-ul">
          <li className="nav-item pointer">Upcoming</li>
          <li className="nav-item pointer">Previous</li>
          <li className="nav-item pointer">Our Story</li>
          <li className="nav-item pointer">Contact</li>
          <li className="nav-item pointer">FAQ</li>
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
