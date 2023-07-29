import '../../component-styles/contact/Email.css';

export default function Email() {
  return (
    <section id="email">
      <h2 id="email-header">
        Have a question or suggestion?<br></br>Send us an email!
      </h2>

      <form
        id="email-form"
        action="https://formsubmit.co/a1b9e635dff993ceba1a3fd5f7540ad6"
        method="POST"
      >
        <label className="email-form-label" htmlFor="email-form-name">
          Name
        </label>
        <input id="email-form-name" type="text" name="Name" required></input>
        <label className="email-form-label" htmlFor="email-form-email">
          Your Email
        </label>
        <input id="email-form-email" type="email" name="Email" required></input>
        <label className="email-form-label" htmlFor="email-form-message">
          Message
        </label>
        <input
          id="email-form-message"
          type="text"
          name="Message"
          placeholder="Write your message here"
          required
        ></input>
        <input type="hidden" name="_next" value="http://localhost:5173"></input>
        <input
          type="hidden"
          name="_subject"
          value="New email from IVF!"
        ></input>
        <button id="email-form-submit-btn" className="pointer" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
