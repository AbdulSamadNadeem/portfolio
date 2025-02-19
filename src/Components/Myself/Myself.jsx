import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBootstrap, FaGitAlt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiChartdotjs,
  SiExpress,
  SiGreensock,
  SiNextdotjs,
  SiNpm,
  SiSanity,
  SiSocketdotio ,
  SiRedux 
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
gsap.registerPlugin(ScrollTrigger);

const Myself = () => {
  const iconsRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      iconsRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);
  return (
    <div ref={iconsRef} className="flex flex-col justify-center items-center h-screen">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-white"><span className="font-sans">Hello, I'm </span>Abdul Samad</h1>
        <p className="text-3xl text-white font-sans font-light">I am a MERN Stack Developer with a passion for building modern web applications. I specialize in front-end and back-end development and love working with technologies like React, Node.js, Express, MongoDB, and more.</p>
      </div>
      <div className="flex justify-center mb-10">
        <h1 className="text-5xl font-extrabold text-white font-sans text-left">
          MY TECH STACK
        </h1>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-10 p-4">

  <div className="flex justify-center items-center">
    <FaHtml5 className="text-[#E34F26] w-14 h-14" />
  </div>

 
  <div className="flex justify-center items-center">
    <IoLogoCss3 className="text-[#1572B6] w-14 h-14" />
  </div>


  <div className="flex justify-center items-center">
    <FaJs className="text-[#F7DF1E] w-14 h-14" />
  </div>

 
  <div className="flex justify-center items-center">
    <FaReact className="text-[#61DBFB] w-14 h-14" />
  </div>

 
  <div className="flex justify-center items-center">
    <SiRedux className="text-[#563D7C] w-14 h-14" />
  </div>

  
  <div className="flex justify-center items-center">
    <FaBootstrap className="text-[#563D7C] w-14 h-14" />
  </div>


  <div className="flex justify-center items-center">
    <SiNextdotjs className="text-[#ffffff] w-14 h-14" />
  </div>

 
  <div className="flex justify-center items-center">
    <DiNodejs className="text-[#8CC84B] w-14 h-14" />
  </div>

  
  <div className="flex justify-center items-center">
    <SiExpress className="text-[#ffffff] w-14 h-14" />
  </div>


  <div className="flex justify-center items-center">
    <DiMongodb className="text-[#4DB33D] w-14 h-14" />
  </div>


  <div className="flex justify-center items-center">
    <SiGreensock className="text-[#88CC44] w-14 h-14" />
  </div>


  <div className="flex justify-center items-center">
    <SiChartdotjs className="text-[#FF6384] w-14 h-14" />
  </div>


  <div className="flex justify-center items-center">
    <SiSocketdotio className="text-[#563D7C] w-14 h-14" />
  </div>

 <div className="flex justify-center items-center">
    <RiTailwindCssFill className="text-[#06B6D4] w-14 h-14" />
  </div>

 
  <div className="flex justify-center items-center">
    <SiSanity className="text-[#3ECF8E] w-14 h-14" />
  </div>

 
  <div className="flex justify-center items-center">
    <SiNpm className="text-[#CB3837] w-14 h-14" />
  </div>

  
  <div className="flex justify-center items-center">
    <FaGitAlt className="text-[#CB3837] w-14 h-14" />
  </div>

  
  <div className="flex justify-center items-center">
    <IoLogoFirebase className="text-[#FFCA28] w-14 h-14" />
  </div>
</div>

    </div>
  );
};

export default Myself;
