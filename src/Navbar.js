import React from "react";
import { useState } from "react";
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
      <div className="flex items-center gap-2">
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-8">
        <a
          href="https://t.me/okaycoinn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
            <FaTelegramPlane size={35} color="#ffffff" />
          </div>
        </a>

        <a
          href="https://x.com/Okaycoinn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
            <FaXTwitter size={35} color="#ffffff" />{" "}
          </div>
        </a>

        <a href="#" className="flex items-center gap-2">
          {/* <div className="w-10 h-10 flex items-center justify-center">
            <FaRegChartBar size={40} color="#ffffff" />{" "}
          </div> */}
          <div className="min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center overflow-hidden bg-stone-900">
            <img src={logoDex} width={40} height={24} />
          </div>
        </a>
      </ul>

      {/* Mobile toggle */}
      <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes size={28} color="#ffffff" />
        ) : (
          <FaBars size={28} color="#ffffff" />
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 md:hidden">
          <a
            href="https://t.me/okaycoinn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <FaTelegramPlane size={35} color="#ffffff" />
            </div>
          </a>

          <a
            href="https://x.com/Okaycoinn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
              <FaXTwitter size={35} color="#ffffff" />{" "}
            </div>
          </a>

          <a href="#" className="flex items-center gap-2">
            {/* <div className="w-10 h-10 flex items-center justify-center">
            <FaRegChartBar size={40} color="#ffffff" />{" "}
          </div> */}
            <div className="min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center overflow-hidden bg-stone-900">
              <img src={logoDex} width={40} height={24} />
            </div>
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
