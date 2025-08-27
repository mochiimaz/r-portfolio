import React, { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const currentYear = new Date().getFullYear();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // ย้าย NavItem เข้ามาข้างในเพื่อให้เข้าถึง isSidebarOpen ได้
  const NavItem = ({ to, icon, children }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center p-3 my-2 rounded-lg hover:bg-[#FFCBCB] transition-colors duration-200 ${
            isActive ? "bg-[#FFCBCB] text-red-900 font-semibold" : ""
          } ${
            // justify-center เมื่อ Sidebar ถูกย่อ เพื่อจัดไอคอนให้อยู่ตรงกลาง
            !isSidebarOpen && "justify-center"
          }`
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
    <aside
      className={`bg-[#FFE3E1] text-[#FF9494] h-screen flex-shrink-0 p-4 flex flex-col z-40 fixed md:sticky top-0 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-65" : "w-24"
      }`}
    >
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-[#FFCBCB] hover:text-red-900"
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

      {/* Navigation */}
      <nav className="flex-grow">
        <ul>
          {menuItems.map((item) => (
            <NavItem key={item.name} to={item.path} icon={item.icon}>
              {item.name}
            </NavItem>
          ))}
        </ul>
      </nav>

      {/* Footer */}
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
    </aside>
  );
}

export default Sidebar;
