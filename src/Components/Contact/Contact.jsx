import React from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  console.log("contact");
  return (
    <div className="bg-black text-white p-8 flex gap-20  justify-center">
      <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
      <div className="flex space-x-6">
        <a href="mailto:samadnadeem555@gmail.com">
          <MdEmail className="text-white h-12 w-12 hover:text-red-600" />
        </a>

        <a href="tel:+92 3121098045">
          <FaPhoneAlt className="text-white h-12 w-12 hover:text-green-500" />
        </a>

        <a href="https://www.linkedin.com/in/abdull-samad-52a4482a8/">
          <FaLinkedin className="text-white h-12 w-12 hover:text-blue-600" />
        </a>

        <a href="https://github.com/AbdulSamadNadeem">
          <FaGithub className="text-white h-12 w-12 hover:text-gray-800" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
