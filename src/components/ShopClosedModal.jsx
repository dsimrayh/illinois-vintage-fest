import '../component-stylesheets/ShopClosedModal.css';

export default function ShopClosedModal({ setModalVisible }) {
  function handleBackBtnClick() {
    setModalVisible(false);
  }

  return (
    <div id="shop-closed-modal">
      <div id="shop-closed-text-container">
        <p id="shop-closed-text">Sorry bud, you&apos;re not allowed in here.</p>
        <p id="shop-closed-subtext">(The shop is under construction)</p>
      </div>
      <button id="go-back-btn" className="pointer" onClick={handleBackBtnClick}>
        Go back
      </button>
    </div>
  );
}
