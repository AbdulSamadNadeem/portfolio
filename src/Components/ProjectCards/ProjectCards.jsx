import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, description, image, link }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card bg-gray-800 text-white rounded-lg shadow-lg p-6"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div>
        <p className="text-lg font-sans font-light">{description}</p>
      </div>
      <a
        href={link}
        className="text-blue-400 hover:underline mt-4 inline-block"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
