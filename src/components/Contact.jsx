import '../component-stylesheets/Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <h4 id="contact-heading">Shoot us a text</h4>
      <p id="contact-subtext">
        Send us a text to subscribe for SMS updates. You can also text us with
        any questions or just to say hello!
      </p>
      <p id="contact-phone">708-627-9815</p>

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
