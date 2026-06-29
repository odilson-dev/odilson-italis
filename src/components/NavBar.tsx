import { Download } from "lucide-react";
import { useEffect, useState } from "react";

import { useLocale } from "../i18n/LocaleContext";
import LanguageToggle from "./LanguageToggle";

const NavBar = () => {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

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
            <span className="text-xs text-gray-400">{t.nav.role}</span>
          </div>
        </a>

        <nav className="desktop">
          <ul>
            {t.navLinks.map(({ link, name }) => (
              <li key={link} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />

          <a
            href="https://rxresu.me/odilson-dev/odilson-italis-resume"
            target="_blank"
            download
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors duration-300"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">{t.nav.resume}</span>
          </a>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>{t.nav.hireMe}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
