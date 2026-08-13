import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useLocale } from "../i18n/LocaleContext";
import LanguageToggle from "./LanguageToggle";

const NavBar = () => {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo flex items-center gap-2" onClick={closeMenu}>
          <img
            src="./images/profile.png"
            alt="Odilson Italis"
            width={40}
            height={40}
            decoding="async"
            className="w-9 h-9 xl:w-10 xl:h-10 rounded-full object-cover border border-white-50"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-sm xl:text-md font-semibold truncate">
              Odilson Italis
            </span>
            <span className="hidden xl:block text-xs text-gray-400">
              {t.nav.role}
            </span>
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

        <div className="flex items-center gap-2 xl:gap-4">
          <a
            href="https://rxresu.me/odilson-dev/odilson-italis-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors duration-300"
            title={t.nav.resume}
          >
            <Download className="w-4 h-4" />
            <span className="hidden xl:inline text-sm font-medium">
              {t.nav.resume}
            </span>
          </a>

          <a href="#contact" className="contact-btn group hidden sm:flex">
            <div className="inner">
              <span>{t.nav.hireMe}</span>
            </div>
          </a>
          <LanguageToggle />

          <button
            type="button"
            className="lg:hidden flex items-center justify-center p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu lg:hidden">
          <nav>
            <ul>
              {t.navLinks.map(({ link, name }) => (
                <li key={link}>
                  <a href={link} onClick={closeMenu}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu-actions">
            <a
              href="https://rxresu.me/odilson-dev/odilson-italis-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/10"
              onClick={closeMenu}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">{t.nav.resume}</span>
            </a>
            <a
              href="#contact"
              className="contact-btn group w-full"
              onClick={closeMenu}
            >
              <div className="inner w-full justify-center">
                <span>{t.nav.hireMe}</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
