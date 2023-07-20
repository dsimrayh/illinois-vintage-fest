import '../../component-styles/contact/Socials.css';
import Instagram from '../../assets/socials-icons/instagram.png';
import TikTok from '../../assets/socials-icons/tik-tok.png';
import Facebook from '../../assets/socials-icons/facebook.png';
import LinkedIn from '../../assets/socials-icons/linkedin.png';

export default function Socials() {
  return (
    <section id="socials">
      <h1 id="socials-header">Check us out on our socials!</h1>
      <ul id="socials-links-container">
        <li className="socials-link">
          <a
            href="https://www.instagram.com/illinoisvintagefest/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socials-img pointer"
              src={Instagram}
              alt="Instagram"
            ></img>
            <p className="socials-name pointer">Instagram</p>
          </a>
        </li>
        <li className="socials-link">
          <a
            href="https://www.tiktok.com/@illinoisvintagefest"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socials-img pointer"
              src={TikTok}
              alt="TikTok"
            ></img>
            <p className="socials-name pointer">TikTok</p>
          </a>
        </li>
        <li className="socials-link">
          <a
            href="https://www.facebook.com/illinoisvintagefest/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socials-img pointer"
              src={Facebook}
              alt="Facebook"
            ></img>
            <p className="socials-name pointer">Facebook</p>
          </a>
        </li>
        <li className="socials-link">
          <a
            href="https://www.linkedin.com/company/illinois-vintage-fest/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="socials-img pointer"
              src={LinkedIn}
              alt="LinkedIn"
            ></img>
            <p className="socials-name pointer">LinkedIn</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
