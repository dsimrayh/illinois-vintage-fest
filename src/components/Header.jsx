import '../component-styles/Header.css';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import ShopClosedModal from './ShopClosedModal';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({
  setPage,
  mobileMenuVisible,
  setMobileMenuVisible,
}) {
  const [shopClosedModalVisible, setShopClosedModalVisible] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 50em)` });

  useEffect(() => {
    if (!isMobile) setMobileMenuVisible(false);
  }, [isMobile, setMobileMenuVisible]);

  return (
    <header id="header">
      {isMobile && (
        <MobileMenu
          setPage={setPage}
          mobileMenuVisible={mobileMenuVisible}
          setMobileMenuVisible={setMobileMenuVisible}
        ></MobileMenu>
      )}
      <img
        id="logo-image"
        className="pointer"
        src="./src/assets/ivf-logo.png"
        alt="logo-image"
        onClick={() => setPage('home')}
      ></img>
      {!isMobile && <Menu setPage={setPage}></Menu>}
      <button
        id="header-button"
        className="pointer"
        onClick={() => setShopClosedModalVisible(true)}
      >
        Shop
      </button>
      {isMobile && (
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="pointer"
          inverse
          onClick={() => setMobileMenuVisible(true)}
        ></FontAwesomeIcon>
      )}
      {shopClosedModalVisible && (
        <ShopClosedModal
          setModalVisible={setShopClosedModalVisible}
        ></ShopClosedModal>
      )}
    </header>
  );
}
