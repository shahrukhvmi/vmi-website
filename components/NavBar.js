import { useState } from "react";

export default function NavBar() {
  const navItems = ["Home", "About Us", "Services", "Portfolio", "Contact Us"];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-glow rounded-full z-50 flex justify-between items-center w-6xl ring-cursor max-container-width overflow-hidden">
      <div className="hero-spotlight"> </div>

      <div className="font-semibold text-white text-lg tracking-wide">
        <img src="/logo.png" alt="Vibrant Media Logo" />
      </div>
      <ul className="md:flex gap-6 text-sm text-white font-medium poppins-font">
        {navItems.map((item, i) => (
          <li
            key={i}
            className={`relative group nav-items${
              activeIdx === i ? " active" : ""
            }`}
          >
            <a
              href="#"
              className="hover:text-vibrant transition duration-300"
              onClick={() => setActiveIdx(i)}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-vibrant group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      <button className="flex items-center gap-2 nav-btn cursor-pointer poppins-font text-xl">
        Get Started{" "}
        {/* <span>
          <img src="/btn-icon.svg" />
        </span> */}
      </button>
    </nav>
  );
}
