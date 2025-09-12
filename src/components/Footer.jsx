import React from "react";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLine } from "react-icons/si"; // LINE icon

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFE3E1] p-4 mt-auto">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/share/1NQGhU56FQ/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF9494] hover:text-red-500 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://line.me/ti/p/GWLVMDk3Fg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF9494] hover:text-red-500 text-2xl"
        >
          <SiLine />
        </a>
        <a
          href="https://www.linkedin.com/in/wimonrat-yongsungnern-589623309/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF9494] hover:text-red-500 text-2xl"
        >
          <FaLinkedin />
        </a>
        {/* <a
          href="s640107030018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 text-2xl"
        >
          <FaEnvelope />
        </a> */}
      </div>

      <hr className="my-4 border-red-300" />
      <p className="text-center text-sm text-gray-700">
        © {currentYear} Wimonrat Yongsungnern. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
