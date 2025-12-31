import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col gap-5 justify-center  items-center">
        <div className="socials">
          {socialImgs.map((socialImg, index) => {
            const Icon = socialImg.icon;
            return (
              <a
                key={index}
                href={socialImg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                aria-label={socialImg.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Odilson W. Italis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
