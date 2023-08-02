import '../component-styles/Header.css';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import ShopClosedModal from './ShopClosedModal';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Header({ setPage }) {
  const [shopClosedModalVisible, setShopClosedModalVisible] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 50em)` });

  return (
    <header id="header">
      {isMobile && <MobileMenu setPage={setPage}></MobileMenu>}
      <img
        id="logo-image"
        className="pointer"
        src="./src/assets/ivf-logo.png"
        alt="logo-image"
        onClick={() => setPage('home')}
      ></img>
      {isMobile ? <p>ICON</p> : <Menu setPage={setPage}></Menu>}
      <button
        id="header-button"
        className="pointer"
        onClick={() => setShopClosedModalVisible(true)}
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
