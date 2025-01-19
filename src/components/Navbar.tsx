import { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img title="Logo" className="w-9 h-9 object-contain" src={logo} />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Odilson &nbsp;{" "}
            <span className="sm:block hidden">| Software Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white cursor-pointer text-[18px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={link.url ? link.url : `#${link.id}`}
                target={link.url ? "_blank" : undefined}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            alt="Menu"
            src={toggle ? close : menu}
            className="h-18 w-18 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium  text-[16px] cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a
                  href={link.url ? link.url : `#${link.id}`}
                  target={link.url ? "_blank" : undefined}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
