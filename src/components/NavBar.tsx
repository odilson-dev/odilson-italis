import { Download } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo flex items-center gap-2">
          <img
            src="./images/profile.png"
            alt="Odilson Italis"
            className="w-10 h-10 rounded-full object-cover border border-white-50"
          />
          <div className="flex flex-col">
            <span className="text-md font-semibold">Odilson Italis</span>
            <span className="text-xs text-gray-400">FullStack Developer</span>
          </div>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors duration-300"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Resume</span>
          </a>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Hire me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
