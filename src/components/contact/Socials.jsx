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
          <img className="socials-img" src={Instagram} alt="Instagram"></img>
          <p className="socials-name">Instagram</p>
        </li>
        <li className="socials-link">
          <img className="socials-img" src={TikTok} alt="TikTok"></img>
          <p className="socials-name">TikTok</p>
        </li>
        <li className="socials-link">
          <img className="socials-img" src={Facebook} alt="Facebook"></img>
          <p className="socials-name">Facebook</p>
        </li>
        <li className="socials-link">
          <img className="socials-img" src={LinkedIn} alt="LinkedIn"></img>
          <p className="socials-name">LinkedIn</p>
        </li>
      </ul>
    </section>
  );
}
