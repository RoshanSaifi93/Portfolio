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
      }, 120); 

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
