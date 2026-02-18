import "./Projects.css";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "Modern and responsive portfolio website built with React and Vite to showcase my frontend development skills and projects.",
    live: "https://syntecxhub-portfolio-ddfghkvxf-roshan-saifis-projects.vercel.app",
    github: "https://github.com/RoshanSaifi93/Syntecxhub_Portfolio.git",
  },
  {
    title: "Todo App",
    description:
      "A simple and interactive Todo application built using React, allowing users to add, manage, and delete tasks with a clean UI and React component architecture.",
    live: "#",
    github: "https://github.com/RoshanSaifi93/ToDo-React-App",
  },
  {
    title: "Weather App",
    description:
      "A responsive Weather App built with React that fetches real-time weather data using OpenWeather API. Features include city search, current location weather, loading states, error handling, and mobile-friendly UI.",
    live: "https://weather-app-khaki-pi-59.vercel.app",
    github: "https://github.com/RoshanSaifi93/Weather-App",
  },
  {
    title: "Expense Tracker",
    description:
      "A simple and responsive Expense Tracker application built with React and Bootstrap. Users can add and delete expenses, track total spending, and persist data using LocalStorage.",
    live: "https://expense-tracker-kohl-omega-18.vercel.app/",
    github: "https://github.com/RoshanSaifi93/Expense-Tracker",
  },
  {
    title: "Calculator",
    description:
      "A React-based calculator application that lets users perform basic arithmetic operations like addition, subtraction, multiplication, and division with an intuitive, responsive interface.",
    live: "https://amazon-ui-clone-omega.vercel.app",
    github: "https://github.com/RoshanSaifi93/Calculator-React.git",
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
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
