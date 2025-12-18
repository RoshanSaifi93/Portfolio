// import { useEffect, useState } from "react";
// import "./Hero.css";

// const Hero = () => {
//   const textToType = "Frontend Developer";
//   const [text, setText] = useState("");
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     if (charIndex < textToType.length) {
//       const timeout = setTimeout(() => {
//         setText(textToType.substring(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, 100);

//       return () => clearTimeout(timeout);
//     }
//   }, [charIndex]);

//   return (
//     <section className="hero fade-in" id="home">
//       <div className="hero-content fade-left">
//         <h1>
//           Hi, I'm <span>Roshan Saifi</span>
//         </h1>

//         <h2 className="typing">
//           {text}
//           <span className="cursor">|</span>
//         </h2>

//         <p>
//           Passionate frontend developer skilled in React, JavaScript, HTML, and
//           CSS. I love building clean and responsive web applications.
//         </p>

//         <div className="hero-buttons">
//           <a
//             href={`${import.meta.env.BASE_URL}Resume.pdf`}
//             target="_blank"
//             className="btn primary"
//           >
//             View Resume
//           </a>

//           <a
//             href="https://github.com/RoshanSaifi93"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://www.linkedin.com/in/roshan-saifi-104619382/"
//             target="_blank"
//             className="btn"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const textToType = "Frontend Developer";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textToType.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + textToType[index]);
        setIndex((prev) => prev + 1);
      }, 120); // 👈 typing speed (smooth & professional)

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="hero" id="home">
      <h1>Hi, I'm Roshan</h1>

      <h2 className="typing">
        {text}
        <span className="cursor">|</span>
      </h2>
    </section>
  );
};

export default Hero;
