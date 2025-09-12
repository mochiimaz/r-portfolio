import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = ["About", "Projects", "Contact"];

  return (
    <nav className="bg-[#FFE3E1] p-4 sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-[#FF9494] text-xl font-semibold">
          My Portfolio
        </a>

        {/* ปุ่ม Hamburger (มือถือ) */}
        <button
          className="md:hidden text-[#FF9494]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* เมนู Desktop */}
        <ul className="hidden md:flex text-[#FF9494] space-x-6">
          {menus.map((menu) => (
            <li key={menu}>
              <Link
                to={
                  menu === "About"
                    ? "/about"
                    : menu === "Projects"
                    ? "/projects"
                    : "/contact"
                }
                className="hover:text-red-500"
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* เมนู Mobile */}
      {isOpen && (
        <ul className="md:hidden mt-3 flex flex-col space-y-2 text-[#FF9494] text-center">
          {menus.map((menu) => (
            <li key={menu}>
              <Link
                to={
                  menu === "About"
                    ? "/about"
                    : menu === "Projects"
                    ? "/projects"
                    : "/contact"
                }
                className="block hover:text-red-400"
                onClick={() => setIsOpen(false)} // ปิด menu หลังคลิก
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
