import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </>
//   );
// }

// export default App;

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .fade-left, .fade-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;