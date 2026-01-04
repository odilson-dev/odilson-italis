import { ArrowUp } from "lucide-react";
import { socialImgs } from "../constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer py-12 border-t border-black-50 bg-linear-to-b from-transparent to-black-100/50">
      <div className="footer-container items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img
              src="./images/profile.png"
              alt="Odilson Italis"
              className="w-8 h-8 rounded-full object-cover border border-white-50/20"
            />
            <span className="font-semibold text-white-50 tracking-tight">
              Odilson Italis
            </span>
          </div>
          <p className="text-xs text-white-50/50 text-center md:text-start">
            © {new Date().getFullYear()} Odilson W. Italis. All rights reserved.
          </p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            const Icon = socialImg.icon;
            return (
              <a
                key={index}
                href={socialImg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon group"
                aria-label={socialImg.name}
              >
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            );
          })}
        </div>

        <div className="flex items-center justify-center md:justify-end gap-6">
          <p className="text-sm text-white-50/60">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by
            Odilson
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-black-50 bg-black-100 hover:bg-black-50 transition-all duration-300 group cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-white-50 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
