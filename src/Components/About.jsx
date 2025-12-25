import "./About.css";

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="about-container">
        <div className="about-image fade-left">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Roshan Saifi"
          />
        </div>

        <div className="about-content fade-right">
          <h2>About Me</h2>

          <p>
            I am <span>Roshan Saifi</span>, a passionate Frontend Developer with
            strong knowledge of HTML, CSS, JavaScript and React.
          </p>

          <p>
            My goal is to work in a professional environment where I can enhance
            my skills and contribute to real-world projects.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
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
