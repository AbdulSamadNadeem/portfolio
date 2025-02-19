import React, { useRef, useState } from "react";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import Myself from "./Components/Myself/Myself";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

const App = () => {
  const [showmyself, setmyself] = useState(false);
  const [showproj, setprojects] = useState(false);
  const scrrolltomf = useRef(null);
  const scrolltoproj = useRef(null);

  const scroll = () => {
    setmyself(!showmyself);
    setTimeout(() => {
      scrrolltomf.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
  const scrolltoproject = () => {
    setprojects(!showproj);
    setTimeout(() => {
      scrolltoproj.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
  return (
    <div>
      <Header />
      <Loader />
      <HeroSection contollers={{scroll , scrolltoproject}} />
      {showmyself && (
        <div ref={scrrolltomf} className="min-h-screen">
          <Myself />
        </div>
      )}
      {showproj && (
        <div ref={scrolltoproj} className="min-h-screen">
          <Projects />
        </div>
      )}
      {
        (showmyself || showproj) && (
          <Contact/>
        )
      }
    </div>
  );
};

export default App;
