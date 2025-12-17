import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span>Roshan Saifi</span>. All rights reserved.
      </p>

      <div className="footer-links">
        <a href="https://github.com/RoshanSaifi93" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/roshan-saifi-104619382/" target="_blank">LinkedIn</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
