import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import { SiLine } from "react-icons/si";

const menuItems = [
  { name: "Welcome", path: "/", icon: <FaHome size="1.5em" /> },
  { name: "About", path: "/about", icon: <FaUser size="1.5em" /> },
  { name: "Projects", path: "/projects", icon: <FaFolderOpen size="1.5em" /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope size="1.5em" /> },
];

const socialLinks = [
  { href: "https://www.facebook.com/share/1NQGhU56FQ/", icon: <FaFacebook /> },
  { href: "https://line.me/ti/p/GWLVMDk3Fg", icon: <SiLine /> },
  {
    href: "https://www.linkedin.com/in/wimonrat-yongsungnern-589623309/",
    icon: <FaLinkedin />,
  },
];

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const currentYear = new Date().getFullYear();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavItem = ({ to, icon, children }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center p-3 my-2 rounded-lg hover:bg-[#FFCBCB] transition-colors duration-200 ${
            isActive ? "bg-[#FFCBCB] text-red-900 font-semibold" : ""
          } ${!isSidebarOpen && "justify-center"}`
        }
      >
        {icon}
        <span
          className={`ml-4 font-medium whitespace-nowrap transition-all duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0 w-0 pointer-events-none"
          }`}
        >
          {children}
        </span>
      </NavLink>
    </li>
  );

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed top-1/2 -translate-y-1/2 z-50 
                   bg-[#FF9494] text-white w-5 h-16 flex items-center justify-center 
                   transition-transform duration-300 ease-in-out
                   ${
                     isSidebarOpen
                       ? "left-64 rounded-r-lg"
                       : "left-0 rounded-r-lg"
                   }`}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? "<" : ">"}
      </button>

      <aside
        className={`bg-[#FFE3E1] text-[#FF9494] h-screen flex-shrink-0 flex flex-col z-40 top-0 
          transition-all duration-300 ease-in-out
          fixed md:sticky
          ${
            isSidebarOpen
              ? "w-64 translate-x-0"
              : "w-64 -translate-x-full md:w-24 md:translate-x-0"
          }
        `}
      >
        {/* Header (ปุ่ม hamburger ข้างในจะใช้สำหรับ Desktop เท่านั้น) */}
        <div className="flex items-center mb-8 p-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-[#FFCBCB] hover:text-red-900 hidden md:block"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <span
            className={`ml-4 text-2xl font-bold whitespace-nowrap transition-all duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            My Portfolio
          </span>
        </div>

        {/* Navigation & Footer Wrapper */}
        <div className="flex-grow flex flex-col justify-between overflow-y-auto px-4 pb-4">
          <nav>
            <ul>
              {menuItems.map((item) => (
                <NavItem key={item.name} to={item.path} icon={item.icon}>
                  {item.name}
                </NavItem>
              ))}
            </ul>
          </nav>
          <footer
            className={`transition-all duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex justify-center space-x-6 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-red-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-center text-xs text-gray-700 whitespace-nowrap">
              © {currentYear} Wimonrat Y. <br /> All Rights Reserved.
            </p>
          </footer>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
