

import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and modern CSS.",
    live: "#",
    github: "#",
  },
  {
    title: "Todo App",
    description: "Task management application using React hooks.",
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using API and async JavaScript.",
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce UI",
    description: "Frontend UI for an e-commerce website.",
    live: "#",
    github: "#",
  },
  {
    title: "Blog Website",
    description: "Responsive blog website using React and CSS.",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects fade-in">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            className="project-card fade-in"
            key={index}
            style={{ "--i": index + 1 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              <a href={project.live} target="_blank">Live</a>
              <a href={project.github} target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
