import '../component-stylesheets/Marquee.css';

export default function Marquee() {
  const MarqueeBlock = () => (
    <div className="marquee-block">
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-purple.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-red.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-purple.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-red.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-purple.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-red.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-purple.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-red.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-purple.png"
        width="60"
        height="60"
      ></img>
      <p>Illinois Vintage Fest</p>
      <img
        src="../src/assets/stickers/balloon-red.png"
        width="60"
        height="60"
      ></img>
    </div>
  );

  return (
    <section id="marquee-wrapper">
      <div id="marquee">
        <MarqueeBlock></MarqueeBlock>
        <MarqueeBlock></MarqueeBlock>
        <MarqueeBlock></MarqueeBlock>
        <MarqueeBlock></MarqueeBlock>
        <MarqueeBlock></MarqueeBlock>
      </div>
    </section>
  );
}
