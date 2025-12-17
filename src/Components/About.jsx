import "./About.css";

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="about-container">
        {/* Image animation */}
        <div className="about-image fade-left">
          <img src="/profile.jpg" alt="Roshan Saifi" />
        </div>

        {/* Content animation */}
        <div className="about-content fade-right">
          <h2>About Me</h2>

          <p>
            I am <span>Roshan Saifi</span>, a passionate React Developer with
            strong knowledge of JavaScript, HTML, and CSS.
          </p>

          <p>
            My goal is to work in a professional environment where I can enhance
            my skills and contribute to real-world projects.
          </p>

          <a
            href="/Resume.pdf"
            target="_blank"
            className="btn primary"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
