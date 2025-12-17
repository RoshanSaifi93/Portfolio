import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills fade-in">
      <h2>My Skills</h2>

      <div className="skills-container">
        <div className="skill-card fade-in" style={{ "--i": 1 }}>HTML5</div>
        <div className="skill-card fade-in" style={{ "--i": 2 }}>CSS3</div>
        <div className="skill-card fade-in" style={{ "--i": 3 }}>JavaScript</div>
        <div className="skill-card fade-in" style={{ "--i": 4 }}>React.js</div>
        <div className="skill-card fade-in" style={{ "--i": 5 }}>Git & GitHub</div>
        <div className="skill-card fade-in" style={{ "--i": 6 }}>Responsive Design</div>
      </div>
    </section>
  );
};

export default Skills;
