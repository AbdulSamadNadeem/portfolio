import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Myself from "../Myself/Myself";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({contollers}) => {


  const container = useRef(null)
  useGSAP(() => {
       gsap.from(container.current , {
        delay:4.5,
        opacity:0,
        duration:1
       })
  }, []);

  return (
    <div ref={container} className="bg-black overflow-hidden flex  items-center justify-center mt-40">
      <div className="z-10 text-center text-white">
        <h1 className="text-6xl font-semibold tracking-tight leading-tight">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-2xl text-gray-300">
          A showcase of my projects, skills, and experience.
        </p>
        <div onClick={contollers.scrolltoproject} className="mt-8 flex justify-center space-x-6">
          <button className="px-6 py-3 border-2 border-white text-white rounded-lg transition-transform transform hover:scale-105">
            View Projects
          </button>
          <button onClick={contollers.scroll} className="px-6 py-3 bg-white text-black rounded-lg transition-transform transform hover:scale-105">
            About Me
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
