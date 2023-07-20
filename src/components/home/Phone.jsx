import '../../component-styles/home/Phone.css';

export default function Phone() {
  return (
    <section id="phone">
      <h4 id="phone-heading">Shoot us a text</h4>
      <p id="phone-subtext">
        Send us a text to subscribe for SMS updates. You can also text us with
        any questions or just to say hello!
      </p>
      <p id="phone-number">708-627-9815</p>

      <a
        href="https://my.community.com/illinoisvintagefest"
        target="_blank"
        rel="noreferrer"
      >
        <button id="send-text-btn" className="pointer">
          Send a text
        </button>
      </a>
    </section>
  );
}
