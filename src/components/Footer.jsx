import '../component-stylesheets/Footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <p id="footer-text">
        Copyright © 2023 |{' '}
        <a
          href="https://github.com/dsimrayh"
          target="_blank"
          id="github-link"
          className="pointer" rel="noreferrer"
        >
          dsimrayh
        </a>
      </p>
    </footer>
  );
}
