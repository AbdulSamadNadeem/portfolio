import React, { useEffect, useRef } from "react";
import gsap, { Power1 } from "gsap";
import { useGSAP } from "@gsap/react";
const Header = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(container.current, {
      delay: 4.5,
      opacity: 0,
      duration: 1.3,
      ease: Power1.easeIn,
    });
  }, []);

  return (
    <div>
      <div ref={container} className="flex items-center justify-evenly mt-10">
        <div>
          <h1 className="xl:text-4xl lg:text-xl md:text-lg text-sm font-bold text-white">
            &lt;Abdul Samad/&gt;
          </h1>
        </div>
        <div>
          <h1 className="xl:text-4xl lg:text-xl md:text-lg text-sm font-bold text-white">
            Crafting seamless digital experiences <br /> with the power of the{" "}
            <span>
              <span style={{ color: "#4CAF50" }}>M</span>{" "}
          
              <span style={{ color: "#fff" }}>E</span> 
              <span style={{ color: "#61DAFB" }}>R</span> 
              <span style={{ color: "#026E00" }}>N</span>{" "}
            
            </span>{" "}
            stack
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
