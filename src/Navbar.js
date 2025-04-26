import React, { useState } from "react";
import {
  FaRegChartBar,
  FaBars,
  FaTimes,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoDex from "./assets/images/logo_dex.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="rajdhani flex justify-between items-center px-8 py-5 text-white absolute top-0 left-0 right-0 w-full z-50 font-boldoa">
      {/* Kiri kosong / bisa diisi logo nanti */}
      <div className="flex items-center gap-2"></div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-col items-center gap-6">
        <li>
          <a
            href="https://t.me/okaycoinn"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto">
              <FaTelegramPlane size={35} color="#000000" />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://x.com/YunoCoinn"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto">
              <FaXTwitter size={35} color="#000000" />
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="block">
            <div className="min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center overflow-hidden bg-white mx-auto">
              <img src={logoDex} width={40} height={24} />
            </div>
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes size={28} color="#ffffff" />
        ) : (
          <FaBars size={28} color="#ffffff" />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 md:hidden bg-black/80">
          <li>
            <a
              href="https://t.me/okaycoinn"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto">
                <FaTelegramPlane size={35} color="#ffffff" />
              </div>
            </a>
          </li>

          <li>
            <a
              href="https://x.com/YunoCoinn"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto">
                <FaXTwitter size={35} color="#ffffff" />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="block">
              <div className="min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center overflow-hidden bg-white mx-auto">
                <img src={logoDex} width={40} height={24} />
              </div>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
